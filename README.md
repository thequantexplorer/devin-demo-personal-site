# devin-demo-personal-site

A one-page personal website, published with GitHub Pages.

Right now this repo is empty. There is no site yet, only this README, [DEVIN_DEMO.md](DEVIN_DEMO.md) and a GitHub Actions workflow.

## How the site is built

- Plain HTML, CSS and JavaScript. No framework, no build step, no `npm install`.
- `index.html` lives at the repo root. Put CSS and JavaScript next to it (for example `style.css` and `script.js`).
- Use relative paths such as `style.css` or `images/me.jpg`. Do not start a path with `/`. GitHub Pages serves this repo from `https://<you>.github.io/devin-demo-personal-site/`, so `/style.css` would point at the wrong place.
- To preview it, open `index.html` in a browser, or serve the folder with any static file server.

## Publishing

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml) has two jobs:

- **Check site** runs on every pull request and every push. It fails if there is no `index.html` at the repo root, or if an HTML file has a link or image path that starts with `/`.
- **Deploy to GitHub Pages** runs on every push to `main`. It publishes the repo root to GitHub Pages.

Before the first deploy, turn on Pages once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

---

This repo is a starter for a Devin workshop lab. See [DEVIN_DEMO.md](DEVIN_DEMO.md) for the steps and the prompt.
