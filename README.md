# Gentiana Mehana — Portfolio

A responsive React portfolio built with Vite. The page introduces Gentiana, presents three deployed projects, and includes about, skills, education, and contact sections. Every project card links to its live website.

## Run locally

Install the dependencies and start Vite:

```sh
npm install
npm run dev
```

Build the static production site with:

```sh
npm run build
```

## Deploy

The repository is configured for Netlify. Netlify runs `npm run build` and publishes the generated `dist` directory.

## Project links

- Elsewhere — Prishtina: https://elsewhere-prishtina.netlify.app/
- MedPal: https://medpalplatform.netlify.app/
- Bursat: https://bursat.netlify.app/

## Structure

- `src/App.jsx` — React page and project components
- `src/main.jsx` — React entry point and global stylesheet import
- `styles.css` — responsive layout and visual design
- `public/assets/` — optimized Elsewhere project photography
- `index.html` — Vite HTML shell and page metadata
