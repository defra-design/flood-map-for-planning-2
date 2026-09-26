---
name: design-history-entry
description: "Create new design history posts quickly for each prototype release. Use when: adding a new design history entry at the end of a release, documenting design changes with screenshots, or creating version history reports. Streamlines formatting, image organization, and navigation links."
---

# Design History Entry Workflow

Create and integrate design history posts into the flood-map-for-planning-2 prototype with a consistent structure and minimal friction.

## When to Use This Skill

- **End of each prototype release** — Document design changes that happened during development
- **After user research rounds** — Capture research findings and design decisions
- **Version bumps** — Create history report as part of your release process
- **Quick design updates** — Log notable changes to existing features

## Workflow Overview

```
GATHER INPUTS
    ↓
Create post structure with metadata
    ↓
Organize & embed screenshots
    ↓
Write design narrative (one per screenshot)
    ↓
Generate navigation links
    ↓
Integrate into design history index
```

## Step-by-Step Process

### 1. Gather Information

Before invoking this skill, have ready:

- **Release version** (e.g., `0-3-7` or `release-0-3-7`)
- **Release date** (e.g., `2026-09-25`)
- **List of changes/features** (bullet points)
- **Screenshots** (batch can upload; organizing into one folder)
- **Design narratives** (one short description per screenshot explaining the change)
- **Tags/categories** (optional: e.g., `boundary-drawing`, `user-research`, `accessibility`)

### 2. Invoke the Skill

In Copilot chat, use:

```
@copilot #design-history-entry
Create a design history entry for version 0.3.7 with:
- Release date: 2026-09-25
- Key changes: [list changes]
- Screenshots: [paste or describe]
- Narrative: [explain each change]
```

Or more conversationally:

```
I want to add design history for our latest release. 
We made changes to the boundary drawing tool 
and improved the results page layout.
```

**⚠️ Important:** Before running this skill, check if the version already has a card on the index page. If it does:
- You can still run this skill to automate the post folder and screenshots
- Just **ignore the generated card template** — don't add it to index.html
- Update the existing card's links instead (see "Three workflows" section below)

See "Three workflows" section below for guidance.

### 3. Skill Outputs

The skill will generate:

#### A. Formatted HTML Post
```
app/views/design-history/
  0-3-7/
    index.html         (formatted post with all content)
    images/
      change-1.png
      change-2.png
      ...
```

#### B. Navigation Updates
- Entry added to design history index
- Link added to main prototype index if applicable
- Previous post linked for chronological navigation

#### C. Metadata
- YAML front matter with date, version, tags
- Proper heading hierarchy
- Accessible image alt text

## Content Structure Template

Each design history post follows this structure:

```html
<main class="govuk-main-wrapper">
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      
      <h1 class="govuk-heading-xl">Release 0.3.7</h1>
      <p class="govuk-body-l">Published {{ date }}</p>
      
      <!-- Change sections -->
      <h2 class="govuk-heading-l">Change 1: Title</h2>
      <p class="govuk-body">Explanation of the change and why it was made...</p>
      <img src="images/change-1.png" alt="[Descriptive alt text]">
      
      <h2 class="govuk-heading-l">Change 2: Title</h2>
      <!-- ... -->
      
      <!-- Navigation -->
      <hr class="govuk-section-break">
      <p class="govuk-body">
        <a href="../0-3-6/">Previous version: Release 0.3.6</a>
      </p>
    </div>
  </div>
</main>
```

## Prompt Examples

### Example 1: Basic Release Documentation

```
@copilot #design-history-entry

Version: 0.3.7
Date: September 25, 2026

Key changes:
- Improved boundary drawing tool with snap-to-feature
- Results page shows risk scoring details
- Added keyboard shortcuts for accessibility

Screenshots to include:
1. Boundary tool with snap indicators
2. Results page with risk scoring breakdown
3. Help panel showing keyboard shortcuts

Please create the design history post with these three changes documented.
```

### Example 2: Research Round Documentation

```
@copilot #design-history-entry

This was a user research round (Release 0.3.5-research)
Date: October 14, 2025

We tested with 8 users. Key findings:
- Users preferred simplified map controls
- Results page needed clearer risk explanation
- Export feature was rarely used

Changes made based on research:
1. Streamlined toolbar
2. Added risk category icons
3. Hid export feature (moved to advanced options)

I have screenshots showing before/after for each change.
```

### Example 3: Quick Bug Fix Release

```
@copilot #design-history-entry

Quick release 0.3.6 patch
Date: January 22, 2026

What changed:
- Fixed map loading on mobile devices
- Corrected flood risk descriptions (typos)
- Improved loading spinner visibility

Just one screenshot showing the improved mobile experience.
```

