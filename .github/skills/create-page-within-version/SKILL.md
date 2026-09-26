---
name: create-page-within-version
description: Add a new page to an existing prototype version with complete workflow, route configuration, and metadata updates
applyTo:
  - create a new page in an existing version
  - add another page to v3-*.js version folder
  - scaffold a new view file for a version
---

# Create Page Within Version

This skill guides you through adding a new page to an existing prototype version. Use this when you need to expand what a version demonstrates.

## Workflow

### Step 1: Identify Target Version
- Choose which version folder to add the page to (e.g., `v3-7-0-2`)
- Determine page name and URL path (lowercase, hyphens for spaces)

### Step 2: Create View File
- Create new HTML file in `app/views/{version}/` folder
- Use `.html` extension
- Extend base template: `{% extends "layouts/main.html" %}`
- Add content blocks with GOV.UK components
- **Tip**: Copy similar existing page as template and modify

### Step 3: Add Route to Version Router
- Open `app/routes_{version}.js` file
- Add route handler that renders your new view:
  ```javascript
  router.get('/page-name', function (req, res) {
    res.render(folder + '/page-name')
  })
  ```
- Place after `addLocalsMiddleware` but typically before or after related routes
- Test route locally: `npm run dev` then visit `/{version}/page-name`

### Step 4: Update pages Array in versions.json
- Open `app/views/versions.json`
- Find version entry (e.g., v3.7.0.2)
- Add new page to `pages` array:
  ```json
  {
    "url": "/v3-7-0-2/page-name",
    "title": "Page Title Here"
  }
  ```
- Maintain consistent ordering (logical journey or alphabetical)
- This array drives screenshot automation and page listing

### Step 5: Update Design History Posts (Optional)
- If this page relates to a design history post, add narrative description
- Edit `app/views/design-history/{version}/index.html`
- Add section with screenshot if available

### Step 6: Commit and Deploy
- Commit with message: `feat: Add page-name page to {version}`
- Push to repository
- Verify page appears on prototype instance

## Example

**Creating "Results" page for v3-7-0-2:**

1. Create file: `app/views/v3-7-0-2/results.html`
2. Add to `routes_v3-7-0-2.js`:
   ```javascript
   router.get('/results', function (req, res) {
     res.render(folder + '/results')
   })
   ```
3. Update `versions.json` v3.7.0.2 entry:
   ```json
   "pages": [
     { "url": "/v3-7-0-2/start", "title": "Start page" },
     { "url": "/v3-7-0-2/results", "title": "Results" }
   ]
   ```
4. Commit and push

## Best Practices

- **Naming**: Use lowercase, hyphenated names (e.g., `check-your-details`)
- **Structure**: Keep pages within version folders for organization
- **Routes**: Always use the `folder` variable for flexibility
- **URLs**: Match file name to URL path for consistency
- **Pages array**: Keep updated so screenshot automation works correctly
- **Testing**: Test route locally before committing

## Notes

⚠️ **Pages array matters for automation** — If a page isn't listed in `versions.json`, screenshot scripts won't capture it. Always keep this in sync.

💡 **Navigation**: Use backlink on pages: `{{ backlink }}` (injected by addLocalsMiddleware)

📋 **Page count**: When adding pages, version's `pages` array length determines how many screenshots to capture. Update this for design history entry creation.
