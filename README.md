# Personal Website

A fast, responsive single-page site built with **React + Vite**.

## Run it

```powershell
npm install     # first time only
npm run dev     # start the local server
```

Then open the URL it prints — usually <http://localhost:5173>. The page reloads
automatically whenever a file is saved.

## Edit your content

**All text lives in `src/content.js`.** Open that file and change the strings
between quotes:

- `site` — your name, role, email, location, social links, nav items
- `hero` — the big headline, intro sentence and buttons
- `stats` — the four numbers under the headline
- `about` — paragraphs and the checklist
- `work` — your projects (add or remove entries freely)
- `contact` / `footer` — remaining copy

## Change the colours

Open `src/index.css` and edit the tokens at the very top:

```css
--bg: #0a0c10;        /* page background */
--text: #e9edf5;      /* main text */
--accent: #7c9cff;    /* buttons and highlights */
--accent-2: #5eead4;  /* secondary highlight */
```

Change those four values and the whole site re-themes.

## Add project images

1. Drop an image into the `public/` folder, e.g. `public/my-project.jpg`
2. Set `image: '/my-project.jpg'` in the matching entry of `work.items`

Leave `image: ''` to show the generated gradient placeholder.

## Build for deployment

```powershell
npm run build     # outputs a static site into dist/
npm run preview   # test the production build locally
```

Upload the `dist/` folder to any static host — or connect the project to
Netlify/Vercel and let it build automatically.

## Project structure

```text
index.html            page shell, title and meta tags
src/content.js        ← all your text lives here
src/App.jsx           page layout / section order
src/index.css         all styling and design tokens
src/components/       Nav, Hero, About, Work, Contact, Footer
src/useReveal.js      scroll animation + nav helpers
public/               static assets (favicon, images)
```
