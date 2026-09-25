# Quick Reference: Create New Prototype Version

## Checklist

### Before Running Skill
- [ ] Version number decided (e.g., `3.9.0.0`)
- [ ] Type chosen: release / in-development / research
- [ ] Know roughly when version will release (or "TBC")

### Skill Execution
- [ ] Run: `@copilot #create-prototype-version`
- [ ] Provide version info when asked
- [ ] Copilot creates scaffolding
- [ ] Copy generated card HTML to `app/views/index.html`
- [ ] Commit changes: `git add . && git commit -m "feat: Scaffold v[version]"`

### After Skill (Design Phase)
- [ ] Create views in `/app/views/v[version]/`
- [ ] Add routes to `routes_v[version].js`
- [ ] Update `app/views/versions.json` with tags as features are finalized
- [ ] Update `pages` list in JSON as you create new pages
- [ ] Update date when release/research date is confirmed

### When Design History Post is Ready
- [ ] Add `designHistoryUrl` to versions.json entry

---

## JSON Structure Reference

```json
{
  "number": "3.9.0.0",
  "type": "in-development",              // or "release", "research"
  "date": "TBC",                         // or "Release - 15 Feb 2026"
  "tags": [],                            // Add as you design: ["tag1", "tag2"]
  "pages": [],                           // Add as you create pages
  "prototypeUrl": "/v3-9-0-0/",
  "designHistoryUrl": null               // Add when post exists
}
```

---

## Common Edits

### Add a feature tag
```json
"tags": ["boundary-upload", "map-styling", "new-feature"]
```

### Add pages
```json
"pages": [
  { "name": "Start page", "url": "/v3-9-0-0/" },
  { "name": "Map page", "url": "/v3-9-0-0/map" },
  { "name": "Results", "url": "/v3-9-0-0/results" }
]
```

### Update date (once confirmed)
**For release:**
```json
"date": "Release - 22 January 2026"
```

**For research:**
```json
"date": "Research round - January 2026"
```

### Add design history link (when post created)
```json
"designHistoryUrl": "/design-history/3-9-0-0/"
```

---

## File Locations

| File | Purpose |
|------|---------|
| `/app/views/v3-9-0-0/` | Your prototype views |
| `/app/routes_v3-9-0-0.js` | Version-specific routes |
| `/app/routes.js` | Routes index (updated by skill) |
| `/app/views/versions.json` | Version metadata (updated by skill) |
| `/app/views/index.html` | Home page (manually add card) |

---

## Need Help?

- **Folder setup**: Run skill
- **Route configuration**: Ask Copilot to show example from existing version
- **Adding pages**: Update `versions.json` and create view file
- **Design history link**: Add URL to `designHistoryUrl` after post is published

