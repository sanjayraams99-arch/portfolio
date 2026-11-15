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

### 1. Set your Git identity (once)

```powershell
git config --global user.name "Sanjay Raam C"
git config --global user.email "sanjayraams99@gmail.com"
```

### 2. Create an empty repository on GitHub

Go to <https://github.com/new>, name it `portfolio`, and **do not** add a
README or .gitignore.

### 3. Push this project

```powershell
git add -A
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
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

## After you have a real domain

Two placeholder values need updating:

- `public/robots.txt` → the `Sitemap:` line
- `public/sitemap.xml` → the `<loc>` value

Then test with Lighthouse in Chrome DevTools (F12 → Lighthouse).
