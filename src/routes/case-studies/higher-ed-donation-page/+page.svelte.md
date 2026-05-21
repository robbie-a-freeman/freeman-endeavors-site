---
layout: case_study
title: 'Six weeks to wrap a donation modal around an immovable CRM'
description: 'A four-step donation wizard built as a vanilla-JS shell around an existing CRM that owned every submission and payment route.'
published: '2026-04-20'
client_anonymized: 'An online giving page for a higher-education institution'
industry: 'Higher education · Donor experience'
stack:
  - 'Vanilla JavaScript'
  - 'HTML / CSS (no build step)'
  - 'Embedded CRM form widget'
  - 'Stripe (via iframe)'
engagement: 'Fixed-scope build'
duration: '6 weeks'
lenses:
  - 'Architecture & Coordination'
roi:
  - value: '13×'
    label: 'Hero image weight reduction before launch (22 MB → 1.7 MB)'
  - value: '1'
    label: 'Application file: 1,665 lines of markup, inline CSS, inline JS'
  - value: '—'
    label: 'Donation-rate impact (client-side, not measured by us)'
---

## Challenge

The client's advancement team wanted a four-step donation modal — a wizard with step indicators, recurring vs. one-time giving, an amount picker with presets, and a payment step that ran through their existing card processor. The constraint was that they couldn't change the back end. Their CRM owned every donor record, every submission, every payment route. We couldn't replace it, we couldn't modify it. The right answer was to wrap it.

### Why one file

The page was dropped into the CRM's hosted shell at deploy time — markup, inline styles, inline JavaScript. No bundler, no package manager, no test suite. The shape of the deliverable was determined entirely by where the page was going to live.

## Approach

We treated the CRM as immovable. The visible page would own the experience; the CRM would own the submission. Every visible input mirrored into a hidden form whose markup was injected by the CRM's embed script at runtime, with synthetic change events so the CRM saw the mutations as if they were real user input.

### The payment step

The CRM's embed spawned a Stripe iframe inside the hidden form — invisible to the donor by default. At page-load we walked the iframe collection, identified the Stripe frame by its element-ID prefix, and relocated it into the visible payment step. The validator deliberately skipped the card-field check, because cross-origin rules made the field uninspectable. We trusted Stripe to fail closed on submission and showed the donor the CRM's loading state through a `MutationObserver` watching the body's progress-bar classes.

## Implementation

### The four-step wizard

Vanilla JavaScript, written for clarity rather than cleverness. Step indicators with `yetToComplete` and `completed` states, gated forward navigation, per-step validation, back navigation between steps, country-and-state coupling that reset the state select when the country changed. Each "Next" button had its `onclick` rebound based on validation state — so disabled buttons surfaced inline errors rather than failing silently.

### Recurring vs. one-time giving

Two preset arrays, a tab toggle, and a frequency dropdown — but the visible UI had to rewrite every amount label on the page (`$50` vs. `$50 / month`), show or hide a `recurringOnly` class of fields, and trigger the CRM's hidden recurring checkbox after a short delay because the checkbox wasn't in the DOM at page load. Small details, but the kind that decide whether donors trust the flow enough to finish it.

### Page chrome and a pre-launch sweep

A homegrown testimonial slider with dot indicators, a planned-giving content block linking out to three downloadable PDFs, a headline pull-quote section. The pre-launch image-weight sweep took the hero from twenty-two megabytes to one-point-seven and the section transition image from fifteen megabytes to two. The originals stayed in the repo, suffixed `_original`, for archive.

## What it took

Six weeks calendar. One engineer. Twenty-seven commits, one application file, one page that shipped. The last commit on the branch was titled "final release cleanup, a few bug fixes" — the conventional sign-off for a fixed-scope build that landed.
