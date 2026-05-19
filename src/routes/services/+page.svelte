<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import SectionMarker from '$lib/components/SectionMarker.svelte';
	import { AUDIT_PRICE_USD, AUDIT_DURATION } from '$lib/config';

	const priceFmt = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	});
</script>

<Meta
	title="Services"
	description="Architecture audits, fractional engineering leadership, and legacy modernization for SMBs. Fixed-price entry, plain-English deliverables, no junior handoffs."
/>

<header class="page-header container">
	<p class="caption">What we do</p>
	<h1>Three ways to work with us.</h1>
	<p class="lede">
		The audit is the front door — a fixed-price, two-week read that lets you see how we work before
		you commit to anything bigger. Fractional and modernization are how we keep going after the
		audit, if you want us to.
	</p>
</header>

<nav class="toc container" aria-label="On this page">
	<ul>
		<li><a href="#audit"><span class="glyph">§</span> 01 · Architecture Audit</a></li>
		<li><a href="#fractional"><span class="glyph">§</span> 02 · Fractional Leadership</a></li>
		<li><a href="#modernization"><span class="glyph">§</span> 03 · Modernization</a></li>
	</ul>
</nav>

<section id="audit" class="service container">
	<SectionMarker number="01" label="Architecture Audit" as="h2" />
	<h3 class="service-title">A written read of your system, in two weeks, for a flat fee.</h3>

	<div class="service-grid">
		<div class="service-body prose">
			<p>
				The audit is what we do when you know something's off and you want a second pair of eyes
				before you spend real money on a fix. It is a fixed-price engagement: we read your code,
				your data model, your deploy story, and the three or four critical paths that keep your
				business running, and we hand you a written document that says — plainly — where the system
				is strong, where it's brittle, what we'd fix first, and what we'd leave alone.
			</p>

			<h4>What you get</h4>
			<p>
				A written architecture read of your system, roughly 4,000 to 6,000 words, walked through
				live on a 90-minute call with you and whoever else needs to be in the room. After the
				walkthrough we leave you with a prioritized recommendations document that another engineer
				— ours, yours, or someone else's — can pick up and execute against.
			</p>

				<p>
					The deliverables stay yours. Nothing about the audit is locked to working with us
					afterward. If you take our document, hand it to your existing team, and never call us
					again, that's a successful audit by our definition.
				</p>

			<h4>Who it's for</h4>
			<p>
				Founders and CTOs at small-and-mid-sized businesses where the engineering function has
				started to feel opaque. The system runs, but you've stopped being sure why. The original
				builder left. The recent rewrite didn't land. You're considering a rebuild and want to know
				if that's actually the right answer before you commit a quarter of your runway to it.
			</p>

			<h4>What it's not</h4>
			<p>
				The audit is not a code review of every file. It's not a security pentest. It's not the
				fix — we won't ship a single line of production code as part of the audit itself, and we
				won't write the tests you need. Those are separate engagements, and we'll tell you which
				ones we think you actually need.
			</p>
		</div>

		<aside class="service-aside">
			<div class="pricebox">
				<p class="caption">Fee</p>
				<p class="price">{priceFmt.format(AUDIT_PRICE_USD)}</p>
				<p class="caption">Calendar time</p>
				<p class="meta">{AUDIT_DURATION}</p>
				<p class="caption">Deliverable</p>
				<p class="meta">Written read + 90-min walkthrough + recommendations doc</p>
			</div>
			<div class="cta-block">
				<BookCallCTA size="large" />
				<p class="caption foot">First, a free 45-minute call. The audit is the next step after.</p>
			</div>
		</aside>
	</div>
</section>

<section id="fractional" class="service container">
	<SectionMarker number="02" label="Fractional Leadership" as="h2" />
	<h3 class="service-title">Embedded engineering leadership between hires.</h3>

	<div class="service-grid">
		<div class="service-body prose">
			<p>
				Fractional engagements are for the moments when your team is real but the leadership seat
				is empty — your tech lead just left, your CTO is buried in the next round, or you've grown
				past the point where the founder can carry the whole engineering function on the side. We
				come in as the senior engineering voice for one to four days a week, and we hold that seat
				until the full-time hire is in and up to speed.
			</p>

			<h4>What you get</h4>
			<p>
				A named principal who shows up to your standups, your planning, your hiring loops, and
				your incident reviews. Architecture decisions get made and written down. Code reviews
				happen and the reviewer is somebody senior. Roadmaps have ranges on them. Your existing
				engineers stop being the only people accountable for everything at once.
			</p>

				<p>
					This is delivered work, not advisory work. We will write code where writing code is the
					right answer. We will own incidents on call where that's the right answer. We are not
					a fractional CTO product that shows up to a weekly meeting and emails a memo.
				</p>

			<h4>Who it's for</h4>
			<p>
				Teams of two to twelve engineers between leadership hires, or earlier-stage teams whose
				founder-engineer is no longer the right person to own the engineering function but who
				don't yet need — or can't yet afford — a full-time CTO.
			</p>

			<h4>What it's not</h4>
			<p>
				It is not a permanent placement. We agree on an end condition at the start: the new hire
				lands, the system is stable enough to run for two quarters without senior intervention,
				the project that prompted the engagement ships. When the end condition is met, the
				engagement ends. Indefinite fractional engagements are a failure mode, not a goal.
			</p>
		</div>

		<aside class="service-aside">
			<div class="pricebox">
				<p class="caption">Structure</p>
				<p class="meta">Monthly retainer, weekly scope</p>
				<p class="caption">Time commitment</p>
				<p class="meta">1–4 days per week, named</p>
				<p class="caption">Ends when</p>
				<p class="meta">Agreed exit condition is met</p>
			</div>
			<div class="cta-block">
				<BookCallCTA size="large" />
				<p class="caption foot">
					Pricing depends on time commitment and engagement length. We'll quote it on the call.
				</p>
			</div>
		</aside>
	</div>
