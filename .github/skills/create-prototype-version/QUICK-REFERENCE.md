# Quick Reference: Create New Prototype Version

## Checklist

### Before Running Skill
- [ ] Version number decided (e.g., `3.9.0.0`)
- [ ] Type chosen: release / in-development / research / snapshot
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
- [ ] If the design moves on before the version is tested, change it to a design snapshot
- [ ] If the version has a user flow, add `userFlowUrl` to versions.json and a user flow link to the card

### When Design History Post is Ready
- [ ] Add `designHistoryUrl` to versions.json entry

---

## JSON Structure Reference

```json
{
  "number": "3.9.0.0",
  "type": "in-development",              // or "release", "research", "snapshot"
  "date": "TBC",                         // or "Release - 15 Feb 2026"
  "tags": [],                            // Add as you design: ["tag1", "tag2"]
  "pages": [],                           // Add as you create pages
  "prototypeUrl": "/v3-9-0-0/",
  "userFlowUrl": null,                   // Add when user flow exists
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

**For a design snapshot (not tested):**
```json
"type": "snapshot",
"date": "Design snapshot - not tested"
```

### Add user flow link (when user flow created)
```json
"userFlowUrl": "/v3-9-0-0/user-flow"
```
Also add the link to the card in `index.html`.

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

