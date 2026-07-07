# Ember &amp; Frames — Interior &amp; Architectural Photography

Portfolio site for Ember &amp; Frames, an interior and architectural photography studio based in Hyderabad, India.

Live site: <https://emberandframes.github.io/interior-and-architectural-portfolio/>

## Stack

Built as a static, no-build site so it can be hosted directly on GitHub Pages or any static host.

- HTML5 with a single stylesheet (`assets/css/styles.css`)
- React 18 (UMD) and ReactDOM 18 (UMD) loaded from a CDN
- `@babel/standalone` to transpile JSX in the browser
- Data is a plain JS module assigned to `window.PORTFOLIO_DATA`
- Two web fonts only: Cormorant Garamond (display) and DM Sans (UI)
- 40 photographs delivered as plain `.jpg` files under `assets/images/`

## Local preview

The site must be served over HTTP. The `file://` protocol blocks React, Babel, and the lightbox.

```powershell
cd "d:\Shubham\Ember & Frames - Interior & Architectural Portfolio"
python -m http.server 8820 --bind 127.0.0.1
# open http://127.0.0.1:8820/
```

Any other static host works too, such as the VS Code Live Server extension, `npx serve`, or `npx http-server`.

## Deploy to GitHub Pages

1. Push this folder to the repo `emberandframes/interior-and-architectural-portfolio`.
2. In **Settings → Pages**, set **Source = Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The `index.html` entry point loads at the repo root, so the site resolves at the project page URL.
4. The presence of `.nojekyll` keeps GitHub Pages from re-processing files.

The site goes live at <https://emberandframes.github.io/interior-and-architectural-portfolio/>.

### Social previews (WhatsApp, Instagram, Email, LinkedIn, X)

Open Graph meta tags live in the `<head>` of [index.html](index.html). They point to an absolute URL for the share image so crawlers can fetch it:

- The image is a real `.jpg` (not base64), served at `assets/images/og-cover.jpg`.
- Every `og:` URL is absolute (`https://emberandframes.github.io/...`), which is required for WhatsApp, Instagram, and email clients to render a preview.
- `og:image` is sized for the 1200x630 social ratio.
- `og:url` and the canonical link both point to the live project page URL.

When you first share the link, WhatsApp and most messengers cache the preview. If you replace the cover image, keep the same path so cached previews still resolve, or use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to force a re-scrape.

## Branding

The wordmark renders "Ember &amp; Frames" as charcoal serif words with an amber italic swash ampersand, matching the studio logo. The ampersand styling is driven by CSS:

- `.brand-amp` styles the header ampersand (see [assets/css/styles.css](assets/css/styles.css)).
- `.footer-brand` styles the footer wordmark.
- The `Wordmark` React component in [index.html](index.html) splits `SITE.name` on `&` and wraps the ampersand; the header, footer, and image watermarks all render through it, so the brand name is defined once in `assets/js/data-ef.js`.

The favicon ([favicon.svg](favicon.svg)) is the Ember & Frames viewfinder mark — an amber camera frame with charcoal corner brackets on a parchment tile — shared across all three studio portfolios. The legacy `favicon.png` monogram is kept for reference.

### Palette

| Token      | Value     | Role                            |
|------------|-----------|---------------------------------|
| `--wall`   | `#fafaf8` | Parchment background            |
| `--ink`    | `#18181a` | Charcoal text                   |
| `--accent` | `#a48b3d` | Gold accent (links, FAB glyph)  |
| `--amp`    | `#c97b3a` | Ember Amber ampersand           |

The ampersand colour (`--amp`, `#c97b3a`) is the studio's Ember Amber and is used for the header, footer, and watermark ampersands, and the favicon frame. The WhatsApp floating action button uses the charcoal background with an amber glyph and pulse ring so it sits within the palette instead of the default WhatsApp green.

## Image watermark and copyright

Every photograph (gallery thumbnail, hero, and lightbox) carries a discreet `© Ember & Frames` watermark with the ampersand rendered in Ember Amber. The watermark is a real element (`.ph-watermark` on thumbnails, `.lb-watermark` in the lightbox), styled in [assets/css/styles.css](assets/css/styles.css) and populated from `SITE.name`. Right-click save and image dragging are disabled on the gallery and lightbox as a light deterrent. To change the watermark text, edit `SITE.name` in [assets/js/data-ef.js](assets/js/data-ef.js).

## Editing content

All copy and ordering live in [assets/js/data-ef.js](assets/js/data-ef.js), which exports on `window.PORTFOLIO_DATA`:

- `PHOTOS`: 40 entries (`id`, `project`, `category`, `caption`); image paths auto-resolve to `assets/images/{id}.jpg`.
- `PROJECTS`: title, subtitle, client, year, role, blurb, and photo IDs per project.
- `PROJECT_ORDER`: display order on the page.
- `SITE`: name, email, phone, WhatsApp link, hero copy, and the default hero photo.

## File map

```text
index.html            — Ember & Frames portfolio (light theme React app, GitHub Pages entry)
404.html              — custom not-found page
robots.txt            — allows all crawlers
.nojekyll             — disables GitHub Pages Jekyll processing
README.md             — this file
favicon.svg           — Ember & Frames viewfinder mark (shared brand favicon)
favicon.png           — legacy E & F monogram (amber ampersand + charcoal letters on parchment)
assets/
  css/styles.css      — theme tokens, layout, type, responsive rules, watermark, FAB
  js/data-ef.js       — Ember & Frames content (photos, projects, site copy)
  images/             — 40 project photographs + og-cover.jpg
```