</section>

<section id="modernization" class="service container">
	<SectionMarker number="03" label="Legacy Modernization" as="h2" />
	<h3 class="service-title">Replatforming systems without breaking the business.</h3>

	<div class="service-grid">
		<div class="service-body prose">
			<p>
				Modernization is the slow careful work of taking a system that runs your business and
				rebuilding the parts of it that hold you back, without ever taking the rest of it offline.
				Database migrations. API extractions. Framework upgrades that have been pushed to next
				quarter for the last six quarters. The kinds of projects that fail loudly when they're
				rushed and quietly when they're under-resourced.
			</p>

			<h4>What you get</h4>
			<p>
				A project with a written plan, fixed milestones, and a real handoff at the end. We work
				inside your repository, against your existing team's review process, with feature flags
				and incremental cutovers wherever there's a system already in production. Every change
				lands behind a verification step. Every milestone is something you could ship to
				production today if we walked away at that point.
			</p>

				<p>
					Code that ships includes tests, runbooks, and documentation aimed at the engineer who
					will own it after we leave. That engineer is not us. Collaboration is one of our four
					values; we treat the post-handoff readability of code — and the knowledge transfer that
					goes with it — as part of the deliverable, not polish.
				</p>

			<h4>Who it's for</h4>
			<p>
				Businesses with a system in production that's still load-bearing but is starting to slow
				you down — hires take too long to onboard, every feature ships with a side of regression,
				the framework is two majors behind, the database is one wrong query from a stall. Common
				examples: a Rails 4 monolith that needs to be a Rails 7 monolith, a 2017-era React + REST
				app that wants to be Next.js + GraphQL, a Python 2 service that has run out of runway.
			</p>

			<h4>What it's not</h4>
			<p>
				It is not a rewrite-from-scratch. We do not believe in rewriting your system from a blank
				editor. If our read of the codebase points to that conclusion, the audit would have said
				so first, and we'd point you at a different team. The right team for a true greenfield
				rebuild is usually not the right team for a careful modernization, and vice versa.
			</p>
		</div>

		<aside class="service-aside">
			<div class="pricebox">
				<p class="caption">Structure</p>
				<p class="meta">Project-scoped, fixed milestones</p>
				<p class="caption">Typical duration</p>
				<p class="meta">2–6 months</p>
				<p class="caption">Often follows</p>
				<p class="meta">An Architecture Audit</p>
			</div>
			<div class="cta-block">
				<BookCallCTA size="large" />
				<p class="caption foot">
					Scope and price are project-specific. The audit is the cleanest path to a real estimate.
				</p>
			</div>
		</aside>
	</div>
</section>

<style>
	.page-header {
		padding-top: var(--s-9);
		padding-bottom: var(--s-6);
	}

	.page-header h1 {
		margin: var(--s-3) 0 var(--s-5) 0;
		max-width: 20ch;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 56ch;
	}

	.toc {
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
		padding-top: var(--s-3);
		padding-bottom: var(--s-3);
		margin-bottom: var(--s-9);
	}

	.toc ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-5);
	}

	.toc a {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--ink-2);
		text-decoration: none;
	}

	.toc a:hover {
		color: var(--ink);
	}

	.toc .glyph {
		color: var(--brick);
	}

	.service {
		padding-top: var(--s-9);
		padding-bottom: var(--s-9);
		border-top: 1px solid var(--rule);
		scroll-margin-top: 80px;
	}

	.service-title {
		font-size: var(--fs-display-md);
		max-width: 22ch;
		margin: var(--s-3) 0 var(--s-6) 0;
	}

	.service-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-7);
	}

	.service-body :global(h4) {
		margin-top: var(--s-6);
		margin-bottom: var(--s-2);
	}

	.service-aside {
		display: flex;
		flex-direction: column;
		gap: var(--s-5);
	}

	.pricebox {
		background: var(--surface-2);
		border: 1px solid var(--rule);
		padding: var(--s-5);
	}

	.pricebox .caption {
		margin: 0;
	}

	.pricebox .price {
		font-family: var(--font-display);
		font-size: 2.5rem;
		font-weight: 500;
		margin: var(--s-1) 0 var(--s-4) 0;
		letter-spacing: -0.015em;
		color: var(--ink);
	}

	.pricebox .meta {
		margin: var(--s-1) 0 var(--s-4) 0;
		font-size: var(--fs-body);
		color: var(--ink);
	}

	.pricebox .meta:last-child {
		margin-bottom: 0;
	}

	.cta-block {
		display: flex;
		flex-direction: column;
		gap: var(--s-3);
	}

	.cta-block .foot {
		max-width: 32ch;
	}

	@media (min-width: 1024px) {
		.service-grid {
			grid-template-columns: 1.6fr 1fr;
			gap: var(--s-8);
		}
	}
</style>
