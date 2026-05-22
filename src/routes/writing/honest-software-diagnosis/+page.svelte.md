---
layout: essay
title: 'What an honest software diagnosis looks like'
description: 'When a consultancy says you need a rewrite, it usually wants the work. The cheaper alternative is a diagnosis — fixed-price, willing to talk you out of it.'
dek: 'Why we built the survey, what it actually delivers, and the diagnosis it makes that most rewrites avoid.'
published: '2026-05-12'
---

The first time we sat in a room with a CEO who'd been told three different things by three different consultancies about what was wrong with his software, I noticed something the meeting was not about. Two of the firms had told him to rewrite. The third had told him to migrate to their preferred platform. None of them had told him what was actually wrong.

This is the gap the survey is for. We call ours a survey, not an audit, on purpose. Audit is the industry term, and the industry version of it — the format that gets sold to small-and-mid-sized businesses today — is, almost always, the wrong shape. It is too long. It is too marketing-coded. It is too obviously trying to lead somewhere — usually toward the firm's flagship six-month engagement. And it almost never makes the call most clients actually need somebody to make for them, which is the call to _not_ do the obvious next project.

This piece is about why we built ours the way we did, what it actually delivers, and the diagnosis it ends up making that most software audits — and most rewrites — quietly avoid.

## The setup most firms use

Walk into a generic software-consultancy intro call and the shape is roughly this. They listen to your story for thirty minutes, ask three or four clarifying questions, and tell you that they'd like to put together a proposal. The proposal arrives a week later and is, depending on the firm's house style, either a slide deck or a sixty-page Notion document. It contains a phased engagement plan. The first phase is usually titled "Discovery," and it runs four to eight weeks, costs a quarter of the project total, and produces — among other things — an audit-shaped document.

There is nothing wrong with that on paper. The wrong thing is structural. By the time you've seen the discovery deliverable, you have already paid for it and you have already paid for the four-week onboarding ramp that ate the first half of it. Discovery's job, in this format, is not to tell you whether the rest of the project should happen. Discovery's job is to validate the project that was sold to you when discovery was discovery. If discovery were allowed to say "actually you don't need any of this," it would have a deeply uncomfortable conversation with the sales motion that put it on your calendar.

I am not saying this is dishonest. The engineers running discovery in firms like these are, in our experience, mostly very good. The structural problem is that they've been put in a position where the strongest version of their work — the version that walks the client back from the project — is also the version that costs the firm the next six months of revenue. Most of them try, very honestly, to give you the strongest version anyway. Many of them succeed. But the structure pulls against them, and the structure pulls every week.

## What we wanted instead

The survey was the first artifact we built when we put Freeman Endeavors on its current footing as a firm. We wanted three things.

First, **the survey had to be a deliverable on its own**, not a phase of a larger engagement. A client who only ever buys the survey and never works with us again has — by our definition — bought a successful survey. Anything else makes the survey's recommendations dishonest by construction.

Second, **it had to be fixed-fee**. T&M discovery is a fundamentally different motion. Fixed-fee work forces the firm to make a call about scope before the work starts, and it gives the client a number they can decide on without having to estimate how long someone they don't know will take to do something they can't see.

Third, **it had to be allowed to say no**. Half of the audits we'd written across our careers had ended in a recommendation that was, essentially, "what you have is fine — fix the team, not the code." That recommendation is the most expensive recommendation for an incumbent firm to make and the most valuable recommendation for a client to receive. We wanted a format where that was the cleanest answer to land on, not the most awkward.

## What it actually delivers

The survey is two weeks of calendar time and a fixed fee. What you get at the end is a written document — typically four to six thousand words — and a ninety-minute walkthrough call with whoever from your team needs to be in the room. The document is structured the way a senior engineer would write a report to a peer they respected. Findings, evidence, recommendations. No marketing layer.

