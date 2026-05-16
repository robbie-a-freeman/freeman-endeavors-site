# OG images

`og-default.svg` is the design source for the default Open Graph card. Most
OG consumers (LinkedIn, Twitter, Slack, Discord) require PNG or JPG —
**convert the SVG to a PNG named `og-default.png` before launch.**

## One-liner using rsvg-convert (macOS / Linux)

```sh
brew install librsvg # if not already installed
rsvg-convert -w 1200 -h 630 og-default.svg -o og-default.png
```

## Per-piece bespoke OG cards (V1.1, TODOS.md T1)

Drop bespoke 1200×630 PNGs at `static/og/<slug>.png` and set
`og_image: '/og/<slug>.png'` in the frontmatter of the matching
`+page.svelte.md`. `Meta.svelte` resolves it absolute against the site URL.
