---
name: generate-design-history-changelog
description: Create a summary changelog of design history changes across one or more versions, extracting key findings and research impacts
applyTo:
  - create a changelog for a release or research round
  - summarize changes across multiple versions
  - generate stakeholder summary of what changed
  - create release notes from design history
---

# Generate Design History Changelog

This skill helps you extract key changes and research findings from design history posts to create targeted changelogs for stakeholders, release documentation, or project retrospectives.

## Workflow

### Step 1: Define Changelog Scope
- **Single version**: Focus on one research round or release
- **Date range**: Summarize multiple posts from start to end date
- **Tag filter**: Extract all posts with specific tag (e.g., all "surface-water" posts)
- **Example**: "Show all changes from v3.6.1 through v3.7.0.3"

### Step 2: Extract Metadata from posts.json
- Open `app/views/design-history/posts.json`
- Identify relevant posts by:
  - Version number
  - Date range
  - Tags (filter by research focus)
  - Type (research vs release)
- Copy version, date, title, tags, and summary for each

### Step 3: Read Design History Posts
- Navigate to `app/views/design-history/{version}/index.html` for each relevant post
- Extract key sections:
  - **Research focus**: What was being tested/explored?
  - **Key findings**: What did you learn?
  - **Key areas explored**: List of features/journeys tested
  - **Screenshots**: What pages were created/modified?
- Note both features added and research insights gained

### Step 4: Synthesize into Changelog Structure
Create markdown document with structure:

```markdown
# Changelog: [Title] ([Version/Date Range])

## Overview
[1-2 sentence summary of release or research round]

## Research Findings
- [Key finding 1]
- [Key finding 2]
- [Impact or next steps]

## Features & Changes
- **Feature area 1**: Description of change and why
- **Feature area 2**: Description of change and why

## Pages in This Round
- Start page
- Upload boundary
- Results page
[etc. - list all pages with descriptions]

## Tags
research-sign-up, boundary-upload, map-styling
```

### Step 5: Create Changelog File
**Option A: Add to design history**
- Create `app/views/design-history/{version}/changelog.md`
- Link from post: `<a href="changelog.md">Full changelog</a>`
- Useful for detailed project documentation

**Option B: Create standalone releases document**
- Create `CHANGELOG.md` in project root if not exists
- Add entry for this version/date range
- Update regularly as new versions release
- Useful for GitHub releases and stakeholder visibility

### Step 6: Distribute to Stakeholders
- Share generated changelog in:
  - Email to research team/stakeholders
  - GitHub release notes (if released)
  - Project documentation
  - Team wiki/knowledge base
- Include link to full design history posts for deep dives

## Example

**Changelog for v3.7.0.3 research round:**

```markdown
# Changelog: Research Round v3.7.0.3 (September 2026)

## Overview
Product 1 integration and map styling improvements tested with users. Findings inform styling decisions and Product 1 interaction patterns.

## Research Findings
- Users prefer darker boundary colors for clarity
- Product 1 information panel layout needs simplified navigation
- Help text for opacity slider should appear inline, not on hover

## Features & Changes
- **Map styling**: Product 1 colors and styling options tested
- **Product 1 integration**: User flows for selecting and filtering by Product 1 tested

## Pages in This Round
- Start page (Product 1 entry point)
- Product 1 selection
- Results filtered by Product 1

## Tags
product-1, map-styling
```

## Best Practices

- **Synthesis over transcription**: Don't copy entire posts — extract key insights
- **User-focused language**: Explain features in terms of user benefit, not just technical change
- **Research to action**: Connect findings to what changed or what's next
- **Date consistency**: Use same date format throughout (ISO 8601: YYYY-MM-DD)
- **Tag usage**: Include tags from posts.json for easy filtering by topic
- **Links**: Link back to full design history posts for readers wanting details

## Notes

📊 **Trend spotting**: Changelogs help identify themes:
- Multiple posts with "boundary" tag? Boundary handling is actively iterated
- "Research" tags clustering? User research informing design
- "Release" after "research"? Research findings making it to production

🔄 **Reusability**: Keep changelog structure consistent so stakeholders know what to expect

🎯 **Audience-specific**: Create different changelogs for different audiences:
- **Designers/researchers**: Focus on research findings and user insights
- **Stakeholders**: Focus on features and timeline
- **Developers**: Focus on scope and page changes

💾 **Version control**: Keep changelogs in git so you can track evolution over time

⚠️ **Keep in sync**: When updating design history posts, review if changelog summary needs update
