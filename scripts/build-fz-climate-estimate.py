#!/usr/bin/env python3
"""
Build the estimated flood zone 2 / flood zone 3 climate change layers used by the
v3.10.0.0 design spec (app/views/design-spec/fz-climate-change-layers-v3-10-0-0).

The real data only has ONE climate change extent covering zones 2 and 3 together. This script
splits it into an estimate from a screenshot of the real map.

Input (in the source folder)
  climate-change.png   REQUIRED. The live service with Datasets: Flood zones and Climate change:
                       2070 to 2125, at the default layer opacity (75). Crop it to the map only, with no
                       panels or buttons on top. It shows present day zones 2 and 3 plus the climate
                       change extent, which is all the estimate needs.
  base.png             OPTIONAL. The same view with Datasets: None, for the exact basemap. Without it, the
                       basemap is taken from climate-change.png with the flood layers painted white.

Estimate
  - Flood zone 2 with climate change = the whole climate change extent (present day zones 2 and 3
    plus the extra area the climate change layer adds).
  - Flood zone 3 with climate change = the part of that extent closest to present day flood zone 3,
    sized so that zone 3's share of the extent matches zone 3's share of present day flood zone 2.

This is a design estimate, not flood modelling. It only exists so stakeholders can judge the
menu, key and styling against a realistic map.

Requires: python3, numpy, scipy, pillow.

Usage:
  python3 scripts/build-fz-climate-estimate.py [--focus-x 0.4] [--focus-y 0.5] \
      [--source app/views/design-spec/fz-climate-change-layers-v3-10-0-0/images/source] \
      [--out app/views/design-spec/fz-climate-change-layers-v3-10-0-0/images]

The wireframes show a tall map (620 x 720), so a wide screenshot is cropped. --focus-x and --focus-y
(0 to 1) choose where the crop is centred.
"""
import argparse
import os
import sys

import numpy as np
from PIL import Image
from scipy import ndimage as ndi

WIDTH, HEIGHT = 1240, 1440  # 2x the 620 x 720 map area used in the wireframes

# How each layer looks on screen at the service's default 75% opacity, sampled from the live map
COLOURS = {
    'fz3': (62, 83, 130),
    'fz2': (84, 131, 178),
    'cc': (247, 187, 161),
}
TOLERANCE = 16
MIN_AREA = 12  # source pixels. Smaller specks are basemap lines and labels, not layer


def crop_to_aspect(image, focus_x, focus_y):
    target = WIDTH / HEIGHT
    w, h = image.size
    if w / h > target:
        new_w, new_h = round(h * target), h
    else:
        new_w, new_h = w, round(w / target)
    left = min(max(round(focus_x * w - new_w / 2), 0), w - new_w)
    top = min(max(round(focus_y * h - new_h / 2), 0), h - new_h)
    return image.crop((left, top, left + new_w, top + new_h)), (left, top, new_w, new_h)


def classify(image, rgb):
    pixels = np.asarray(image).astype(int)
    mask = np.sqrt(((pixels - np.array(rgb)) ** 2).sum(axis=2)) < TOLERANCE
    mask = ndi.binary_closing(mask, structure=np.ones((3, 3)), iterations=1)
    labels, count = ndi.label(mask)
    if count:
        sizes = ndi.sum(mask, labels, range(1, count + 1))
        mask = np.isin(labels, [i + 1 for i, size in enumerate(sizes) if size >= MIN_AREA])
    return mask


def fill_seams(fz3, fz2_only, cc_added, width=2):
    """Give hairline gaps between layers to the nearest layer.

    The one pixel blend where two layers (or a layer and the basemap) meet matches no layer colour, so it
    would otherwise show as a white seam. Gaps wider than about 2 x width pixels, such as roads, are kept.
    """
    flood = fz3 | fz2_only | cc_added
    pad = width * 4
    padded = np.pad(flood, pad, mode='edge')
    closed = ndi.binary_closing(padded, structure=np.ones((3, 3)), iterations=width)[pad:-pad, pad:-pad]
    gaps = closed & ~flood
    if not gaps.any():
        return fz3, fz2_only, cc_added
    _, (rows, cols) = ndi.distance_transform_edt(~flood, return_indices=True)
    near_fz3 = fz3[rows, cols] & gaps
    near_cc = cc_added[rows, cols] & gaps & ~near_fz3
    near_fz2 = gaps & ~near_fz3 & ~near_cc
    return fz3 | near_fz3, fz2_only | near_fz2, cc_added | near_cc