The document covers the data model, the deploy story, the critical-path workflows that actually keep the business running, and the team-and-code relationship. That last one matters more than most clients expect it to. We have seen four-million-dollar rewrites recommended on the basis of code that, on inspection, was fine — the team had stopped trusting it, and a team that doesn't trust its code interprets every problem as evidence that the code needs to be replaced.

Findings come ranked. We try very hard to land each finding on one of three actions: fix it now and we can help; fix it later and it can wait; or don't fix it, the cost is greater than the benefit. The third category is where we try to do our most useful work. Engineers find it very hard to leave problems alone. A diagnosis that explicitly tells you which problems are worth leaving alone is, often, a diagnosis that saves you the most money.

The walkthrough is not a presentation. We sit in a room with you and your team — sometimes physically, more often on a video call — and we go through the document section by section. The team asks questions. We change our minds about findings, sometimes, in the room, when somebody on the team puts context into the conversation that we didn't have. The version of the document you leave the walkthrough with is the version that incorporates that.

## The diagnosis most rewrites avoid

Here is the diagnosis we end up making more often than any other: **your system is not the problem you think it is. Your team has stopped trusting it. The cheapest way out is not a rewrite. The cheapest way out is to fix the trust, ship two or three carefully chosen modernizations behind feature flags, and let the team's confidence in the codebase rebuild as the visible work gets done.**

We have made this diagnosis to a CEO three weeks from signing a fourteen-month rebuild SOW with another firm. We have made it to a team that had been told by three previous consultancies that their data model was unworkable, when in fact their data model was unusual and good. We have made it to a founder who was about to fire his entire engineering team and start over, when in fact the team was strong and the founder was missing one thing — a senior person willing to sit in the room and tell him so.

Rewrites have a strange psychology around them. They feel like the brave choice. They feel like the decision a serious operator makes when faced with serious technical debt. They feel like the conversation you have when you are tired of incremental fixes that never seem to add up to anything. The truth is closer to the opposite. A rewrite is, almost always, the easiest decision to make and the hardest decision to be right about. The harder decision — the one that requires actually understanding the system before you replace it — is to figure out which parts you keep, which parts you fix, and which parts you leave alone.

That is the call the survey exists to make. We don't always land on "don't rewrite." Sometimes the right answer is a rewrite of a specific subsystem, scoped tightly, behind a feature flag, with a defined exit condition. Sometimes the right answer is a fractional engagement to hold the engineering seat while a new tech lead is hired. Sometimes the right answer is the modernization project the client asked for in the first place, with a slightly different sequence. The survey's job is not to default to any of these. The survey's job is to look at the actual system and tell the actual truth.

## What this costs you, and what it costs us

The survey is twelve thousand dollars. We picked the number deliberately. It is high enough to be a real commitment that signals a real diagnosis is being produced. It is low enough that it is approvable inside an SMB without going to a board. It is small relative to the next engagement — the modernization or fractional retainer — that the survey might or might not recommend, which keeps the incentive aligned with whatever the survey actually concludes.

It costs us, on average, more than the fee. We do not break even on a typical survey. We do break even on a typical client. We can do this because we are small and because our overhead is the engineering team and the writing time, not a sales pipeline and an office.

That is, candidly, the part that makes this format unworkable for most consultancies. If you have a sales team and an account-management layer and an office and a partner track, the survey has to either be priced much higher — at which point it stops being the easy first step — or it has to be a loss-leader for an engagement that's already been decided. Neither of those produces the diagnosis we wanted to be in the business of making.

## What we'd like you to take from this

If you are sitting on a feeling that something is wrong with your system, and the advice you have been getting is either expensive or evasive, an honest diagnosis is a thing that can exist. It is not the standard format. It is not the most profitable format. It is, in our read, the right format for SMBs whose systems are real and load-bearing and worth understanding rather than replacing.

If you'd like to talk about whether the survey makes sense for what you're facing, the [forty-five-minute call](/contact/) is free. We'll listen. We'll ask. If we're not the right firm for it, we'll say so and point you somewhere better.
