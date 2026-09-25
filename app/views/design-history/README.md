# Design History

This folder contains design history posts documenting changes, research findings, and feature releases for the Flood Map for Planning prototype.

## Structure

```
design-history/
├── index.html              # Landing page listing all posts
├── posts.json              # Metadata index for all posts (navigation, search)
├── _layouts/
│   └── post.html          # Template for individual post pages
├── 0-3-3/                 # Release 0.3.3 post
│   ├── index.html         # Post content
│   └── images/            # Screenshots for this release
├── 0-3-5/                 # Release 0.3.5 post
├── 0-3-6/                 # Release 0.3.6 post
└── images/                # Shared images folder (optional)
```

## Adding a New Post

### Using the Skill (Recommended)

```bash
@copilot #design-history-entry

Release [VERSION]
Date: [YYYY-MM-DD]
Changes: [your changes]
Screenshots: [files]
Previous version: [VERSION]
```

The skill will:
1. Create a new folder for the version (e.g., `0-3-7/`)
2. Generate a formatted HTML post with your content
3. Organize screenshots in the `images/` subfolder
4. Update `posts.json` with the new entry
5. Link it to the index and previous versions

### Manual Post Creation

1. Create a new folder: `design-history/[VERSION]/`
2. Create `design-history/[VERSION]/index.html` using the template below
3. Add screenshots to `design-history/[VERSION]/images/`
4. Update `posts.json` with metadata for the new post
5. Update the `index.html` landing page to include a card linking to the new post

### Post Template

```html
{% extends "design-history/_layouts/post.html" %}

{% block post %}

<h1 class="govuk-heading-xl">Release [VERSION]</h1>

<p class="govuk-body-l">
  Published <time datetime="[YYYY-MM-DD]">[Date]</time>
</p>

<h2 class="govuk-heading-l">[Change Title]</h2>
<p class="govuk-body">[Description of change]</p>
<img src="images/[filename].png" alt="[Descriptive alt text]">

<!-- Repeat for each change -->

{% endblock %}
```

## Metadata (posts.json)

Each post entry should include:

```json
{
  "version": "0.3.7",
  "date": "2026-09-25",
  "url": "/design-history/0-3-7/",
  "title": "Release 0.3.7",
  "type": "release",        // or "research", "bugfix"
  "tags": ["boundary-drawing", "accessibility"],
  "summary": "Brief one-liner"
}
```

## Best Practices

- **Screenshot size**: 800-1200px wide
- **File format**: PNG preferred for UI, JPEG for photos
- **Alt text**: Descriptive and specific (e.g., "Boundary drawing tool with snap-to-feature indicator")
- **Version naming**: Use semantic versioning with dashes (0-3-7, not 0.3.7)
- **Date format**: ISO 8601 (YYYY-MM-DD)
- **Tags**: Lowercase, dashes for multi-word (user-research, boundary-drawing)

## Navigation

- **Back link**: All posts have a "Back to design history" link using the post layout
- **Previous version**: Link to previous release at bottom of each post
- **Landing page**: Lists all releases in reverse chronological order

## Integration Points

- Main prototype index: Links to `/design-history/` in intro paragraph
- Version pages: Can link to corresponding design history entry
- README.md: Updated to note design history is integrated

## Migrating from Design History App

To move existing posts from the separate design-history application:

1. Export Eleventy markdown posts and screenshots from `flood-map-for-planning-design-history`
2. Use the design-history-entry skill to recreate each post with screenshots and narrative
3. Verify all links and images display correctly
4. Commit and deploy

See the `design-history-entry` skill documentation for detailed migration guidance.

## Questions?

Refer to the skill documentation at `.github/skills/design-history-entry/SKILL.md`
