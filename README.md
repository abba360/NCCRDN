# IACD/ICDP 2026 Website (Vite + Tailwind v4)
Static site; builds to plain HTML/CSS/JS in `dist/`. No backend.

## Run
    npm install
    npm run dev       # local dev server
    npm run build     # output in dist/
    npm run preview   # test the build

## Edit
- All content and links: `CONFIG` at the top of `src/main.js` (links default to `#`).
- The 29 sub-themes were not supplied: add them to `CONFIG.subthemes`, worded exactly.
- Colours and fonts: `@theme` block in `src/style.css` (`--color-field` is the main blue panel colour).
- Images go in `public/images/` (logos `iacd.png`, `icdp.png`; speakers; venue). Files go in `public/documents/`.

## Deploy
- **GitHub Pages:** build, then publish `dist/` (e.g. with a GitHub Action or the `gh-pages` branch). Paths are relative (`base: './'`).
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`.
