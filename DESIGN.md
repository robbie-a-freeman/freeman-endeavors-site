# Design System — Freeman Endeavors

Working name: **Considered Editorial** · v0.1 · 2026-05-15

Anchor: the four locked company values (Integrity, Fit-to-purpose, Communication, Stewardship). Every choice below should be defensible as "this expresses one of those values" or "this differentiates from the consultancy-template baseline our SMB audience has seen ten times this week."

## Product Context

- **What this is:** Marketing + lead-generation site for Freeman Endeavors LLC, a small software consultancy operating from New Jersey. Total ground-up rebuild, not a polish pass. Goal is to convert SMB founders and CTOs into 60-minute architecture calls and productized intake engagements.
- **Who it's for:** CTOs, founders, and VP-level executives at small-and-mid-sized businesses in NJ, NY, and PA. Strong presence in healthcare-adjacent and fintech-adjacent verticals. They have been burned by big-agency bloat and want operators who embed and ship, not strategy decks.
- **Space/industry:** Independent software consulting. Direct peers: Chariot Solutions (Philly), Stride Consulting (NYC), Test Double (remote), Corgibytes (remote, legacy modernization), Modus Create/PromptWorks (Philly).
- **Project type:** Marketing site. Currently single-page SvelteKit; scope of the redesign likely expands to multi-route (services, case studies, approach, contact + scheduling).
- **Reference research:** `Consulting Brand Expansion Research.pdf` (commissioned 2026-05; lives in `~/Downloads/`). Adopt structural lessons (productized offerings, ROI case studies, frictionless CTAs) without inheriting its corporate voice — the PDF over-indexes on enterprise-mimicry language that conflicts with locked voice direction.

## Aesthetic Direction

- **Direction:** Considered Editorial — restrained, asymmetric, type-driven, warm. Reads like a thoughtful trade publication, not a SaaS landing page.
- **Decoration level:** Intentional. Hairline rules, subtle paper-grain background texture (~3% opacity), numbered section markers (`§ 01 · LABEL`) in mono caps, small typographic ornaments. Nothing decorative that doesn't earn its place.
- **Mood:** Premium without being precious. Plain-spoken but unmistakably literate. Signals writer, craftsperson, operator — not deck-builder.
- **Reference sites (visual ground truth, in priority order):** Test Double (testdouble.com — opinionated voice as design), Kunai (kunai.framer.website — restraint as authority), Chariot Solutions (chariotsolutions.com — what NOT to look like: generic gradient-hero corporate-warm).

## Typography

All fonts loaded from Google Fonts; can self-host later if performance demands.

- **Display/Hero:** **Fraunces** — variable contemporary serif with optical sizing. Weight 500 for headlines, italics for emphasis (`<em>`). Use `font-variation-settings: 'opsz' 96` at hero scale. Reject default Roboto entirely.
- **Body:** **Instrument Sans** — clean warm grotesque. Weight 400 body, 500 buttons. Pairs naturally with Instrument Serif / Fraunces.
- **UI/Labels:** Instrument Sans. Small caps with letter-spacing for section labels.
- **Data/Tables:** Instrument Sans with `font-feature-settings: 'tnum'` (tabular nums).
- **Code:** **JetBrains Mono** — weight 400, used for code blocks in case studies and for section markers (`§ 01 · INTAKE`).
- **Loading:** `<link>` from `fonts.googleapis.com` with `display=swap`. Preconnect to `fonts.gstatic.com`.
- **Scale (px):**
  - Display XL (hero): 64–76 · weight 500 · line-height 1.04 · letter-spacing -0.018em · opsz 96
  - Display Large: 40–48 · weight 500 · line-height 1.08 · letter-spacing -0.015em
  - Display Medium (section heads): 28–40 · weight 400–500 · line-height 1.12
  - Body Large: 19 · weight 400 · line-height 1.50
  - Body: 16 · weight 400 · line-height 1.55
  - Body Small: 14 · weight 400 · line-height 1.55 · color muted
  - Caption / Label: 11–12 · mono · letter-spacing 0.08–0.12em · uppercase

**Blacklist for this project:** Roboto (current), Inter, Poppins, Montserrat, Open Sans, Arial, Helvetica.

## Color

Color is **ink, not paint**. Used where it does work. One accent (forest) for primary CTAs and structural emphasis. One risk color (brick) for in-text emphasis pulls and ornamental section glyphs — used sparingly. Everything else is paper and ink.

**WCAG AA contract.** Light-mode brick on light-mode surface measures 4.24:1, below AA's 4.5:1 threshold for normal text. Brick is therefore restricted to (a) display-scale emphasis (`<em>` in hero H1), which clears AA's 3:1 large-text bar, and (b) ornamental `§` glyphs nested inside parent text whose contrast already passes. Any action surface (button background, link arrow on a clickable target, mobile drawer active state) uses forest, not brick.

### Light mode

- **Surface (paper):** `#FAF7F2` — warm off-white with slight cream undertone, away from clinical white
- **Surface 2 (zones):** `#F1ECE2` — for the case-study zone and design-system reference zones
- **Ink (primary text):** `#1A1A18` — near-black, never pure black, warm undertone
- **Ink 2 (secondary text):** `#2E2D29`
- **Muted:** `#6B6B66` — warm gray for captions, dates, footnotes
- **Forest (accent):** `#1A4D2E` — headlines, links, primary visual emphasis
- **Forest 2:** `#2D6A44` — hover states for forest elements
- **Brick (risk accent):** `#B85C3C` — display-scale `<em>` emphasis, ornamental `§` glyphs. **Used sparingly.** Not used as an action color (see WCAG AA contract above).
- **Brick 2:** `#A04C2E` — brick hover state
- **Rule (hairlines):** `#D5CFC4`
- **Rule strong:** `#B8B3A6` — borders that need to be noticeable