def simplify(points, epsilon):
    """Ramer-Douglas-Peucker: reduce a path to straight segments that stay within epsilon of it."""
    points = np.asarray(points, dtype=float)
    if len(points) < 3:
        return points
    start, end = points[0], points[-1]
    line = end - start
    length = np.hypot(*line)
    if length == 0:
        distances = np.hypot(*(points - start).T)
    else:
        distances = np.abs(line[0] * (points[:, 1] - start[1]) - line[1] * (points[:, 0] - start[0])) / length
    index = int(np.argmax(distances))
    if distances[index] > epsilon:
        left = simplify(points[:index + 1], epsilon)
        right = simplify(points[index:], epsilon)
        return np.vstack([left[:-1], right])
    return np.vstack([start, end])


def centre_line(band, epsilon=14):
    """A straight-segment line through the middle of the largest piece of a band, row by row."""
    labels, count = ndi.label(band, structure=np.ones((3, 3)))
    if not count:
        return None
    sizes = ndi.sum(band, labels, range(1, count + 1))
    piece = labels == (int(np.argmax(sizes)) + 1)
    rows = np.flatnonzero(piece.any(axis=1))
    if rows.size < 50:
        return None
    xs = np.array([np.flatnonzero(piece[row]).mean() for row in rows])
    xs = ndi.median_filter(xs, size=21)
    return simplify(list(zip(xs[::6], rows[::6])), epsilon) / 2  # 2x pixels to wireframe units


def write_defence_path(extent, band, path):
    """Write illustrative flood defences as SVG paths in the wireframe map's 620 x 720 units.

    One follows the outer edge of the climate change extent, next to the zone 2 band. The other runs along
    the estimated zone 3 climate change band, so the line can be seen over that colour too.
    """
    rows = np.arange(HEIGHT)
    lower = rows > 0.5 * HEIGHT
    xs = np.full(HEIGHT, np.nan)
    for row in rows[lower]:
        cols = np.flatnonzero(extent[row, : int(0.7 * WIDTH)])
        if cols.size:
            xs[row] = cols.min()
    valid = ~np.isnan(xs)
    lines = []
    if valid.sum() >= 50:
        xs[valid] = ndi.median_filter(xs[valid], size=15)
        lines.append(simplify([(xs[row], row) for row in rows[valid][::6]], epsilon=14) / 2)
    over_band = centre_line(band)
    if over_band is not None:
        lines.append(over_band)
    if not lines:
        return
    with open(path, 'w') as handle:
        handle.write('{# Generated by scripts/build-fz-climate-estimate.py. Illustrative flood defences, not real data. #}\n')
        for points in lines:
            d = 'M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in points)
            handle.write(f'<path d="{d}"/>\n')


