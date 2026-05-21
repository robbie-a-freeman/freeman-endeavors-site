---
layout: case_study
title: 'Sitting principal-engineer at a VR EdTech platform for two years'
description: 'Twenty-eight months on the platform — Kafka migration, CRM integration, license-leak closure, security work — alongside the long-tenured tech lead.'
published: '2026-05-18'
client_anonymized: 'A VR-native EdTech platform'
industry: 'EdTech · VR classrooms'
stack:
  - 'TypeScript / Node.js'
  - 'PostgreSQL'
  - 'Kafka (AWS MSK)'
  - 'React 19 + Redux'
  - 'Django'
  - 'Cypress'
engagement: 'Software Consultant'
duration: '28 months and continuing'
lenses:
  - 'Cloud & Operations'
  - 'Architecture & Coordination'
roi:
  - value: '96 → 80'
    label: 'Vulnerabilities resolved in a single dependency sweep'
  - value: 'Production'
    label: 'Kafka migration architecture, designed and shipped'
  - value: '—'
    label: 'Revenue impact of license enforcement (client-side, not measured by us)'
---

## Challenge

The client built a VR-native instruction platform — teachers run roomfuls of students through immersive science modules and watch their progress in real time from a live-classroom dashboard. The product was several years old by the time we joined, with one long-tenured tech lead who had been there since the early days and a deep, idiosyncratic codebase that worked well and was hard to onboard onto.

The team needed a second principal engineer. Not for a single feature lane. The tech lead had a queue of architectural decisions he didn't have the hours for: a Kafka migration the system needed but nobody had designed; a CRM integration with no prior path; license enforcement that had been built but never turned on; a long backlog of dependency advisories. He wanted somebody who could sit across the work — design, implement, and ship — without requiring a referee.

### What broad meant

The engagement spanned architecture, implementation, dependency hygiene, UI bug-fixing on the live-classroom dashboard, and a handful of admin features in the Django super-admin. Three pieces of work are worth telling.

## Approach

Second principal, reporting to the tech lead. No defended turf, no scope wall around a single team. The tech lead would merge our work the same way he merged everyone else's, and we'd merge his when it landed in our review queue. We'd write architecture documents when the decision was load-bearing — not as a process, but because the decisions were ones the team would inherit.

## Implementation

### The CRM integration that didn't exist

The customer-success team needed roster, license, and usage data flowing into their CRM, and there was no prior path. The existing license-analysis code lived inside a monolithic service file that was too slow and too tangled to drive that flow on a cadence. We split log analysis out into its own service, added a database-backed analysis cache so a tenant's report didn't have to be regenerated for every sync, parallelized district-level processing, paginated the CRM organization fetch, and added an email-filtering layer to keep noisy free-mail addresses out of the records the CRM expected. The pipeline is still in production.

### The Kafka migration

The platform needed to move institution, class, user, and contract sync onto Kafka topics so that the authentication service, the runtime, and the admin tooling could subscribe instead of polling the main database. There was no architecture document and no producer integration when we started. We wrote the migration architecture as the design-of-record — a long document that still lives in the project's `documentation/` directory and is referenced from its onboarding doc — and then implemented it: producer framework on the Node side, signal-based producers on the Django side, JSON-schema'd inter-service contracts, SASL auth for the production AWS MSK cluster. The migration is complete and mission-critical in production, and iteration continues.

### The license enforcement we shipped

The product modeled contract seats that cascaded down an institution hierarchy. A database view knew which students were unlicensed. The session layer didn't enforce — by design. The unenforced state had been an intentional decision early in the company's life and never got rolled back. Our work wasn't discovering the gap; it was the safe toggle-on. We wrote the enforcement check in the session layer, added an admin-only error path so internal users could still log in to investigate, wrote the tests, and shipped it behind a feature flag. The revenue impact lives on the client's books, not ours.

## What it took

Twenty-eight months and counting. One engineer at principal scope, a steady cadence of feature branches owned end-to-end, and a weekly review rhythm with the original tech lead. The most recent piece of work has been a security-dependency sweep that took the count from ninety-six known vulnerabilities to eighty in a single phase — more phases are queued. The engagement has the shape of a fractional second-chair: not a single feature, not a fixed delivery, but the cumulative weight of two-plus years of structural work that the platform now runs on.
