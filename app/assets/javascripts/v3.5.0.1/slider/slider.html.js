export default `
<div class="color-viewer-sliders" role="group" aria-labelledby="id-color-viewer">
  <h3 id="id-color-viewer">Opacity</h3>
  <div class="color-slider opacity" role="slider" tabindex="0" aria-valuemin="0" aria-valuenow="50" aria-valuemax="100" aria-labelledby="id-opacity">
     <svg width="0" height="0" aria-hidden="true">
      <text class="value" x="0" y="0">50</text>
      <rect class="rail" x="0" y="0" rx="0" width="0" height="0"></rect>
      <rect class="fill" x="0" y="0" rx="0" width="0" height="0"></rect>
      <rect class="thumb" x="0" y="0" rx="0" width="0" height="0"></rect>
      <rect class="focus" x="0" y="0" rx="0" width="0" height="0"></rect>
    </svg>
  </div>  

  <h4>Color View Box</h4>
  <div class="color-info">
    <label>
      Color (RGB):
      <input type="text" readonly="" class="color-value-rgb" value="">
    </label>
  </div>
</div>
`