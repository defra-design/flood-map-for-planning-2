---
name: create-page-variant
description: Create an alternative version of an existing page within the same research round to enable split testing different journey options or design choices
applyTo:
  - create a variant of an existing page for split testing
  - add alternative journey option in same version
  - test two different approaches to same task
  - create conditional page variants for research
---

# Create Page Variant

This skill guides you through creating page variants for split testing within a single prototype version. Use variants when testing multiple approaches to the same task or journey in the same research round.

## When to Use Variants

- **Journey options**: Two different paths to accomplish same goal (e.g., upload with/without research sign-up)
- **Design alternatives**: Testing different visual approaches or interaction patterns
- **Error handling variations**: Different error message approaches
- **Content options**: Testing different content lengths or explanation approaches
- **Same research round**: Variants belong in same version folder to compare during testing

## Workflow

### Step 1: Identify Base Page and Variant Approach
- Choose existing page to variant (e.g., `check-your-details.html`)
- Define variant purpose in one phrase (e.g., "without research sign-up", "compact version", "mobile-optimized")
- Decide: Show variant based on query parameter, session data, or always show as separate page

### Step 2: Create Variant View File
- Create new file: `app/views/{version}/[original-name]-[variant].html`
- **Naming pattern**: Keep original name, add dash and variant descriptor
  - Base: `check-your-details.html`
  - Variants: `check-your-details-no-research-sign-up.html`, `check-your-details-compact.html`
- Copy base page HTML and modify for variant
- Add comment at top explaining variant purpose:
  ```html
  <!-- Variant: Check your details without research sign-up flow -->
  <!-- Used in split test to measure impact of research sign-up on completion -->
  ```

### Step 3: Add Routes for Variant
- Open `app/routes_{version}.js`
- Add route for variant page:
  ```javascript
  router.get('/check-your-details-no-research-sign-up', function (req, res) {
    res.render(folder + '/check-your-details-no-research-sign-up')
  })
  ```