### Dark mode

Redesigned surfaces, not inverted. Reduce saturation 10–15%.

- **Surface:** `#16161A`
- **Surface 2:** `#21211F`
- **Ink:** `#F0EBE2`
- **Ink 2:** `#D3CEBF`
- **Muted:** `#8C8A82`
- **Forest:** `#6EA679` (lighter for contrast)
- **Brick:** `#C97551` (slightly desaturated, slightly lighter)
- **Rule:** `#2D2C29`
- **Rule strong:** `#44423D`

### Semantic

- Success: `#2F7D45`
- Warning: `#B8842F`
- Error: `#B53E2E`
- Info: `#2F5B7D`

## Spacing

- **Base unit:** 4 px
- **Density:** comfortable (between Kunai-airy and Chariot-dense)
- **Scale:** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
- **Body line-height:** 1.55
- **Display-to-body type ratio:** ~4× at hero scale

## Layout

- **Approach:** Hybrid editorial — strict 12-column grid for content density, creative-editorial for hero and section transitions.
- **Grid:** 12 columns. Max content width 1280 px. Side padding `clamp(20px, 6vw, 120px)`.
- **Breakpoints:** 720 · 1024 · 1280. Hero collapses to single column under 860.
- **Vertical rhythm:** 96 px between major sections (clamped on smaller viewports).
- **Hero:** asymmetric. Cols 1–7 carry the value-proposition headline + body. Cols 8–12 carry the intake block (label · paragraph · CTA). No background photo, no centered hero, no gradient overlay.
- **Section transitions:** via type and hairline rule. No full-bleed color washes.
- **Border radius:** `sm 2 · md 4 · lg 8`. Buttons live at 2 px. No bubbly pill cards.

## Motion

- **Approach:** Minimal-functional. The page does not perform; it presents.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` everywhere.
- **Durations:**
  - Micro (hover): 100 ms
  - State change (color, border): 200 ms
  - Entry fade: 600 ms
- **Reject:** scroll-driven choreography, parallax, viewport-pinned animations, gratuitous lottie/sequence work.

## Components

(Rendered in `/tmp/freeman-endeavors-design-preview.html` as live working examples. Cross-reference there.)

- **Buttons:** Primary (forest fill, surface text, 2 px radius), Ghost (1 px rule-strong border, ink text), Ink (ink fill, surface text). Hover: 1 px translate up + color shift (forest → forest-2 for primary).
- **Inputs:** Surface fill, 1 px rule-strong border, 2 px radius, forest border on focus. Placeholder italic + muted.
- **Cards:** 1 px rule border, no shadow, no fill. Hover: rule-strong border + 2 px translate up.
- **Alerts:** Surface fill + 3 px left border in the semantic color. Mono icon glyph in the semantic color.
- **Section markers:** `§ 01 · LABEL` in mono caps, brick `§` glyph, muted text.
- **Stats:** Display font, weight 500, with mono caption label below.

## Decisions Log

| Date       | Decision                                                                                                   | Rationale                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-05-15 | Initial design system created                                                                              | `/design-consultation` session synthesizing memory context (locked values, voice direction, audience), commissioned brand-research PDF, and visual analysis of 6 peer sites (corgibytes, testdouble, chariot, stride, thoughtworks, kunai) plus the current freemanendeavors.com baseline |
| 2026-05-15 | Considered Editorial direction chosen                                                                      | Position between Test Double's opinionated voice and Kunai's editorial discipline. Avoids Chariot-generic, Corgibytes-whimsy, and Kunai-Japanese-aesthetic.                                                                                                                               |
| 2026-05-15 | Fraunces + Instrument Sans pairing                                                                         | Reject overused Roboto / Inter / Poppins. Serif display signals writer, sans body signals operator.                                                                                                                                                                                       |
| 2026-05-15 | Forest #1A4D2E retained, color use restricted                                                              | Keeps the existing green brand DNA but ends the green-monochrome wash. Color used as ink, not paint.                                                                                                                                                                                      |
| 2026-05-15 | Brick #B85C3C adopted as risk accent                                                                       | Deliberate departure from consultancy-blue category norm. No NJ/NY/PA peer uses this color. Signals "considered craftsperson, not enterprise SaaS."                                                                                                                                       |
| 2026-05-15 | Asymmetric editorial hero, not centered hero-block                                                         | Differentiates above the fold against Chariot/Stride/every-other-consulting-site. Demands strong type to carry.                                                                                                                                                                           |
| 2026-05-15 | Tech-stack pills demoted                                                                                   | Current grid promotes commoditized tools; new design treats tools as a supporting one-line row, not a featured section. Per memory `feedback_positioning_copy.md`: tools are table stakes, not differentiators.                                                                           |
| 2026-05-15 | Productized service offerings adopted (architecture survey / fractional leadership / legacy modernization) | Per PDF research + Corgibytes' "Code Health Check" playbook. Fixed-price entry offers lower the barrier to a first engagement.                                                                                                                                                            |
| 2026-05-21 | "Architecture Audit" renamed to "Architecture Survey"                                                      | "Audit" carries overbearing/compliance connotations; "survey" reads as engineering mapping work. Anchor `#audit` → `#survey`; constants renamed; essay re-threaded so generic "audit" references contrast against ours.                                                                   |
