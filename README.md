# Snally

Snally is a small static site for [snally.com](https://snally.com), a home for web design, small applications, prototypes, and useful experiments.

The site stays spare on purpose: one page, one stylesheet, no build step, and no JavaScript required for basic navigation.

## Structure

- `index.html` contains the homepage content and metadata
- `style.css` holds the visual system and responsive layout
- `assets/` contains the site artwork and logos

## Local Editing

There is no build step or dependency setup.

Open `index.html` directly in a browser for quick checks, or run a simple static server from the repo root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Assets

The landing page uses [the Snally logo](assets/snally-logo.png) and [the Charging Snally illustration](assets/charging-snally.png).
