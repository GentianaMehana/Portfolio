# Gentiana Mehana — Portfolio

A responsive, single-page portfolio built with semantic HTML, modern CSS, and a small amount of vanilla JavaScript. There is no build step or package installation.

The Work section includes the three public projects: Elsewhere — Prishtina, MedPal, and Bursat. Elsewhere uses three locally optimized photos featured in the live project, with photographer and license credits displayed beside each image. MedPal and Bursat use lazy-loaded frames to show their real deployed interfaces. Each project links to its live site and source repository. `netlify.toml` configures Netlify to publish the static site directly from the repository root.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static web server. For example:

```sh
npx serve .
```

## Publish

The folder is ready for a static host such as Netlify, Vercel, or GitHub Pages. Deploy the contents of this directory as the site root.

## Personal details

The portfolio content was drafted from the supplied résumé and checked against the public GitHub repositories and deployed project sites. Before publishing, review the wording and links in `index.html`, especially the current master’s program and graduation status. The site intentionally omits the résumé’s date of birth and phone number.

## Files

- `index.html` — page content and metadata
- `styles.css` — responsive layout, typography, and live project preview frames
- `script.js` — mobile navigation and current year
