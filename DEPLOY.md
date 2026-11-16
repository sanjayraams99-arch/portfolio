# Deploying for free

Two options. **Option A** is fastest (no account juggling). **Option B** sets up
automatic redeploys whenever you push a change.

---

## Option A — Netlify drag & drop (2 minutes, no Git)

1. Build the site:
   ```powershell
   npm run build
   ```
2. Go to <https://app.netlify.com/drop>
3. Drag the **`dist`** folder from your project onto the page
4. Netlify gives you a live URL like `sanjay-raam.netlify.app`
5. Rename it in **Site configuration → Site details → Change site name**

To update later, rebuild and drag `dist` again.

---

## Option B — GitHub + Netlify (automatic deploys)

### 1. What is already done

This folder is already a Git repository with all work committed on a branch
called `main`, and the author is set to Sanjay Raam C. Nothing to do here.

If you ever clone it onto another machine, set your identity once:

```powershell
git config --global user.name "Sanjay Raam C"
git config --global user.email "sanjayraams99@gmail.com"
```

### 2. Create an empty repository on GitHub

Go to <https://github.com/new>, name it `portfolio`, and **do not** add a
README, .gitignore or licence — the project already has them.

### 3. Push this project

Replace `YOUR-USERNAME` with your GitHub username, then run:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

A browser window opens once asking you to sign in to GitHub — approve it and
the push completes. Every later change is just:

```powershell
git add -A
git commit -m "what you changed"
git push
```

### 4. Connect Netlify

1. <https://app.netlify.com> → **Add new site → Import an existing project**
2. Choose **GitHub**, authorise, pick the `portfolio` repo
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**

Every `git push` now rebuilds and republishes the site.

---

## Custom domain

1. Buy a domain (Namecheap, Cloudflare, Porkbun — roughly ₹800–1,200/year)
2. Netlify → **Domain management → Add a domain**
3. At your registrar, point the DNS records Netlify shows you:
   - `A` record for the apex domain → Netlify's load balancer IP
   - `CNAME` for `www` → your `.netlify.app` address
4. Wait for propagation (minutes to a few hours). HTTPS is issued free.

---

## After you have a real URL

Three placeholder values need updating (they currently say `yoursite.com`):

- `public/robots.txt` → the `Sitemap:` line
- `public/sitemap.xml` → the `<loc>` value
- `index.html` → the two `og:image` / `twitter:image` URLs

The last one is what makes the link show a picture when someone shares your
site on LinkedIn or WhatsApp. It must be a full URL, so it can only be set once
the live address exists.

Then test with Lighthouse in Chrome DevTools (F12 → Lighthouse).
