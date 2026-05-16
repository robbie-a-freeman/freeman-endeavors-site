# TODOS

Deferred work captured during /plan-eng-review on 2026-05-15. Each entry: what / why / pros / cons / context / depends-on. Do not append vague bullets here — context decay is real.

## T1 — V1.1: bespoke OG images for case studies + essay (replace `og-default.png` fallback)

**What.** Design per-piece OG cards for the 3 case studies (`/case-studies/[slug]/`) and the launch essay (`/writing/[slug]/`). Drop PNGs into `static/og/[slug].png`; Meta.svelte already consumes the `ogImage` prop and falls back to `og-default.png` when unset.

**Why.** Outbound LinkedIn/Twitter previews carrying case-study or essay links use `og-default.png` (Fraunces wordmark) in V1. Bespoke imagery raises click-through on social shares and signals craft.

**Pros.** Stronger visual hook on social shares; aligns each case study with its own narrative; differentiates Freeman Endeavors content in a LinkedIn feed.

**Cons.** Design time (~30-60 min per image × 4 = 2-4h). Risk of inconsistent quality if rushed.

**Context.** `<Meta>` component (`$lib/components/Meta.svelte`) already supports the `ogImage` prop. Case-study and essay frontmatter has an optional `og_image` field per the Zod schema. Pure design + drop-in task — no code changes needed.

**Depends on.** V1 ship complete.

---

## T2 — Week 1: mdsvex × Svelte 5 compat verification + Svelte 4 fallback plan

**What.** Smoke-test mdsvex against Svelte 5 (runes) by creating a temporary `src/routes/_compat-check/+page.svelte.md` with frontmatter + an embedded Svelte component reference. Verify it builds and renders without error in week 1 of implementation. If broken: downgrade `svelte` to `^4` in package.json, rerun the smoke test, lock the toolchain at Svelte 4.

**Why.** Svelte 5 runes are new (released late 2024); mdsvex's Svelte 5 support is newer. Discovering incompatibility mid-implementation (e.g., week 2 when scaffolding the first real case study) would burn a day of debugging during a tight 4-week budget. Outside voice flagged this as a likely failure mode.

**Pros.** Catches the failure mode at the cheapest point (one disposable .svelte.md file). Failsafe path is well-defined.

**Cons.** ~30 min of upfront work; might feel like wasted time if mdsvex works on day one.

**Context.** Toolchain choice in /plan-eng-review Tension 2: fresh `npm create svelte@latest` scaffold defaults to Svelte 5 + runes. mdsvex is the markdown preprocessor that powers `/case-studies/[slug]/` and `/writing/[slug]/` routes. Without mdsvex working, the entire content strategy stalls.

**Depends on.** Fresh scaffold step (T1 in Implementation Tasks).

**Status.** Listed as P0 implementation task T3 (foundation phase, week 1). Reproduced here so it survives if the implementation-task list is reorganized.
