---
layout: case_study
title: 'An audit that talked a CEO out of a rewrite'
description: 'A vertical-SaaS firm was three weeks from approving a 14-month rewrite. The audit pointed at a different problem, and a much cheaper fix.'
published: '2025-12-12'
client_anonymized: 'A B2B vertical-SaaS company'
industry: 'Vertical SaaS · Field services'
stack:
  - 'Python / Django'
  - 'Postgres'
  - 'Celery'
  - 'React'
engagement: 'Architecture Audit → Modernization'
duration: '2 weeks audit + 4 months modernization'
roi:
  - value: '$1.4M'
    label: 'Saved budget from declining the proposed rewrite'
  - value: '11×'
    label: 'Faster median report-generation latency'
  - value: '6 weeks'
    label: 'Time from audit handoff to first production cutover'
---

## Challenge

The client made software for field-services dispatch in a regulated vertical. The CEO had been hearing for eighteen months that the system needed to be rewritten. The reasons varied with who he asked. Their senior engineers said the data model was twisted. The CTO said the framework was too old. A consulting firm that had been brought in the prior summer had quoted a fourteen-month, $1.4M ground-up rebuild with a four-person team. The CEO was three weeks from approving it.

He'd heard about us through a board member and asked for a second opinion before he signed the SOW. Two weeks. Fixed fee. He told us he expected we'd confirm the rewrite was the right call; he wanted a clean read he could show the board.

### What we found

We didn't find what he was expecting.

The data model was, in fact, fine. It was unusual — the previous lead had modeled jobs as continuants rather than discrete events, which felt off until you understood the dispatch-and-cancellation flow this vertical requires. Once you understood it, the model made the logic dramatically simpler downstream. A rewrite would have lost this and replaced it with something worse.

The framework was Django 3, not the latest, but Django 5 was a four-week upgrade, not a rewrite. The places that felt slow were almost entirely one of two things: an N+1 query in the report generator, and a Celery setup that fanned out a tenant's report tasks across the same worker pool that handled their dispatch callbacks. When the reports were heavy, dispatch starved.

The actual problem — the one nobody had named clearly — was that the team had stopped trusting the code, and a team that doesn't trust its code interprets every problem as evidence that the code needs to be replaced. The codebase had been through three departures in a year. Nobody currently on the team had written the parts that worked best. The rewrite was, partly, a request for that part to be theirs.

## Approach

We wrote the audit honestly. It said: don't rewrite. Here's what to fix instead, in priority order, with estimates. Here's what's actually wrong with the team-and-code relationship, and what we'd recommend doing about it.

The audit included a section the CEO told us later was the most important part — a one-page summary the board could read in two minutes that explained, in plain language, why the rewrite was the wrong answer and what the right answer cost instead.

### The follow-on engagement

The board agreed to take the audit's recommendation. The client asked us to come back for the first piece of work the audit had pointed at — the report-generator rewrite and the Celery-pool split. Four months, fixed milestones, hands-on inside their repository with their team.

## Implementation

The report-generator work was the most visible. We rewrote the query layer using Django's ORM rather than the raw-SQL chain that had grown around it, behind a feature flag with a long soak window. The first cutover served reports eleven times faster than the previous path on the largest tenant's data. The team had assumed for months that the problem was Django; the problem was a join the original author had written by hand because Django couldn't do it in 2019, which Django could do natively in 2024.

The Celery-pool split was less visible but more impactful. Dispatch callbacks moved to a dedicated worker pool with a separate Redis queue. Report generation went to a second pool. A third small pool handled the low-volume but business-critical regulatory-filing tasks. The next time a tenant ran a large report, dispatch stayed responsive. The team noticed within the week.

### Working with the team

The four engineers on the client team were good engineers. They'd been told for a year that their codebase was bad. Part of the engagement, candidly, was repairing that. We paired with them on every major change. We made a habit of attributing the parts of the codebase we kept — naming the engineers who'd written them, in commit messages and in the audit document. By month three, the team was leading the work; we were reviewing, advising, and writing handoff documents.

## What it took

Two weeks for the audit. Four months for the follow-on work. One principal full-time, one mid-level engineer at three days a week. The CEO's read at the end of the engagement: the audit alone paid for the next decade of engineering work the firm wasn't going to have to do.
