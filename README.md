# Personal Homepage

[![Deploy](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222?logo=github)](https://hw-shun.github.io/homepage/)

A bilingual (Chinese / English) personal site — one page, no backend, no build step at runtime.
Everything here is prerendered HTML: the markup ships with its content in place, and the small
script on top only wires up the theme and language toggles.

**Live:** <https://hw-shun.github.io/homepage/>

## Why this repo exists

The page is authored locally in a companion editor, then exported and pushed here as plain files.
That keeps this repository small and static: nothing in it talks to an API, holds a token, or needs
a server to render. Host it anywhere that serves files — GitHub Pages, object storage, a CDN, or a
`file://` tab on your own machine.

## What is in the box

| Path | What it is |
| --- | --- |
| `index.html` | The whole page. Readable without JavaScript, so it prints and indexes cleanly. |
| `assets/site.css` | One stylesheet, light and dark themes driven by a `data-theme` attribute. |
| `assets/site.js` | Theme and language switching only. Roughly 43 KB, no framework, no dependencies. |
| `img/` | Avatars, school and company marks, the WeChat QR code. |
| `uploads/` | Images referenced by the page. |

## How it behaves

- **Bilingual.** Chinese and English content ship together in one document; the toggle swaps the
  rendered sections and updates `<html lang>` and `<title>`. The choice is remembered in
  `localStorage`.
- **Themeable.** Follows `prefers-color-scheme` on first visit and remembers a manual override.
- **No tracking.** No analytics, no cookies, no third-party scripts. The only external request is
  the Google Fonts stylesheet for Inter and Ubuntu Mono; the font stack falls back to system fonts
  if it is blocked or unreachable.
- **Relative paths throughout.** The same files work at a domain root, under a project subpath, or
  opened straight from disk.

## Rebuilding

This repository is generated output. Edits made here are overwritten on the next export, so please
send corrections upstream and let the site be regenerated rather than patching the files in place.

## License

The page content and personal details belong to the site owner. The layout, styles, and scripts are
free to read and learn from; if you reuse a meaningful portion, a link back is appreciated.
