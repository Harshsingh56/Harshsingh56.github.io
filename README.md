# Harsh Indal Singh — Portfolio

A minimal, monochrome, single-page portfolio built with Next.js (App Router), TypeScript and Tailwind CSS. It exports to plain static files — no server needed.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build the static site

```bash
npm run build
```

The finished site is written to `out/`. Upload that folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, …).

## Editing content

All text lives in `data/profile.ts` — name, intro, about, learning areas, current focus and contact details.
Contact links (`email`, `github`, `linkedin`) are hidden until you fill them in.

## Structure

```
app/          layout (fonts, metadata, theme script), page, global styles
components/   one file per section, plus Navbar, ThemeToggle, MobileMenu
data/         profile.ts — all editable content
```

Theme colors are CSS variables in `app/globals.css`. Dark mode is the default; the toggle saves the choice in `localStorage`.
