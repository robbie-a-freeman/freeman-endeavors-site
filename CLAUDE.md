# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **Freeman Endeavors LLC** (software consulting). Built with SvelteKit + TypeScript, deployed to Netlify via `@sveltejs/adapter-netlify`. The package was scaffolded by `create-svelte` and still carries the placeholder name `my-app` in `package.json`.

## Commands

Package manager is **yarn** (see `netlify.toml` build command and `yarn.lock`), though `npm run` works for any script in `package.json`.

- `yarn dev` — Vite dev server with HMR
- `yarn build` — production build (Netlify adapter output)
- `yarn preview` — serve the production build locally on :4173
- `yarn check` — `svelte-kit sync` + `svelte-check` against `tsconfig.json`
- `yarn lint` — Prettier check + ESLint
- `yarn format` — Prettier write
- `yarn test` — Playwright E2E (builds + previews first, per `playwright.config.ts`)
- `yarn test:unit` — Vitest

⚠️ `tests/test.ts` asserts an `/about` page that doesn't exist in this site — the Playwright suite will fail until the test is updated or removed.

## Architecture

The entire site is one route: `src/routes/+page.svelte`. There is no client/server data loading beyond a trivial `+page.ts`, and no other pages — internal nav uses hash anchors (`#expertise`, `#contact`) and JS `scrollIntoView`, not SvelteKit routing.

**Component layout** — components live alongside the page in `src/routes/` (not under `src/lib/`):
- `+layout.svelte` — header/footer chrome, 2s fade-in gated on `onMount` (`loaded` flag prevents SSR flash)
- `Header.svelte`, `Button.svelte` — chrome and a click-dispatching button
- `Technology.svelte` + `Technology-Category-Pill.svelte` — the filterable tech stack grid

**Filter state** — `src/ts/active-technology-filter.ts` exports a single Svelte `writable` store (`filter_category`). Pills write to it on click; tech tiles subscribe and toggle a `.highlighted` class by directly mutating `tech.className`. Clicking the active pill clears the filter (toggle behavior). This is the only piece of cross-component state in the app.

**Contact form** — `+page.svelte` posts via `@emailjs/browser` (`emailjs.sendForm`) with hardcoded service/template/public-key IDs. On submit, the form element is hidden and a thank-you div is unhidden by direct DOM manipulation (`getElementById().setAttribute('hidden', '')`) rather than reactive state.

**Styling**
- Theme tokens (`--primary-color`, `--secondary-color`, `--off-white-color`, `--primary-color-2`) and `@font-face` rules for Roboto / Roboto-Bold / Roboto-Flex live in `src/routes/styles.css`, imported once from `+layout.svelte`.
- Font files and all imagery live in `static/` and are referenced by absolute paths (`/fonts/...`, `/tech-*.png`, `/expertise-*.png`).
- Most layout is per-component `<style>` blocks with media queries for mobile (breakpoints around 650px, 997px, 1100px).

## Conventions worth knowing

- Svelte 3 + `vitePreprocess` — `<script lang="ts">` works in `.svelte` files.
- Prettier config: tabs, single quotes, no trailing commas, 100-char print width (`.prettierrc`).
- ESLint extends `eslint:recommended` + TS + `eslint-plugin-svelte3` (`.eslintrc.cjs`).
- Adding a new technology: drop the icon into `static/` and add a `<Technology>` line in `+page.svelte` with the matching `categories` array — the filter store wires everything else up automatically.

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
