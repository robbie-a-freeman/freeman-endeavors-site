# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Lead-generation marketing site for **Freeman Endeavors LLC** (software consulting). SvelteKit 2 + Svelte 5 + TypeScript, deployed to Netlify via `@sveltejs/adapter-netlify`.

## Commands

Package manager is **npm** (the `netlify.toml` build command runs `npm ci && npm run build`).

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build (Netlify adapter output) — `prebuild` runs content validation first
- `npm run preview` — serve the production build locally on :4173
- `npm run check` — `svelte-kit sync` + `svelte-check`
- `npm run lint` — Prettier check + ESLint
- `npm run format` — Prettier write
- `npm run test:unit` — Vitest unit suite
- `npm run test` — Playwright E2E (builds + previews first)

## Architecture

Routes live under `src/routes/`, components under `src/lib/components/`. mdsvex (`.svelte.md`) drives long-form content with frontmatter validated by Zod.

**Routes**
- `/` — homepage with asymmetric editorial hero
- `/services/` — three anchored sections (#survey / #fractional / #modernization)
- `/case-studies/` — index listing; each `<slug>/+page.svelte.md` is one anonymized engagement
- `/approach/` — values + methodology + team
- `/contact/` — Cal.com inline embed (lazy-loaded via IntersectionObserver) with mailto fallback
- `/writing/` — essay index; each `<slug>/+page.svelte.md` is one long-form piece
- `/sitemap.xml` — prerendered XML sitemap (`src/routes/sitemap.xml/+server.ts`)
- `/+error.svelte` — 404

**Shared components (`src/lib/components/`)**
- `Meta.svelte` — head block: title, description, OG, Twitter, canonical (HTML-escapes description against meta-tag injection)
- `BookCallCTA.svelte` — single source of truth for the locked CTA copy ("Book a 45-minute architecture call") and `/contact/` target
- `Button.svelte` — Primary / Ghost / Ink variants with `default` / `large` sizes
- `Header.svelte` — multi-route nav, mobile drawer, active-route brick underline
- `Footer.svelte` — three-column footer with site nav + contact
- `EditorialList.svelte` — shared row layout for `/case-studies/` and `/writing/` indexes
- `SectionMarker.svelte` — `§ NN · LABEL` glyph
- `StatBlock.svelte` — display-figure + caption stat tiles (ROI band on case studies)
- `CaseStudyMeta.svelte` — Surface-2 key-value meta block at top of each case study
- `layouts/CaseStudy.svelte`, `layouts/Essay.svelte` — mdsvex page wrappers

**Content infrastructure (`src/lib/content/`)**
- `schema.ts` — Zod schemas for case-study + essay frontmatter
- `loaders.ts` — `loadCaseStudies()`, `loadEssays()` — typed glob loaders, empty-array fallback
- `scripts/validate-content.ts` — prebuild step that validates every frontmatter file against the Zod schemas

**Site config (`src/lib/config.ts`)** — site URL, Cal.com slug, Plausible event name, survey price. Single source of truth for cross-cutting constants.

**Styling**
- Tokens (color, type, spacing, motion) in `src/lib/styles/tokens.css` — derived from DESIGN.md
- Base typography + reset in `src/lib/styles/base.css`
- Fonts self-hosted via `@fontsource-variable/fraunces` + `@fontsource/instrument-sans` + `@fontsource/jetbrains-mono`
- Per-component scoped `<style>` blocks for page-specific layout

## Conventions

- Svelte 5 runes (`$state`, `$derived`, `$props`, `$effect`). No legacy stores in new code.
- mdsvex layouts assigned via frontmatter `layout: case_study` or `layout: essay`. The layout component receives every frontmatter field as a prop plus `children`.
- `export const prerender = true` lives at the root `+layout.ts`; every public route emits static HTML at build.
- Prettier: tabs, single quotes, no trailing commas, 100-char print width.
- ESLint flat config (`eslint.config.js`).
- Adding a case study: drop `src/routes/case-studies/<slug>/+page.svelte.md` with valid frontmatter. The index, sitemap, and OG cards pick it up automatically.

## Design System

Always read DESIGN.md before making any visual or UI decisions.
All font choices, colors, spacing, and aesthetic direction are defined there.
Do not deviate without explicit user approval.
In QA mode, flag any code that doesn't match DESIGN.md.

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
- Save progress, checkpoint, resume → invoke context-save
- Code quality, health check → invoke health