## Three Workflows

Depending on whether a version card already exists, you have options:

### Workflow A: No card exists yet
1. Run this skill (creates post + screenshots + card template)
2. Copy the generated card template to `app/views/index.html`
3. Commit

**Use when:** This is a completely new version with no card on index page yet.

### Workflow B: Card exists, create post manually
1. Don't run the skill — create the post folder manually
2. Update the existing card's design history link
3. Copy an existing post's `index.html` as your template
4. Manually take screenshots or use a screenshot script

**Use when:** You prefer complete manual control and don't want Playwright automation.

### Workflow C: Card exists, automate post (recommended ⭐)
1. **Run this skill** (creates post + screenshots + posts.json entry automatically)
2. **Ignore the card template** the skill generates
3. Update the existing card's links in `index.html` or `versions.json`
4. Commit

**Benefits:** Fastest approach — gets automated screenshot generation and post structure, while keeping your existing card.

**Use when:** Version card was created with create-prototype-version skill, and you want to add design history with screenshots.

---

## Updating an Existing Version Card

If the version already appears on the index page (created via create-prototype-version skill or manually added), you don't need to create a new card. Instead:

### For Workflow C (recommended): Quick update after running skill

1. Open `versions.json`
2. Find your version and add/update:
   ```json
   "designHistoryUrl": "/design-history/3-7-0-3/"
   ```
3. Card updates automatically from JSON
4. Commit

### For Workflow B (manual approach): Update card in HTML

1. Open `app/views/index.html`
2. Find the card for your version (search for the version number)
3. Update these fields:
   - **Date**: Change from "In development" or "TBC" to actual date
   - **Status/Type**: Update to "Research round - TBC" or final date
   - **Links**: Add design history link once post is ready
4. Commit changes

### Example updates

**Before (in-development version):**
```html
<p class="govuk-body-m govuk-!-margin-bottom-2" style="color: #626a6e;">In development</p>
<!-- ... -->
<span class="govuk-body-m" style="color: #626a6e;">Design history not yet available</span>
```

**After (design history published):**
```html
<p class="govuk-body-m govuk-!-margin-bottom-2" style="color: #626a6e;">Research round - TBC</p>
<!-- ... -->
<a href="/design-history/3-9-0-0/" class="govuk-link govuk-body-m">v3.9.0.0 research findings</a>
```

### Check before adding a new card

Always search `app/views/index.html` for your version number first:
- If found: Update the existing card
- If not found: Add the new card template

This prevents duplicate cards and keeps the index clean.

## Best Practices

### Screenshot Quality
- **Optimal size**: 800-1200px wide (scales responsibly)
- **Format**: PNG or JPEG (avoid BMP, TIFF)
- **Alt text**: Descriptive (e.g., "Boundary drawing tool showing snap-to-feature indicator on road")
- **Multiple angles**: If showing complex features, capture multiple states (empty, in-progress, complete)

### Writing Design Narrative
- **Keep it concise**: 1-2 sentences per change
- **Explain the why**: "Users struggled with X, so we changed Y"
- **Use plain language**: Assume non-technical readers
- **Link to issues**: Reference GitHub issues or research if applicable

### Version Naming
- **Semantic versioning**: `0.3.7` (major.minor.patch)
- **Research rounds**: `release-0-3-5-research` or `surface-water-depths-cc`
- **Consistent format**: Dashes, not dots, for folder names

### Metadata & Tags
Use tags to make posts discoverable:
- Feature areas: `boundary-drawing`, `results-page`, `map-controls`
- Activity type: `user-research`, `release`, `bugfix`, `accessibility`
- Date-based: `2026-q3`, `release-cycle-5`

## Automated Screenshot Capture (Optional)

You can automate full-page screenshots for all pages listed in "Changed pages in this version" to save manual screenshot work.

### Prerequisites
- Prototype server running locally (`npm run dev`)
- Playwright installed (included in project dependencies)

### Usage

After creating your design history post, run the screenshot helper:

```bash
node scripts/screenshot-version-X-X-X.js --version X.X.X
```

**Example:**
```bash
node scripts/screenshot-version-3-6-1.js --version 3.6.1
```

### What It Does

1. Reads the version's pages from `versions.json`
2. Launches a browser and navigates to each page
3. Captures full-page screenshots (scrolls entire page height)
4. Saves images sequentially: `01-page-name.png`, `02-page-name.png`, etc.
5. Generates HTML snippet ready to paste into your post
6. Saves snippet to `app/views/design-history/[version]/screenshot-snippet.html`

### Options

```bash
--version VERSION      Version number (required, e.g., 3.6.1)
--base-url URL         Prototype URL (default: http://localhost:3000)
--width WIDTH          Browser viewport width in pixels (default: 1280)
--headless BOOL        Run in headless mode (default: true)
--help                 Show usage information
```

