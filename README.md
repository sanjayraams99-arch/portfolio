# Sanjay Raam C — Portfolio

A fast, responsive single-page engineering portfolio built with **React + Vite**.

## Run it

```powershell
npm install     # first time only
npm run dev     # start the local server
```

Open the URL it prints — usually <http://localhost:5173>. The page reloads
automatically whenever a file is saved.

## Edit your content

**All text lives in `src/content.js`.** Change the strings between quotes:

- `site` — name, role, email, phone, location, résumé path, LinkedIn, nav items
- `hero` — headline, intro, buttons
- `stats` — the four numbers under the headline
- `about` — paragraphs, checklist and the education list
- `achievements` — awards and honours
- `work` — project cards (add or remove entries freely)
- `skills` — skill groups plus the certificate list
- `contact` / `footer` — remaining copy

## Update the résumé PDF

Replace `public/resume.pdf` with a newer export (keep the same filename). Every
"Download résumé" link picks it up automatically.

## Change the colours

Open `src/index.css` and edit the tokens at the very top:

```css
--bg: #0a0c10;        /* page background */
--text: #e9edf5;      /* main text */
--accent: #7c9cff;    /* buttons and highlights */
--accent-2: #5eead4;  /* secondary highlight */
```

## Add project images

1. Drop an image into `public/`, e.g. `public/baja-atv.jpg`
2. Set `image: '/baja-atv.jpg'` in the matching entry of `work.items`

Leave `image: ''` to keep the generated gradient placeholder.

## Build and deploy

```powershell
npm run build     # static site → dist/
npm run preview   # test the production build locally
```

See `DEPLOY.md` for the free Netlify + GitHub walkthrough.

## Project structure

```text
index.html            page shell, meta tags, structured data
src/content.js        ← all your text lives here
src/App.jsx           section order
src/index.css         styling and design tokens
src/components/       Nav, Hero, About, Achievements, Work, Skills, Contact, Footer
src/useReveal.js      scroll animation + nav helpers
public/               résumé PDF, favicon, robots.txt, sitemap.xml
netlify.toml          deploy config and security headers
```