def upscale(mask, sigma=0.6):
    """Scale a boolean mask to the output size, keeping soft edges."""
    image = Image.fromarray((mask * 255).astype('uint8'))
    image = image.resize((WIDTH, HEIGHT), Image.BICUBIC)
    return ndi.gaussian_filter(np.asarray(image).astype(float) / 255, sigma)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    root = os.path.join(here, '..', 'app', 'views', 'design-spec', 'fz-climate-change-layers-v3-10-0-0', 'images')
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--source', default=os.path.join(root, 'source'))
    parser.add_argument('--out', default=root)
    parser.add_argument('--focus-x', type=float, default=0.4)
    parser.add_argument('--focus-y', type=float, default=0.5)
    args = parser.parse_args()

    climate_path = os.path.join(args.source, 'climate-change.png')
    if not os.path.exists(climate_path):
        sys.exit(f'Missing {climate_path}')
    os.makedirs(args.out, exist_ok=True)

    climate, box = crop_to_aspect(Image.open(climate_path).convert('RGB'), args.focus_x, args.focus_y)

    fz3 = classify(climate, COLOURS['fz3'])
    fz2_only = classify(climate, COLOURS['fz2']) & ~fz3
    cc_added = classify(climate, COLOURS['cc']) & ~fz3 & ~fz2_only
    fz3, fz2_only, cc_added = fill_seams(fz3, fz2_only, cc_added)
    fz2 = fz2_only | fz3
    cc = fz2 | cc_added

    fz2_area, fz3_area, cc_area = int(fz2.sum()), int(fz3.sum()), int(cc.sum())
    if not fz2_area or not cc_area:
        sys.exit('Could not find the flood zone and climate change colours. Check the screenshot is at default '
                 'layer opacity with Climate change set to 2070 to 2125, or update COLOURS in this script.')

    # Zone 3's share of present day flood zone 2 is applied to the climate change extent
    share = fz3_area / fz2_area
    target = int(round(share * cc_area))
    distance = ndi.distance_transform_edt(~fz3) if fz3_area else np.full(fz3.shape, np.inf)
    candidates = distance[cc]
    if target > 0 and fz3_area:
        k = min(target, candidates.size) - 1
        threshold = np.partition(candidates, k)[k]
        fz3cc = ((distance <= threshold) & cc) | fz3
    else:
        fz3cc = fz3.copy()
    fz3cc = ndi.binary_opening(fz3cc, iterations=1) | fz3
    fz3cc &= cc

    # Basemap: the exact basemap if supplied, otherwise the screenshot with the flood layers painted white
    base_path = os.path.join(args.source, 'base.png')
    if os.path.exists(base_path):
        base, _ = crop_to_aspect(Image.open(base_path).convert('RGB'), args.focus_x, args.focus_y)
    else:
        pixels = np.asarray(climate).copy()
        pixels[ndi.binary_dilation(cc, iterations=1)] = 255
        base = Image.fromarray(pixels)
    base.resize((WIDTH, HEIGHT), Image.LANCZOS).save(os.path.join(args.out, 'map-base.jpg'), quality=88)

    # Approximate dark style basemap: the outdoor basemap inverted onto the dark style's background colour (#2c2c2c).
    # It is an approximation for the wireframes, not the real dark tiles.
    grey = np.asarray(base.resize((WIDTH, HEIGHT), Image.LANCZOS).convert('L')).astype(float)
    dark = 44 + (255 - grey) * 0.45
    Image.fromarray(np.stack([dark] * 3, axis=2).clip(0, 255).astype('uint8')).save(
        os.path.join(args.out, 'map-base-dark.jpg'), quality=88)

    for name, mask in {'fz2': fz2, 'fz3': fz3, 'fz2cc': cc, 'fz3cc': fz3cc}.items():
        soft = upscale(mask)
        Image.fromarray((np.clip(soft, 0, 1) * 255).astype('uint8')).save(os.path.join(args.out, f'mask-{name}.png'))

    added = max(cc_area - fz2_area, 0)

    # Illustrative flood defence, used only to test how lines look next to the climate change layers. It is
    # not real data. Real defences are thin vector lines made of long straight runs with angular bends, so
    # this follows the outer edge of the climate change extent (where it would sit next to the new bands)
    # but is simplified to straight segments. It is written as an SVG path for the wireframe map.
    write_defence_path(upscale(cc) > 0.5, (upscale(fz3cc) > 0.5) & ~(upscale(fz3) > 0.5),
                       os.path.join(here, '..', 'app', 'views', 'design-spec', 'fz-climate-change-layers-v3-10-0-0',
                                    'partials', 'defence-path.html'))
    print(f'crop (left, top, width, height) in the screenshot: {box}')
    print(f'flood zone 2 (present day) area : {fz2_area} px')
    print(f'flood zone 3 (present day) area : {fz3_area} px  ({share:.1%} of zone 2)')
    print(f'climate change extent area      : {cc_area} px  (adds {added} px, {added / fz2_area:.1%} more than present day)')
    print(f'estimated zone 3 climate change : {int(fz3cc.sum())} px  ({fz3cc.sum() / cc_area:.1%} of the extent)')
    print(f'estimated zone 2 only (visible) : {int((cc & ~fz3cc).sum())} px')
    print(f'written to {os.path.abspath(args.out)}')


if __name__ == '__main__':
    main()
