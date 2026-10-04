---
name: create-user-flow
description: Create the user flow page for a new prototype version by copying the previous version's user flow and updating its prototype links, version card link and metadata. Run as part of creating a new prototype version.
status: discovery
applyTo:
  - create a user flow for a new prototype version
  - copy the user flow into a new version
  - set up the user flow page for a version
---

# Create a User Flow for a New Version

> **Status: Discovery.** This skill is still being explored. The steps below are a starting point and may change. Record anything that doesn't work well under [Open questions](#open-questions).

A user flow is a page (`app/views/{version}/user-flow.html`) that shows each journey through the service as small desktop and mobile wireframes, with the live and prototype address of each page. The wireframes are drawn by a shared file, `app/views/includes/user-flow/wireframes.njk`, so the version file only holds its lists. See the guide at `/documentation/user-flow-guide` (pages in `app/views/documentation/user-flows/`).

This skill runs as part of `#create-prototype-version`, after the new version folder exists. It can also be run on its own for a version that doesn't have a user flow yet.

---

## Information needed

- **New version** (e.g., `3.9.0.0` → folder `v3-9-0-0`)
- **Version to copy from** – default: the newest version that has `app/views/v*/user-flow.html`

---

## Workflow

### Step 1: Find the user flow to copy
- Look for `app/views/v*/user-flow.html` and pick the newest version that has one (currently `v3-8-0-0`)
- If none exists, stop and tell the user – the first user flow was made by hand

### Step 2: Copy it into the new version
- Copy to `app/views/{new-version}/user-flow.html`
- Do **not** change anything below the `journeys` and `otherPages` lists (page layout and scripts). Do not copy `includes/user-flow/wireframes.njk` – it is shared
- No route is needed: the Prototype Kit serves `app/views/{new-version}/user-flow.html` at `/{new-version}/user-flow` automatically

### Step 3: Check the prototype links
For every step in `journeys` and every page in `otherPages`:
- A `prototype` value **without** a leading slash (e.g. `"map"`) links to the page in the new version's folder. Check `app/views/{new-version}/{value}.html` exists
- A `prototype` value **with** a leading slash (e.g. `"/v3-7-0-2/upload"`) links to that exact address. Leave it, but mention it in the summary
- If a page doesn't exist in the new version, **don't delete the step**. Set `"prototype": ""` and list it in the summary so the user can decide
- Don't change `live` values – they describe the live service, not the prototype

### Step 4: Update the version card on the home page
In `app/views/index.html`, find the new version's card and add a user flow link after the prototype link:
```html
<a href="/v3-9-0-0/user-flow" class="govuk-link govuk-body-m">View v3.9.0.0 user flow</a>
```
If the card was made from `.github/skills/create-prototype-version/card-template.html`, this is the `{{USER_FLOW_LINK}}` placeholder.

### Step 5: Update versions.json
Add to the version's entry in `app/views/versions.json`:
```json
"userFlowUrl": "/v3-9-0-0/user-flow"
```

### Step 6: Update the Related links
In `app/views/index.html`, under **Related links and information**, point the **User flow** link at the new version:
```html
<a href="/v3-9-0-0/user-flow" class="govuk-link govuk-link--no-visited-state">User flow</a>
```
Ask first if the user wants the home page to keep pointing at the older version (for example while the new one is still being built).

### Step 7: Check the page loads
- If the prototype is running, open `http://localhost:3000/{new-version}/user-flow`
- Otherwise, check the file for Nunjucks syntax errors (missing or extra commas in the lists are the usual cause)

### Step 8: Summarise
Tell the user:
- where the user flow was copied from
- which steps had their prototype link cleared because the page doesn't exist in the new version
- which steps link to other versions
- that the journeys themselves haven't changed – use `#edit-user-flow` to update them

---

## Files touched

| File | Change |
|------|--------|
| `app/views/{new-version}/user-flow.html` | New – copied from previous version |
| `app/views/index.html` | User flow link on the version card, Related links updated |
| `app/views/versions.json` | `userFlowUrl` added |

---

## Open questions

These are being explored in discovery:

- Should the user flow be created automatically by `#create-prototype-version`, or offered as an optional step?
- Should journeys be carried over unchanged, or should the skill ask which journeys have changed in the new version?
- Should the skill try to fill in `prototype` links automatically by matching page names in the new version folder?
- Should the home page **User flow** link always point to the newest version?

---

## Related

- `#create-prototype-version` – creates the version this user flow belongs to
- `#edit-user-flow` – change journeys, steps and pages in a user flow
- Guide: `/documentation/user-flow-guide`
