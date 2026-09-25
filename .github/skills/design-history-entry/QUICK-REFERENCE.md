# Design History Entry - Quick Reference

Use this checklist when creating a new design history entry.

## Pre-Entry Checklist

- [ ] **Version number** finalized (e.g., 0.3.7)
- [ ] **Release date** confirmed
- [ ] **Screenshots captured** (2-5 per release recommended)
  - [ ] Saved in single folder, clearly named
  - [ ] 800-1200px wide
  - [ ] PNG format preferred
- [ ] **Change descriptions written** (one per screenshot)
  - [ ] Explain the change
  - [ ] Explain why it was made
  - [ ] 2-3 sentences per change
- [ ] **Tags identified** (optional but recommended)
  - Examples: `boundary-drawing`, `user-research`, `accessibility`, `mobile`, `release`
- [ ] **Previous version identified** for navigation link (if not first entry)

## Invocation Template

Copy and adapt this when calling the skill:

```
@copilot #design-history-entry

Create design history entry for Release [VERSION]

Release date: [DATE]
Key changes:
1. [Change 1 title] - [brief description]
2. [Change 2 title] - [brief description]
3. [Change 3 title] - [brief description]

Screenshots:
- change-1.png: [what it shows]
- change-2.png: [what it shows]
- change-3.png: [what it shows]

Previous version to link: [e.g., 0-3-6]
Tags: [e.g., boundary-drawing, accessibility]
```

## Output Checklist (After Skill Runs)

Verify the skill output includes:

- [ ] **Post HTML file** created at `app/views/design-history/[VERSION]/index.html`
- [ ] **Images folder** at `app/views/design-history/[VERSION]/images/`
- [ ] **All screenshots** copied to images folder
- [ ] **Navigation link** to previous version included
- [ ] **posts.json** updated with new entry
- [ ] **Design history index** updated with new version link
- [ ] **Alt text** provided for all images
- [ ] **Dates formatted** consistently (ISO in code, human-readable in display)

## Common Quick Wins

### 1-Change Release
```
@copilot #design-history-entry

Quick release 0.3.6 - Mobile optimization
Date: 2026-01-22
Change: Fixed map rendering on mobile devices
Screenshot: mobile-map-fix.png
Previous: 0-3-5
```

### User Research Round
```
@copilot #design-history-entry

User research: Boundary tool study
Round: October 2025
Participants: 8 users
Key findings & resulting changes:
1. Users wanted visual feedback → Added snap indicators
2. Keyboard users needed shortcuts → Added keyboard controls
Screenshots: snap-indicator.png, keyboard-help.png
Tags: user-research, accessibility
```

### Feature-Heavy Release
```
@copilot #design-history-entry

Release 0.3.7 - Major improvements
Date: 2026-09-25
Changes:
1. Boundary tool snap-to-feature
2. Results page risk scoring redesign
3. New keyboard shortcuts
4. Mobile improvements
Screenshots: boundary-snap.png, results-redesign.png, help-panel.png, mobile-view.png
Tags: boundary-drawing, results-page, accessibility, mobile
```

## File Paths Reference

After the skill runs, your structure will be:

```
app/views/design-history/
├── index.html                         ← Landing page
├── posts.json                         ← Metadata (auto-updated)
├── 0-3-3/
│   ├── index.html
│   └── images/
│       ├── feature-1.png
│       └── feature-2.png
├── 0-3-5/
├── 0-3-6/
└── 0-3-7/
    ├── index.html
    └── images/
        ├── boundary-snap.png
        ├── results-redesign.png
        └── help-panel.png
```

Access it at: `http://localhost:3000/design-history/`

## Maintenance

**Weekly**: None required  
**Per-release**: Run this skill for each version bump  
**Monthly**: Review design history for broken links or missing metadata  
**Quarterly**: Archive old research posts, refresh summary list

## Support

If the skill output doesn't look right:
1. Check all screenshots are in the provided folder
2. Verify version number format (0-3-7 with dashes)
3. Confirm screenshot descriptions are clear
4. Check date format is ISO (YYYY-MM-DD)

Need help? Review the full skill documentation: [SKILL.md](./SKILL.md)
