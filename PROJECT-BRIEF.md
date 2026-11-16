# Project brief — for whoever works on this next

This file exists so the site can be handed to another developer, or to a
different AI assistant, without losing the thinking behind it. It records the
**decisions** that are not obvious from reading the code.

Read `README.md` first for everyday editing (text, photos, colours).
Read `DEPLOY.md` for the hosting walkthrough. This file is the "why".

---

## What this is

A single-page portfolio for **Sanjay Raam C**, final-year mechanical
engineering student at Prathyusha Engineering College, Thiruvallur. The goal is
internship and placement credibility: recruiters should see CAD/FEA/CFD work,
national SAEINDIA awards, and real fabricated hardware.

Live: <https://sanjayraam.netlify.app>
Repo: <https://github.com/sanjayraams99-arch/portfolio> (public)

---

## Stack and commands

React 19 + Vite 8. No router, no CSS framework, no state library. One page,
anchor navigation. Plain CSS in a single file.

```powershell
npm install          # first time only
npm run dev          # local dev server, http://localhost:5173
npm run build        # production build into dist/
npm run preview      # serve the production build locally
npm run lint         # oxlint
```

Node 22+ is expected (Netlify pins 22 in `netlify.toml`).

---

## File map

| File | Responsibility |
|---|---|
| `src/content.js` | **All site text.** Name, nav, hero, about, education, achievements, projects (including photo arrays), skills, certificates, contact, footer |
| `src/index.css` | Design tokens at the top, then every component style. Single stylesheet by choice — it is ~1,900 lines and easy to grep |
| `src/App.jsx` | Section order and component wiring |
| `src/components/Hero.jsx` | Above-the-fold layout, mounts `HeroFX` |
| `src/components/HeroFX.jsx` | Canvas animation: segmented ring, lightning, embers |
| `src/components/Nav.jsx` | Sticky header, scroll state, mobile menu |
| `src/components/Work.jsx` | Project cards, `normaliseImages()`, photo dot switcher |
| `src/components/PageTransition.jsx` | Curtain wipe on in-page navigation |
| `src/components/ScrollProgress.jsx` | Top progress bar |
| `src/components/Divider.jsx` | Lightning rule between sections |
| `src/useReveal.js` | IntersectionObserver hook for scroll reveals |
| `index.html` | Meta tags, JSON-LD Person schema, Google verification |
| `netlify.toml` | Build config and cache/security headers |
| `public/` | Résumé PDF, project photos, college emblem, favicon, robots, sitemap |

---

## Design decisions (please keep these)

1. **Theme: "Metal Fury"** — crimson `#e5382f`, deep crimson `#c9291f` for
   buttons, gold `#f3b13c`, steel `#9aa5b8`, near-black `#08080b`. Tokens live
   at the top of `src/index.css`; change them there, never inline.
2. **It must stay professional.** The animation is the seasoning, not the meal.
   No neon, no comic fonts, no bouncing. If a new effect competes with the
   résumé content for attention, drop it.
3. **Text stays readable.** Button text on crimson was darkened to hit a 5.5:1
   contrast ratio deliberately. Do not lighten it back.
4. **Reveals animate transform and blur, never opacity.** Fading text to 40%
   opacity mid-animation made contrast audits fail. Keep it that way.
5. **Accessibility is a hard requirement.** The bar is axe-core with zero
   violations, plus Lighthouse 100 for accessibility. Every interactive target
   is at least 24×24 px (photo dots are 26 px).
6. **Reduced motion is always honoured.** `HeroFX` draws a single static frame;
   `PageTransition` jumps instantly instead of wiping.
7. **Photos are always compressed** to max 1600 px, JPEG quality 82, mozjpeg,
   progressive. Originals were 3–5 MB each; the whole gallery is ~2.4 MB.
   Always apply EXIF rotation (`sharp().rotate()`), otherwise phone photos land
   sideways.
8. **Placeholder gradients are fine.** A project card with `images: []` shows a
   generated gradient; that is intentional, not a bug.
9. **All copy lives in `content.js`.** Never hard-code user-facing text inside a
   component — it makes the site impossible for a non-developer to edit.

---

## Gotchas discovered the hard way

- **PowerShell 5.1 mangles UTF-8.** Reading files with `Get-Content` and writing
  with `Set-Content` will corrupt `—`, `₹`, `₂`, `’` and `龍牙`. Use an editor or
  the `read`/`edit` tools, and only use `git` from PowerShell. The console also
  *displays* these characters as garbage even when the bytes are fine — do not
  "fix" what is not broken.
- **The brand monogram "S" is `aria-hidden`** so screen readers say "Sanjay Raam
  C", not "S Sanjay Raam C".
- **The Google verification meta tag must stay** in `index.html`. Removing it
  un-verifies Search Console.
- **`og:image` must be an absolute URL.** It is pinned to
  `https://sanjayraam.netlify.app/og-image.jpg`. If the domain changes, update
  it along with `public/robots.txt` and `public/sitemap.xml`.
- **The share card is generated, not drawn by hand.** It was rendered from HTML
  with the same tokens. If the name or colour scheme changes, regenerate it
  rather than editing the JPEG.
- **Curtain timing is duplicated** in `PageTransition.jsx` (`COVER_MS`,
  `HOLD_MS`, `LEAVE_MS`) and in the CSS `transition` durations. Change both.

---

## Current state

Working and verified live: responsive layout, hero canvas, scroll reveals,
curtain page transition with a one-slot queue, photo galleries, résumé download,
Google Search Console verified, sitemap submitted, Lighthouse 100/100/100,
axe 0 violations.

Known gaps, in priority order:

1. **AeroAid has no photos** — it is the only card on a placeholder gradient.
2. **Alt text is generic** ("…all-terrain vehicle — photo 1"). It is valid and
   passes audits, but real descriptions would help screen readers and image
   search. Needs the owner to describe what is in each photo.
3. **No GitHub link** in the footer socials (only LinkedIn).
4. **Custom domain not purchased** — everything points at the `.netlify.app`
   address, which is fine but not permanent.
5. **Résumé PDF is public** — it contains a phone number and email. Accepted.

---

## Working with an AI assistant on this repo

The assistant cannot see images, so describe photos in words. It can read the
repository and run commands only if given a working directory; otherwise it will
produce code for you to paste.

A prompt that gets good results:

> Read the repository at https://github.com/sanjayraams99-arch/portfolio before
> answering. It is a React 19 + Vite single-page portfolio. All text lives in
> `src/content.js` and all styles in `src/index.css` — do not introduce new
> conventions without saying why. The design tokens, the "no opacity fades"
> rule and the axe-clean/100-Lighthouse bar are documented in
> `PROJECT-BRIEF.md`. Task: …

Rules that save time:

- Ask it to **read the files first**; otherwise it invents a structure that does
  not exist and you spend longer fixing the copy-paste.
- Ask for **whole files** rather than fragments when a file is under ~200 lines.
- Ask for the **exact command sequence** to build and commit, then paste it into
  PowerShell at `C:\Users\user\Documents\Default Project`.
- Afterwards, always run `npm run dev` and look at the section you changed
  before pushing. `git push` publishes to the live site within a minute.

---

## Publishing a change

```powershell
npm run build          # optional but catches errors early
git add -A
git commit -m "what changed"
git push
```

Netlify rebuilds from `main` automatically. A wrong push can be undone with
`git revert HEAD` followed by another push — the previous commit stays in
history, so nothing is ever truly lost.
