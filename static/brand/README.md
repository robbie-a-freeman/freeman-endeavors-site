# Freeman Endeavors — Brand Assets

The original logo artwork lives at `source/logo-source.png` (1254×1254). All
other assets in this directory are derived from it via **cropping and
resizing only** — the figure itself is never redrawn.

## What's here

```
brand/
├── source/      logo-source.png (untouched), plus cropped working images
├── mark/        figure-only icon set (mark-16 … mark-1024) + mark.svg
├── lockup/      mark + wordmark together, horizontal and stacked
├── wordmark/    "Freeman Endeavors" set in Fraunces
├── logo/        primary logo lockup (figure + full scene + wordmark)
├── favicon/     browser tab + iOS + Android PWA icon set
└── og/          1200×630 social card
```

## When to use what

| Need                                | File                                                       |
| ----------------------------------- | ---------------------------------------------------------- |
| Browser tab icon (32 / 16)          | `favicon/favicon-32.png`, `favicon/favicon-16.png`         |
| Browser tab icon (legacy multi-res) | `favicon/favicon.ico`                                      |
| iOS home-screen icon                | `favicon/apple-touch-icon.png` (180×180)                   |
| Android / PWA install               | `favicon/icon-192.png`, `favicon/icon-512.png`             |
| Android adaptive (safe-zone)        | `favicon/icon-maskable-512.png`                            |
| Site header / nav                   | `lockup/lockup-horizontal.svg`                             |
| Footer / centered placement         | `lockup/lockup-stacked.svg`                                |
| Hero artwork on landing pages       | `logo/logo-full.svg` (primary logo lockup with full scene) |
| Social-share card / Open Graph      | `og/og-default.png`                                        |
| Print-ready at any size             | PNG renders at 1240 / 1500 / 1760 / 3000 px wide           |

## Design system tokens (from `DESIGN.md`)

- Ink: `#1A1A18`
- Paper / surface: `#FAF7F2`
- Rule (hairlines): `#D5CFC4`
- Rule strong: `#B8B3A6`
- Tagline ink (on light): `#2E2D29`

## Typography

- Wordmark: **Fraunces** (variable serif, opsz 144, weight 500)
- Tagline: **Instrument Sans** (weight 500, uppercase, letter-spacing ~0.18em)

## Compositing

Lockup SVGs reference the figure artwork via a relative-path
`<image href="../source/figure-square.png">`, which resolves correctly in
browsers. At build time, `rsvg-convert` cannot load external images, so the
build script composites the figure onto the typography render with
ImageMagick. The SVGs are the single source of truth; the PNGs are
build artifacts.

## Rebuilding

If a source SVG changes, or the source artwork is re-cropped, regenerate the
PNG set:

```bash
./scripts/build-brand-assets.sh
```

Requires `rsvg-convert` (`brew install librsvg`), `magick` (ImageMagick),
and the Fraunces variable + Instrument Sans fonts installed in
`~/Library/Fonts/`. The script renders every PNG size, packs the `.ico`,
and composites the OG card.

## Do not

- Redraw the figure. The artwork is preserved as a single raster source
  in `source/logo-source.png`; only crops and resizes are derived from it.
- Recolor the figure. The figure carries its own ink color; we never
  threshold or remap it.
- Use `logo-full.*` at sizes under ~600 px wide. The scene + wordmark
  pairing gets muddy below that. Use a lockup instead.
