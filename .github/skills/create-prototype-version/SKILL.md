# Skill: Create a New Prototype Version

## Overview

This skill scaffolds a new prototype version for iterative design work. It handles:
- Creating folder structure
- Setting up route files
- Generating HTML card template
- Creating version metadata entry
- Populating with placeholder data

**Best for:** Quick version setup when you're ready to start prototyping and will populate tags/pages iteratively as you design.

---

## Workflow

### Phase 1: Setup (Automated via Copilot)
1. Copilot creates `/app/views/v[version]/` folder structure
2. Copilot generates `routes_v[version].js` file
3. Copilot adds route to `/app/routes.js`
4. Copilot generates HTML card template
5. Copilot creates versions.json entry (or updates existing)

### Phase 2: Design (Manual, Iterative)
1. Design your views in `/app/views/v[version]/`
2. Add/update routes in `routes_v[version].js` as you create pages
3. Update tags/pages in versions.json as features solidify
4. Add design history link when post is created

### Phase 3: Publish (Manual)
1. Copy generated HTML card into `app/views/index.html`
2. Update date field when release date is confirmed
3. Update tags/pages fields when design is complete

---

## How to Use

### Invoke the Skill

```
@copilot #create-prototype-version
```

### Provide Information

You'll be asked for:

**Required:**
- **Version number** (e.g., `3.9.0.0`)
- **Type** (release / in-development / research)
  - `release`: Completed, shipped to production
  - `in-development`: Active design work
  - `research`: User research round (maps to research findings URL)

**Optional (can be added/updated later):**
- **Date**: Release/research date (use "TBC" for research, exact date for releases)
- **Tags**: Initial feature tags (empty array OK, add as you design)
- **Pages**: Initial page list (empty array OK, add as you build views)

---

## Example Workflow

### Step 1: Invoke
```
@copilot #create-prototype-version
```

### Step 2: Answer Questions
```
Version: 3.9.0.0
Type: in-development
Date: TBC
Tags: [] (empty, will add later)
Pages: [] (empty, will add later)
```

### Step 3: Copilot Creates
- ✅ Folder: `/app/views/v3-9-0-0/`
- ✅ Route file: `/app/routes_v3-9-0-0.js`
- ✅ Entry in `/app/routes.js`
- ✅ HTML card template (ready to copy)
- ✅ versions.json entry

### Step 4: Start Designing
```
# Create your views
/app/views/v3-9-0-0/index.html
/app/views/v3-9-0-0/map.html
# etc.

# Update route file with your page paths
/app/routes_v3-9-0-0.js
```

### Step 5: Update Metadata (As You Go)
Edit `app/views/versions.json` to add tags and pages:
```json
{
  "number": "3.9.0.0",
  "tags": ["new-feature", "map-improvements"],
  "pages": [
    { "name": "Start page", "url": "/v3-9-0-0/" },
    { "name": "Map page", "url": "/v3-9-0-0/map" }
  ]
}
```

### Step 6: Publish Card (When Ready)
Copy generated HTML card into `app/views/index.html`

### Step 7: Add Design History Link (When Post Exists)
Update versions.json:
```json
"designHistoryUrl": "/design-history/3-9-0-0/"
```

---

## Folder Structure Created

```
app/
  ├── views/
  │   └── v3-9-0-0/          ← NEW
  │       ├── index.html       (empty, ready for start page)
  │       ├── layouts/         (symlink or copy from existing version)
  │       └── ...
  ├── routes_v3-9-0-0.js     ← NEW
  ├── routes.js               (UPDATED: adds route)
  └── ...

versions.json                  (UPDATED: new entry)
```

---

## Generated Files

### 1. Route File (routes_v[version].js)

```javascript
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const folder = "v3-9-0-0"

// Add your routes here
require('./router/addLocalsMiddleware')(router, folder)

// Add version-specific route handlers as needed
// Example: require('./router/addResultsPageRoutes')(router, folder)

module.exports = router
```

### 2. HTML Card Template

Generates a card for `app/views/index.html`:

```html
<!-- v3.9.0.0 -->
<div class="version-card govuk-!-padding-4" data-tags="TAG1 TAG2 TAG3" style="border: 1px solid #b1b4b6;">
  <h3 class="govuk-heading-m govuk-!-margin-0 govuk-!-margin-bottom-2">v3.9.0.0</h3>
  <p class="govuk-body-m govuk-!-margin-bottom-2" style="color: #626a6e;">TBC</p>
  <div style="margin-bottom: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
    <span class="govuk-tag" data-tag="TAG1">Tag 1</span>
    <span class="govuk-tag" data-tag="TAG2">Tag 2</span>
  </div>
  <details class="govuk-details" style="margin-bottom: 1.5rem;">
    <summary class="govuk-details__summary">
      <span class="govuk-details__summary-text">Pages in this version</span>
    </summary>
    <div class="govuk-details__text">
      <ul class="govuk-list">
        <li><a class="govuk-link" href="/v3-9-0-0/">Page name</a></li>
      </ul>
    </div>
  </details>
  <hr class="govuk-section-break govuk-section-break--m govuk-section-break--visible" style="margin: 1rem 0;">
  <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
    <a href="/v3-9-0-0/" class="govuk-link govuk-body-m">View v3.9.0.0 prototype</a>
    <span style="color: #b1b4b6;">•</span>
    <span class="govuk-body-m" style="color: #626a6e;">Design history not yet available</span>
  </div>
</div>
```

### 3. versions.json Entry

```json
{
  "number": "3.9.0.0",
  "type": "in-development",
  "date": "TBC",
  "tags": [],
  "pages": [],
  "prototypeUrl": "/v3-9-0-0/",
  "designHistoryUrl": null
}
```

---

## Common Tasks

### Add a Tag
Edit `app/views/versions.json`:
```json
"tags": ["boundary-upload", "map-styling"]
```

The filter checkboxes update automatically.

### Add a Page
Edit `app/views/versions.json`:
```json
"pages": [
  { "name": "Start page", "url": "/v3-9-0-0/" },
  { "name": "Map page", "url": "/v3-9-0-0/map" }
]
```

The "Pages in this version" list updates automatically.

### Update Release Date
When date is confirmed, edit `app/views/versions.json`:
```json
"date": "Release - 15 February 2026"
```

Or for research rounds:
```json
"date": "Research round - February 2026"
```

### Link to Design History
When design history post is published, edit `app/views/versions.json`:
```json
"designHistoryUrl": "/design-history/3-9-0-0/"
```

---

## Next Steps

1. **Invoke this skill** with version details
2. **Copilot creates scaffolding** (folders, routes, entries)
3. **You design and iterate** in the version folder
4. **Update metadata** (tags, pages, dates) as you progress
5. **Publish card** when ready

---

## Tips

- **Don't rush metadata**: Start with empty tags/pages, add as features solidify
- **Date flexibility**: Use "TBC" initially, update when confirmed
- **Design history later**: You can add the URL anytime after post is published
- **Folder copy**: If you need to copy view templates from an existing version, ask Copilot to do it
- **Route updates**: As you add pages, update `routes_v[version].js` and `versions.json` pages list together

---

## Template Variables

Used in generated files:
- `{{VERSION}}` → version number (e.g., `3.9.0.0`)
- `{{VERSION_ID}}` → folder version ID (e.g., `v3-9-0-0`)
- `{{TYPE}}` → type (release/in-development/research)
- `{{DATE}}` → date string (or "TBC")
- `{{TAGS}}` → initial tags list (empty or provided)
- `{{PAGES}}` → initial pages list (empty or provided)

