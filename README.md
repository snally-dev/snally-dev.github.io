# Snally

Snally is a small static site for [snally.com](https://snally.com), a sandbox for strange web builds, offbeat data work, and creative technical experiments.

The project borrows lightly from the Snallygaster myth and treats it as a frame for stitched-together work that mutates in public. The site itself stays spare on purpose: one page, one stylesheet, one small script for the popover.

## Structure

- `index.html` contains the homepage content and metadata
- `style.css` holds the visual system and responsive layout
- `popover.js` handles the Snallygaster definition popover
- `assets/` contains the site artwork and logos

## Local Editing

There is no build step or dependency setup.

Open `index.html` directly in a browser for quick checks, or run a simple static server from the repo root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Artwork

Commissioned Snallygaster illustration:

- [Charging Snally](assets/charging-snally.png) by [Giodude1580](https://bsky.app/profile/giodude1580.bsky.social)
