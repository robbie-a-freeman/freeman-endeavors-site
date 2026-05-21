# Freeman Endeavors — marketing site

The lead-generation site for Freeman Endeavors LLC, a small software
consultancy. SvelteKit 2 + Svelte 5 + TypeScript, deployed to Netlify.

Design source-of-truth: [DESIGN.md](./DESIGN.md). Voice & values:
[VALUES.md](./VALUES.md). Engagement and skill conventions: [CLAUDE.md](./CLAUDE.md).

## Stack

- SvelteKit 2 with Svelte 5 runes
- Vite 5
- mdsvex (markdown content via `.svelte.md` routes)
- zod (frontmatter validation)
- @fontsource/{fraunces,instrument-sans,jetbrains-mono} (self-hosted)
- @sveltejs/enhanced-img
- Vitest + @testing-library/svelte (unit)
- Playwright + @axe-core/playwright (E2E + a11y)
- @sveltejs/adapter-netlify

## Commands

```sh
npm install          # first time
npm run dev          # dev server with HMR
npm run build        # production build (Netlify adapter output)
npm run preview      # serve the production build on :4173
npm run check        # svelte-check + svelte-kit sync
npm run lint         # prettier + eslint
npm run format       # prettier --write .
npm run test:unit    # vitest run
npm run test         # playwright (builds first per playwright.config.ts)
```

`npm run prebuild` runs `scripts/validate-content.ts` automatically before
each build. It walks every `.svelte.md` file under `src/routes/case-studies/`
and `src/routes/writing/` and validates the frontmatter against the Zod
schemas in `src/lib/content/schema.ts`. The build fails on any violation.

## Architecture

- `src/routes/+layout.svelte` — chrome (header, footer, skip link, Plausible)
- `src/routes/+page.svelte` — homepage
- `src/routes/services/+page.svelte` — three anchored service sections
- `src/routes/case-studies/+page.svelte` — index (loadCaseStudies)
- `src/routes/case-studies/<slug>/+page.svelte.md` — one file per case study, mdsvex layout: `case_study`
- `src/routes/approach/+page.svelte` — values + methodology + team
- `src/routes/contact/+page.svelte` — Cal.com inline embed + mailto fallback
- `src/routes/writing/+page.svelte` — essay index
- `src/routes/writing/<slug>/+page.svelte.md` — one file per essay, mdsvex layout: `essay`
- `src/routes/+error.svelte` — 404
- `src/routes/sitemap.xml/+server.ts` — prerendered XML sitemap
- `src/lib/components/` — Meta, BookCallCTA, Button, Header, Footer, EditorialList, SectionMarker, StatBlock, CaseStudyMeta
- `src/lib/components/layouts/{CaseStudy,Essay}.svelte` — mdsvex wrappers
- `src/lib/content/{schema,loaders}.ts` — Zod schemas + typed glob loaders
- `src/lib/config.ts` — site URL, Cal.com link, Plausible event name, survey price
- `src/lib/styles/{tokens,base}.css` — DESIGN.md tokens + base typography
- `scripts/validate-content.ts` — prebuild content validation

## Pre-launch checklist

1. **Cal.com** — confirm `CAL_LINK` in `src/lib/config.ts` matches the public event slug.
2. **Plausible** — register `architecture_call_booked` as a custom event on the dashboard.
3. **OG default** — convert `static/og/og-default.svg` to `static/og/og-default.png` (see `static/og/README.md`).
4. **Case study consent** — written/recorded approval from each anonymized client (TODOS.md context).
5. **Survey pricing** — confirm `SURVEY_PRICE_USD` in `src/lib/config.ts`.

## Adding content

A new case study lives at `src/routes/case-studies/<slug>/+page.svelte.md` with
frontmatter `layout: case_study` and all required fields per the Zod schema. A
new essay lives at `src/routes/writing/<slug>/+page.svelte.md` with
`layout: essay`. The index pages, the sitemap, and the loaders pick the new
file up automatically.
