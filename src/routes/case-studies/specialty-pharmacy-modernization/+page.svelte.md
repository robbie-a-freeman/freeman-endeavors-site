---
layout: case_study
title: 'Replatforming a 12-year-old pharmacy intake system without an outage'
description: 'A Mid-Atlantic specialty pharmacy had outgrown its intake system. We moved them to a modern stack over five months without a single intake outage.'
published: '2026-03-20'
client_anonymized: 'A Mid-Atlantic specialty pharmacy'
industry: 'Healthcare · Specialty pharmacy'
stack:
  - 'Rails 4 → Rails 7'
  - 'PostgreSQL'
  - 'AWS'
  - 'React (legacy) → Hotwire'
engagement: 'Legacy Modernization'
duration: '5 months'
roi:
  - value: '0'
    label: 'Days of intake downtime during cutover'
  - value: '3.2×'
    label: 'Faster median prescription processing'
  - value: '70%'
    label: 'Reduction in time to onboard a new pharmacist user'
---

## Challenge

The client ran a specialty pharmacy that filled high-cost, low-volume prescriptions — biologics, oncology adjuncts, autoimmune therapies — for patients across six states. The application that took prescription intake from prescribers, surfaced it to pharmacists, and routed it through prior authorization had been built in 2013 on Rails 4, with a React frontend that predated functional components and a custom queue layer that lived outside of ActiveJob because ActiveJob hadn't existed yet.

Twelve years of feature requests later, intake worked. It also took thirty seconds to load a patient record on a slow Comcast morning, broke whenever the team's two senior engineers were both on PTO, and could not be onboarded onto by a new pharmacist hire in less than half a workweek. The leadership team had been told twice — by two different consultancies — that the system needed to be rewritten from scratch.

### What we read

We started with an audit. The audit said: don't rewrite this. The data model was good. The pharmacist workflow encoded twelve years of pharmacy law and edge cases that nobody on the leadership team could enumerate from memory but every working pharmacist could correct on sight. Throwing that away in a greenfield rewrite would have been the most expensive mistake the firm could have made.

What needed to change was the foundation — Rails version, frontend stack, queue layer, deploy story — without changing the application logic that the team relied on every day. A careful modernization, not a rebuild.

## Approach

We agreed up front on the rule that ended up shaping everything: no cutover that the on-call pharmacist couldn't roll back from her phone. Every change had to ship behind a feature flag, and every flag had to have a verified rollback path before it ever flipped on for a real prescription.

### Sequencing

We did the work in four passes. Rails 5, Rails 6, Rails 7 — each a clean migration with its own multi-week soak. Then the frontend, on a route-by-route basis: the React app stayed up, and we replaced one workflow at a time with Hotwire, keeping the pharmacists' bookmarks and muscle memory intact. The custom queue layer was retired last, swapped for an ActiveJob-on-Sidekiq setup, with the old worker processes left running in parallel for a week before we drained them.

### Working with the existing team

The client had two senior engineers who knew the system better than anyone alive. We didn't replace them. We worked inside their repository, against their review process, paired with them on the hardest migrations, and wrote the runbooks they'd asked for and never had time to write themselves. By month three, they were leading half the cutovers.

## Implementation

The Rails 5 and 6 hops were the most technically interesting parts of the engagement and the least interesting parts of the writeup. Standard upgrade-Rails work, executed carefully. The places we spent real time were on the parts of the system the original team had built around Rails because Rails couldn't do it yet in 2013 — a hand-rolled background queue, a hand-rolled multitenant scoping layer, and an in-app reporting engine. Each of these we replaced with the modern Rails-shaped equivalent, kept the existing API stable, and migrated callers behind feature flags.

The frontend was, candidly, harder than the Rails work. Twelve years of React conventions don't translate cleanly to Hotwire. We made one architectural call we'd make again: every page we touched was rewritten end-to-end, never incrementally. Hybrid React-and-Hotwire pages are a maintenance burden that erodes trust in the new system. We finished pages or we didn't start them.

By month five, the React app served two routes — both administrative, neither in the pharmacist's daily workflow. The team chose to leave them as-is until a future engagement.

## What it took

Five months calendar. Two of our engineers, the client's two senior engineers, and weekly check-ins with the head of operations who needed to know when each cutover was coming. Roughly 380 pull requests, of which the team merged 374 — six were rolled back during their soak window before they ever flipped on for real users.

The pharmacists noticed exactly one change during the entire engagement: the load times got faster. Which was the goal.
