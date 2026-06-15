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

---

## T3 — Companion long-form essay reinforcing the §03 positioning lenses

**What.** Write one (or both) of two candidate long-form essays for `/writing/`:
(a) "When serverless is a budget bomb" — concrete decision framework for the Cloud/Operations lens introduced on the homepage §03.A.
(b) "How a Postgres schema charges interest" — schema and query design that survives year three, for the Data Layer lens at §03.B.
Target length 2,000–3,000 words. Frontmatter follows the existing essay Zod schema.

**Why.** The homepage §03 makes three load-bearing capability claims. Case studies prove them as engagements. A long-form essay proves them as _thinking_ — the kind a founder cites when they recommend the firm to another founder. The audit-front-door essay already demonstrates this format works.

**Pros.** Highest-leverage reinforcement of the §03 positioning. Demonstrable opinion in long form is what differentiates senior consultancies from staffing agencies. SEO-positive — both candidate titles target real founder queries.

**Cons.** Real human writing time, not a drafting task. Bad essay actively erodes the §03 claim. Quality bar is higher than a typical blog post because it's load-bearing positioning content.

**Context.** Deferred from the SELECTIVE EXPANSION cherry-pick ceremony in /plan-ceo-review on 2026-05-19. The §03 block on `/` ships first; this essay lands as its own commit once Robbie has a clear two-to-three-hour writing window. Existing essay infrastructure (`src/routes/writing/<slug>/+page.svelte.md`, `layout: essay`, Zod-validated frontmatter) is already in place.

**Depends on.** §03 positioning copy shipped (this PR).