- Keep both original and variant routes active (don't remove original)
- Document in route file which is base and which are variants:
  ```javascript
  // Check your details page (base journey)
  router.get('/check-your-details', function (req, res) {
    res.render(folder + '/check-your-details')
  })
  
  // Variant: Check your details without research sign-up
  router.get('/check-your-details-no-research-sign-up', function (req, res) {
    res.render(folder + '/check-your-details-no-research-sign-up')
  })
  ```

### Step 4: Update pages Array in versions.json
- Open `app/views/versions.json`
- Add variant as separate entry in `pages` array:
  ```json
  "pages": [
    { "url": "/v3-7-0-2/start", "title": "Start page" },
    { "url": "/v3-7-0-2/check-your-details", "title": "Check your details" },
    { "url": "/v3-7-0-2/check-your-details-no-research-sign-up", "title": "Check your details (no research sign-up)" },
    { "url": "/v3-7-0-2/confirmation", "title": "Confirmation" }
  ]
  ```
- List variant immediately after base page for clarity
- Use descriptive title showing variant purpose
- **This ensures screenshot automation captures both paths**

### Step 5: Create Navigation Between Variants
- Add links on variant pages so research participants can try both:
  ```html
  <p class="govuk-body">
    <a href="/{{ folder }}/check-your-details">Try the full version with research sign-up</a>
  </p>
  ```
- Or add at parent/decision page:
  ```html
  <p class="govuk-body">
    Choose which check flow you prefer:
  </p>
  <ul class="govuk-list">
    <li><a href="/{{ folder }}/check-your-details">Full journey</a></li>
    <li><a href="/{{ folder }}/check-your-details-no-research-sign-up">Simplified version</a></li>
  </ul>
  ```

### Step 6: Document Variant Purpose
- Edit `app/views/design-history/{version}/index.html`
- Add section explaining variant testing:
  ```html
  <h3 class="govuk-heading-m">Testing Variants</h3>
  <p class="govuk-body">
    This round tested two approaches to the check your details page:
  </p>
  <ul class="govuk-list govuk-list--bullet">
    <li><strong>Full journey</strong>: Includes research sign-up opportunity</li>
    <li><strong>Simplified version</strong>: Removes research sign-up, focuses on confirmation</li>
  </ul>
  <p class="govuk-body">
    See both variants in screenshots below.
  </p>
  ```

### Step 7: Capture Screenshots
- Run screenshot automation: variants should be captured as separate entries
- Both `/check-your-details` and `/check-your-details-no-research-sign-up` will generate separate PNG files
- **Naming**: Screenshot filenames will reflect URL, e.g.:
  - `07-check-your-details.png`
  - `08-check-your-details-no-research-sign-up.png`

### Step 8: Add Screenshots to Design History
- Embed both variant screenshots in post with comparative description:
  ```html
  <h3 class="govuk-heading-m">Check your details - Full version</h3>
  <img src="images/07-check-your-details.png" alt="Check your details with research sign-up">
  
  <h3 class="govuk-heading-m">Check your details - Simplified version</h3>
  <img src="images/08-check-your-details-no-research-sign-up.png" alt="Check your details without research sign-up">
  ```

### Step 9: Commit and Document
- Commit: `feat: Add variant of check-your-details for split testing`
- Include in commit message what variant is testing and why
- Link to any research documentation or analysis from variant testing

## Example: Research Sign-Up Variant

**Scenario**: Testing if research sign-up opportunity increases participation

**Files created/modified**:
1. Create: `app/views/v3-7-0-2/check-your-details-no-research-sign-up.html`
2. Modify: `app/routes_v3-7-0-2.js` (add route)
3. Modify: `app/views/versions.json` (add page entry)
4. Modify: `app/views/design-history/3-7-0-2/index.html` (document variant)

**Pages array after variant added** (7 becomes 10 pages):
```json
"pages": [
  { "url": "/v3-7-0-2/start", "title": "Start page" },
  { "url": "/v3-7-0-2/upload-boundary", "title": "Upload boundary" },
  { "url": "/v3-7-0-2/error-300-hectare", "title": "300 hectare error" },
  { "url": "/v3-7-0-2/error-file-format", "title": "File format error" },
  { "url": "/v3-7-0-2/error-file-size", "title": "File size error" },
  { "url": "/v3-7-0-2/error-boundary-format", "title": "Boundary format error" },
  { "url": "/v3-7-0-2/check-your-details", "title": "Check your details" },
  { "url": "/v3-7-0-2/check-your-details-no-research-sign-up", "title": "Check your details (no research sign-up)" },
  { "url": "/v3-7-0-2/confirmation", "title": "Confirmation" },
  { "url": "/v3-7-0-2/confirmation-email", "title": "Confirmation email" }
]
```

## Best Practices

- **Naming clarity**: Variant names should be descriptive, not numbered (not "v1", "v2" — use "no-research-sign-up", "compact")
- **Keep originals**: Never delete base page when creating variant; test both in same version
- **Document purpose**: Always explain in design history what variant is testing and why
- **Route organization**: Group variant routes together with base in code for readability
- **Links**: Make it easy for research participants to switch between variants
- **Screenshot ordering**: Place variant screenshot immediately after base in design history
- **Analysis**: Record findings from variant testing for decision-making

## Notes

🔄 **Both paths active**: Variants don't replace base pages — they coexist for A/B testing during research sessions

📸 **Screenshot automation**: Variants are automatically captured if listed in `pages` array — no extra work needed

📊 **Research insights**: Variants let you gather evidence on design decisions ("research sign-up: +25% opt-in rate")

⚠️ **After research**: Decide which variant to carry forward to next version; don't keep "losing" variants indefinitely

💡 **Version progression**: When creating next version, include learnings from variant testing (implement winning variant as default)

📝 **Design history**: Make sure design history clearly shows variant testing and findings — this becomes valuable design precedent
