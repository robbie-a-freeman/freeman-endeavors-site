---
layout: case_study
title: 'Founding engineer through a generational rewrite of the same product'
description: 'Twenty-four months on a workforce-management SaaS — founded the codebase, ran fractional CTO duties, carried the engagement into a contract-first rewrite.'
published: '2026-05-10'
client_anonymized: 'A workforce-management SaaS for skilled-trades businesses'
industry: 'Vertical SaaS · Workforce operations'
stack:
  - 'TypeScript'
  - 'NestJS + Drizzle (v2)'
  - 'Express + Sequelize (v1)'
  - 'Next.js'
  - 'Expo / React Native'
  - 'GitHub Actions + GCP Cloud Run'
engagement: 'Fractional CTO → Architect + Implementation'
duration: '24 months continuous'
lenses:
  - 'Data Layer'
  - 'Architecture & Coordination'
roi:
  - value: 'Multiple/day'
    label: 'Mobile release cadence after EAS pipeline rebuild'
  - value: '0 days'
    label: 'Gap between v1 last commit and v2 first commit'
  - value: '—'
    label: 'Org-level engineering throughput (client-side, not measured by us)'
---

## Challenge

The client was a vertical-SaaS firm building a workforce-management platform for skilled-trades businesses — a product that scores worker performance across multiple dimensions, including field work, production output, internal review, and a per-company test bank, and drives per-cycle bonus payouts off the score. We came in as founding engineer in mid-2024, when the repo had no commits. Two years later, the client decided to rebuild the platform on a contract-first, AI-first stack — a codebase designed for AI-assisted development from the ground up.

The decision to rebuild was theirs, not ours. The question on our side was whether the engagement stopped at the rewrite or carried through it.

### What founding meant in v1

We wrote the first commit, set up the monorepo, modeled the multi-tenant data layer with the company-scoped `beforeFind` hooks that kept tenants from leaking into each other's data, and built the scoring engine that became the product's core IP. Performance cycles, weighted scoring with per-dimension grade maximums, the shift-and-timecard system, the mobile technician app, the auth path that prevented technicians from logging into the admin portal, the Cloud Build deploy pipeline, the test pattern that documented itself in the project's onboarding doc — all of it landed in v1.

## Approach

We carried into v2 as architect and implementation engineer, alongside the lead consultant who became primary owner of the new repo. The role shape changed; the engagement didn't. Same product, different stack, thirteen days between our last commit on v1 and our first commit on v2.

### What that meant in practice

v2 picked up v1's themes one for one. We re-implemented the CI/CD pipeline on GitHub Actions and Cloud Run instead of Cloud Build, with Workload Identity Federation for IAM. We rebuilt the mobile build pipeline on EAS, with iOS and Android both in CI and a production-deployment story the team could run on its own. We migrated deploy notifications off webhooks onto a Slack bot with one message per deploy — small change, but the deploy channel got readable for non-engineers for the first time. We picked up the Firebase auth integration, the DB connection lifecycle middleware, and a vertical-slice feature shipped end-to-end through the new layered architecture. The new stack was shaped differently; the work was the same shape.

## Implementation

### The mobile release cadence

The most visible change post-rebuild was the mobile pipeline. The v1 mobile app had been release-cadence-bottlenecked on a hand-shaped Cloud Build setup that nobody else on the team wanted to touch. After the v2 EAS work landed and the team got comfortable with it, mobile releases stopped being events. The team can ship the mobile app multiple times per day when feature work warrants it, and does.

### A scoring correctness fix

Late in the engagement, a correctness defect in the scoring path produced a result that was one hundred times off for a class of inputs. The code fix was small; the harder work was deciding what to do with the historical data the defect had touched. We wrote two backfill migrations, sequenced them, ran them against production after staging verification, and tightened the admin input bounds so the upstream state that caused the defect couldn't recur. The number of rows the backfill touched was small. The number of bad scores the platform would have generated forward was not.

### What didn't change

The data model, the scoring rules, the cycle semantics. v2 is a contract-first NestJS-and-Drizzle codebase where v1 was Express-and-Sequelize, but the domain logic is the same one we wrote in v1. That continuity is the engagement's load-bearing claim: a rewrite ordered by the client preserved the parts that worked, because the people who wrote them in v1 were still in the room for v2.

## What it took

Twenty-four months continuous, across two repos and one product. Sole engineer at platform scope in v1, second-chair architect with vertical-slice implementation ownership in v2. Eight hundred and forty-one commits, two hundred and sixty-four merged pull requests. Most of the work doesn't appear as numbers; it appears as a product that still runs the business it was built to run.
