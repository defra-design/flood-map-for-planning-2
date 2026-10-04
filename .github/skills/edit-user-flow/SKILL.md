---
name: edit-user-flow
description: Edit a version's user flow page – add, remove or reorder steps and journeys, update live and prototype links, add pages outside the main flow, or add a new screen type.
status: discovery
applyTo:
  - add a step to the user flow
  - add a journey to the user flow
  - update the user flow
  - change a screen in the user flow
  - add a page outside the main flow
  - add a new screen type to the user flow
---

# Edit a User Flow

> **Status: Discovery.** This skill is still being explored. The steps below are a starting point and may change. Record anything that doesn't work well under [Open questions](#open-questions).

A user flow is a page (`app/views/{version}/user-flow.html`) that shows each journey through the service as small desktop and mobile wireframes. The wireframes, steps and styles are drawn by a shared file, `app/views/includes/user-flow/wireframes.njk`, used by every version and by the guide. See the guide at `/documentation/user-flow-guide` (pages in `app/views/documentation/user-flows/`) for how it works.

---

## Information needed

- **Version** – which user flow to edit (default: the newest version with a `user-flow.html`)
- **What to change** – in the user's words, e.g. "add a contact details step after results in the main journey"

---

## Where things live in the file

Only edit these two lists near the top of `user-flow.html`:

| List | Holds |
|------|-------|
| `journeys` | Journeys, each with a `heading` and a list of `steps`, shown in order with arrows |
| `otherPages` | Pages outside the main flow, shown in a dashed box with a "Linked from" list |

Each step or page:
```
{ "type": "radio", "title": "Triage page", "live": "/triage", "prototype": "options-radio", "note": "Optional note" }
```

| Field | Meaning |
|-------|---------|
| `type` | Screen type – see list below |
| `title` | Label above the screen |
| `live` | Address on the live service – plain text, can include placeholders like `/results?[polygonstring]` |
| `prototype` | Page in the prototype – a link. No leading slash = same version folder |
| `note` | Short note under the screen |
| `from` | `otherPages` only – list of pages that link to it |

A **choice step** shows several screens side by side in a dashed box, where the user goes through one of them and then carries on. It counts as one step. It has `choice` (a short label, used as the accessible name) and `options` (a list of normal steps) instead of `type`:
```
{ "choice": "Add a boundary", "options": [
  { "type": "draw-polygon", "title": "Draw a polygon", "live": "/map", "prototype": "map" },
  { "type": "draw-square",  "title": "Add a square", "live": "/map", "prototype": "map" },
  { "type": "upload",       "title": "Upload a boundary", "live": "/upload", "prototype": "upload" }
] }
```

Screen types: `start`, `hero`, `signin`, `tasklist`, `text`, `radio`, `checkbox`, `check`, `confirmation`, `dashboard`, `map`, `draw-polygon`, `draw-square`, `upload`, `results`, `product1`, `content`.

---

## Workflow

### Step 1: Read the current lists
- Open `app/views/{version}/user-flow.html` and read `journeys` and `otherPages`
- Confirm which journey and position the user means if it's ambiguous (for example the same page appears in several journeys)

### Step 2: Make the change
Common changes:

- **Add a step** – copy a nearby step line, change it, keep it in journey order
- **Remove a step** – delete the line; check the comma on the new last line
- **Reorder steps** – move lines; order in the list is order on the page
- **Add a choice** – if the user picks one of several screens at one point and then rejoins the same route (e.g. different ways to add a boundary), use a choice step rather than a separate journey, so steps aren't repeated
- **Optional page** – if the user doesn't have to visit a page to carry on (e.g. Product 1 from results), add it to `otherPages` and mention it in a note on the page that links to it. Don't make it a step or a choice
- **Add a journey** – copy a journey block, change `heading` and `steps`. Only for routes that differ from start to finish
- **Page used in several journeys** – ask whether to change it in all of them
- **Add a page outside the flow** – add to `otherPages` with a `from` list
- **Choose a type** – pick the screen type closest to the real page. If none fits, use the nearest one and ask if a new type is wanted (see Step 3)

Rules:
- Every item except the last in a list needs a trailing comma, and the last must **not** have one – Nunjucks fails on both
- Keep values in double quotes
- Only change `live` if the user gives the live address – never guess it
- For `prototype`, check `app/views/{version}/{value}.html` exists. If it doesn't, ask before adding a link to a page that doesn't exist

### Step 3 (only if asked): Add a new screen type
Adding a type changes the shared file `app/views/includes/user-flow/wireframes.njk`, which every version's user flow uses, so confirm with the user first.
1. In the `ufScreen` macro, add a branch for the new type. Build it from the existing classes (`uf-l`, `uf-h`, `uf-btn`, `uf-card`, etc.) and match the header style of similar screens (blue header for flood map service pages)
2. Add any new CSS in the `ufStyles` macro, with desktop and `.uf-mobile` rules
3. Check it fits the screen height: desktop screens are 104px tall, mobile 148px. Content below that is cut off
4. Add it to the `ufScreenTypes` list with a `name` and `use`. This adds it to **Screen types you can use** on every user flow and to the guide's screen types page
5. Add the type to the type list in the comment at the top of the version's `user-flow.html`

### Step 4: Check the page loads
- If the prototype is running, open `http://localhost:3000/{version}/user-flow` and check the change
- Look at both **Desktop** and **Mobile** views if a screen type changed
- If the shared file changed, also check `/documentation/user-flows/screen-types`

### Step 5: Summarise
Tell the user what changed, and list any steps where the prototype link was left empty or the live address is still needed.

---

## Open questions

These are being explored in discovery:

- Should the skill accept a description of a journey (e.g. from a research plan or a Mural board) and build the steps from it?
- Should it flag steps whose `prototype` page no longer exists, every time it runs?
- Should journeys be kept in a separate data file (e.g. JSON) so they're easier to edit, and shared between versions?
- When a page changes, should the skill update every version's user flow, or only the current one?
- Is a screen type for every page useful, or should a generic type with options (header colour, number of sections) replace some of them?

---

## Related

- `#create-user-flow` – create a user flow for a new version
- `#create-page-within-version` – add a page to a version (then add it to the user flow with this skill)
- Guide: `/documentation/user-flow-guide`
