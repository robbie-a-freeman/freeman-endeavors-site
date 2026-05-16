---
layout: case_study
title: 'Holding the tech-lead seat at a Series-A fintech for six months'
description: 'A Series-A fintech lost its tech lead two weeks after closing. We held the seat — hands-on, three days a week — until the full-time hire was up.'
published: '2026-02-15'
client_anonymized: 'A Series-A fintech (payments adjacent)'
industry: 'Fintech · B2B payments'
stack:
  - 'Node.js / TypeScript'
  - 'Postgres'
  - 'Temporal'
  - 'React / Next.js'
engagement: 'Fractional Engineering Leadership'
duration: '6 months'
roi:
  - value: '90 days'
    label: 'New tech-lead ramp from offer-letter to standalone'
  - value: '4'
    label: 'Engineers hired during the engagement'
  - value: '0'
    label: 'Production incidents requiring a post-mortem to the board'
---

## Challenge

The client was a Series-A fintech that processed B2B payments for a vertical SaaS that we won't name. Two weeks after the Series A closed, their tech lead left for a competitor. The team was four engineers, one product manager, and a founder-CEO whose last engineering work had been in 2017 in a different stack. There was no senior engineering presence in the room.

The board's preference was for the founder to hire a full-time CTO immediately. The founder's read was that an emergency CTO hire from a position of zero leverage was going to produce an expensive mistake. He needed somebody to hold the engineering seat for long enough to do the hire properly — three to six months — and to keep the system from breaking while he did.

### What was at risk

The product was live and processing real money. The team had shipped well under the previous tech lead but had no muscle for running themselves. Within the first week of the engagement we found three production-critical decisions that had been deferred awaiting senior input — a Temporal upgrade, a database isolation-level change, and a vendor migration that had been on the calendar for the prior month and had silently slipped.

## Approach

We agreed on the engagement shape on day three. Three days a week, on-site for the standup, available for incident response, hands-on for code review and architecture. An exit condition: when a full-time tech lead was offered, accepted, and through their first month of standalone work. No indefinite arrangement, no creeping scope.

### What we owned

Day-to-day engineering leadership — standups, planning, on-call rotation, code review for anything touching the payments core. Architecture decisions got written down in an `/decisions/` directory in the repo, with the trade-offs and the date. We did not own product roadmap; that stayed with the founder and the PM, and we participated as the engineering voice but never the deciding voice.

We also owned the hiring loop for the new tech lead. The founder ran the founder portions; we ran the technical screens, the architecture conversations, and the on-site coding rounds. By month three, we'd run forty-two screens, made eight offers of an on-site, hired four — three engineers and the eventual tech lead.

## Implementation

The work fell into three categories that recurred throughout the engagement.

### Decisions deferred

A backlog of architectural decisions that had been waiting on senior input. We worked through it in the first month — wrote the Temporal upgrade plan and shipped it, picked an isolation-level posture for the payments tables, completed the vendor migration that had been silently slipping, and started a weekly architecture review where deferred decisions got either resolved or explicitly written down as "defer to month three" with a date.

### Quietly broken patterns

The previous tech lead had inherited some patterns from earlier engineers that nobody had questioned. A queue-per-tenant pattern that didn't scale past about two hundred tenants and was already showing strain. A test suite that ran against a shared development database, which made parallelism impossible. A deploy pipeline that required a human eyes-on for every production push. We picked the two highest-leverage of these and shipped fixes inside the engagement; the rest we documented and left for the incoming tech lead to inherit knowingly.

### The hire

The most consequential part of the work. Forty-two screens, eight on-sites, one offer accepted. The new tech lead started in month five and overlapped with us for six weeks of paired handoff — pairing on incidents, co-reviewing his first dozen PRs, walking him through the `/decisions/` directory line by line.

## What it took

Six months calendar. Three days a week on-site, occasional weekend incident response. Two of our engineers — one principal, one mid-level for the engineering work — and steady involvement from the founder and PM.

The engagement ended on day one of the new tech lead's standalone month. We were back in the room for two follow-ups in the quarter after — once for a Postgres major-version cutover the new lead wanted a second opinion on, once for a hire we sat in on as a courtesy. Both were single-day, scoped-and-out.