### Example with Options

```bash
# Custom prototype URL and viewport width
node scripts/screenshot-version-3-6-1.js --version 3.6.1 --base-url http://localhost:5000 --width 1024

# With visible browser window
node scripts/screenshot-version-3-6-1.js --version 3.6.1 --headless false
```

### Workflow

1. Create design history post with the skill
2. Ensure prototype server is running: `npm run dev`
3. Run the screenshot helper for your version
4. Copy the generated snippet from console or `screenshot-snippet.html` file
5. Paste into your post template to replace placeholder images
6. Edit alt text as needed for accessibility

### Notes

- Screenshots are captured at the specified viewport width (default 1280px)
- Full page height is captured (includes scrolled content)
- Screenshots are saved in PNG format
- Existing images will be overwritten (useful for updating)
- Script requires the "Changed pages" entries to have proper URLs in `versions.json`

### ⚠️ Important: NPM Dependencies and Deployment

The screenshot helper script uses Playwright, which has peer dependency conflicts with the current @arcgis/core version. To prevent deployment failures:

**Do this when installing packages:**
```bash
npm install --legacy-peer-deps
```

**Don't forget:** Commit the updated `package-lock.json` to git after installing packages.

**Why:** The `.npmrc` file includes `legacy-peer-deps=true` to handle these conflicts locally, but Heroku needs the lockfile to be in sync. If you run `npm install` without the flag and don't commit the lockfile, Heroku deployments will fail with "npm lockfile is not in sync" errors.

## File Organization

```
app/views/design-history/
  index.html                     (landing page listing all posts)
  0-3-3/
    index.html
    images/
      feature-1.png
      feature-2.png
  0-3-5/
    index.html
    images/
  0-3-6/
  0-3-7/
    index.html
    images/
  _layouts/
    post.html                  (template for individual posts)
  posts.json                     (metadata index for navigation)
```

## Integration Points

### Main Prototype Index
Link from your main prototype landing page:
```html
<a href="/design-history/">View design history</a>
```

### Version Pages
Link from prototype version pages (e.g., routes_v3-8-0-0.js) to corresponding history:
```html
<a href="/design-history/0-3-8/#release-notes">View what changed in this version</a>
```

### README
Update README.md to note that design history is now integrated:
```markdown
## Design History
All design changes, research findings, and release notes are documented 
in the [Design History](/design-history/) section of this prototype.
```

## Ongoing Workflow Integration

### At Each Release
1. Test new version in prototype
2. Screenshot key changes (2-5 per release typical)
3. Run this skill to create history entry
4. Update version pages to link to new entry
5. Commit and deploy

### Metadata Maintenance
Keep `app/views/design-history/posts.json` updated:
```json
[
  {
    "version": "0.3.7",
    "date": "2026-09-25",
    "url": "/design-history/0-3-7/",
    "title": "Release 0.3.7",
    "tags": ["boundary-drawing", "accessibility"],
    "summary": "Improved boundary tool with snap-to-feature and keyboard shortcuts"
  }
]
```

This enables:
- Chronological navigation
- Tag-based filtering
- Search functionality
- Linked timelines

## Common Scenarios

### Scenario: You have old posts from the Eleventy design history app
Use the `#design-history-entry` skill to **recreate** them with:
```
@copilot #design-history-entry

Migrate from design-history app to prototype.
Old post URL: https://design-history-app.herokuapp.com/release-0-3-3/
I'll provide the markdown content and screenshot paths.
```

### Scenario: Quick iteration, many small releases
Keep it lean—document only *notable* changes:
- Major features: include
- Minor tweaks: mention in changelog only
- Typo fixes: skip design history, note in commit message

### Scenario: Research findings need documentation
Create special posts tagged `user-research`:
```
@copilot #design-history-entry

Research round: Surface water depths (October 2025)
8 participants, key findings:
- [Finding 1]
- [Finding 2]
```

## Troubleshooting

**Problem**: Images aren't displaying in the formatted post  
**Solution**: Check image paths are relative and stored in `images/` subdirectory

**Problem**: Navigation links between posts are broken  
**Solution**: Ensure version folders match naming convention (e.g., `0-3-7` not `0.3.7`)

**Problem**: Post doesn't show up in index  
**Solution**: Confirm entry added to `posts.json` and index.html template updated

## Next Phase: Automation Hooks (Future)

Once this is established, consider:
- **Git hook** that prompts for design history when tagging releases
- **CI/CD integration** that auto-generates screenshot galleries
- **Search indexing** of all design history posts
- **Comparison view** between versions (show before/after side-by-side)
