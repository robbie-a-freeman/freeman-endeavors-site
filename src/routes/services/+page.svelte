<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import SectionMarker from '$lib/components/SectionMarker.svelte';
	import { SURVEY_PRICE_USD, SURVEY_DURATION } from '$lib/config';

	const priceFmt = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	});
</script>

<Meta
	title="Services"
	description="Architecture surveys, fractional engineering leadership, and legacy modernization for SMBs. Fixed-price entry, plain-English deliverables, no junior handoffs."
/>

<header class="page-header container">
	<p class="caption">What we offer</p>
	<h1>Three ways to work with us.</h1>
	<p class="lede">
		The survey is the front door — a fixed-price, two-week read that lets you see how we work before
		you commit to anything bigger. Fractional and modernization are how we keep going after the
		survey.
	</p>
</header>

<nav class="toc container" aria-label="On this page">
	<ul>
		<li><a href="#survey"><span class="glyph">§</span> 01 · Architecture Survey</a></li>
		<li><a href="#fractional"><span class="glyph">§</span> 02 · Fractional Leadership</a></li>
		<li><a href="#modernization"><span class="glyph">§</span> 03 · Modernization</a></li>
	</ul>
</nav>

<section id="survey" class="service container">
	<SectionMarker number="01" label="Architecture Survey" as="h2" variant="pill" />
	<h3 class="service-title">A comprehensive report of your systems with actionable insights</h3>

	<div class="service-grid">
		<div class="service-body prose">
			<p>
				The survey is for clients who want a comprehensive, clinical snapshot of their software
				systems, processes, and third-party tools in order to evaluate their readiness for outcomes.
				Some examples of these outcomes: moving to another cloud provider, cost-cutting, AI
				integrations, and dynamic usage scaling. It is a fixed-price engagement: we read your code,
				your data model, your deploy story, and the three or four critical paths that keep your
				business running, and we hand you a written document that says — plainly — where the system
				is strong, where it's brittle, what we'd fix first, and what we'd leave alone.
			</p>

			<h4>What you get</h4>
			<p>
				A thorough, organized report of your system covering architecture, data, deploys, scaling,
				and cost as one cohesive document, and applying to them any KPIs or goals your team has.
				Alongside it: current-state architecture diagrams (your system as it's actually deployed,
				drawn next to your system as your docs and IaC describe it), a services inventory of every
				third-party system the application actually touches, a prioritized roadmap, and more
				depending on your business requirements. If you have a unique analysis request, we're happy
				to accomodate.
			</p>

			<p>
				We don't just tell you the what, but why. Every claim in every document traces back to
				specific evidence — a file in your repo, a cloud API response, a git commit, a CI run, a
				billing line. The evidence index and the full record of every read we did against your
				systems ship alongside the deliverables, so anything in the report can be reproduced or
				audited later by someone who wasn't on the call. The whole package renders as PDF, DOCX (so
				your team can comment and edit it in Word or Google Docs), and HTML.
			</p>

			<p>
				After we draft the report, we walk it through on a call with you and whoever else needs to
				be in the room. The prioritized roadmap is a document another engineer — ours, yours, or
				someone else's — can pick up and execute against. The deliverables stay yours. Nothing about
				the survey is locked to working with us afterward. If you take our documents, hand them to
				your existing team, and never call us again, that's a successful survey by our definition.
			</p>

			<h4>What we look for</h4>
			<p>
				The survey reads your system from the cloud control plane down to the data layer, against
				what your docs and intentions say it should be. We have opinions about each of these, and
				the deliverable will name them out loud.
			</p>
			<ul class="look-for">
				<li>
					<strong>The system as deployed vs. the system as documented.</strong> Cloud APIs and IaC say
					one thing. Your README and ADRs say another. The gap between them is usually where the surprises
					live — we draw both, side by side.
				</li>
				<li>
					<strong>Every third-party service your application actually touches.</strong> Active services
					in HEAD, services removed in the last twelve months, services proposed in ADRs or TODOs but
					never built. Generated from the code and git history, not from anyone's memory.
				</li>
				<li>
					<strong>The data layer's three-year horizon.</strong> Schemas, indexes, slow queries, hot tables,
					parameter-group anomalies. Most SMB systems are fine until year three — we read your schema
					and your slowest queries before we read your application code.
				</li>
				<li>
					<strong>The path from commit to production.</strong> DORA metrics with sample sizes and confidence
					intervals (a point estimate from twelve PRs is noise, and we'll say so). Where deploys go quiet,
					where rollbacks pile up, which step everyone has learned to work around.
				</li>
				<li>
					<strong>Scaling risk and vulnerability surface.</strong> Static analysis on the application
					code, dependency CVEs, secrets in git history, container and IaC checks. Findings get filtered
					against your real growth profile — issues at scales you won't reach are kept separate from the
					ones that will hit you next year.
				</li>
				<li>
					<strong>Cloud cost.</strong> Idle resources, oversized instances, unattached volumes. Savings
					figures get a conservative and an aggressive end, and every range cites the billing line it
					came from.
				</li>
				<li>
					<strong>The cloud/fleet decision.</strong> Serverless makes sense for some workloads and is
					a budget bomb for others. VM fleets are the right answer more often than the industry admits.
					We'll tell you which one you have, with numbers.
				</li>
				<li>
					<strong>The roadmap items that have been "next quarter" for six quarters.</strong>
					There is always a reason. We tell you whether the reason is technical or organizational, and
					which of the two is actually cheaper to fix.
				</li>
			</ul>

			<h4>Who it's for</h4>
			<p>
				Founders and decision-makers at startups and small-and-mid-sized businesses looking to plan
				future steps or evaluate your software capital.
			</p>
		</div>

		<aside class="service-aside">
			<div class="pricebox">
				<p class="caption">Calendar time</p>
				<p class="meta">{SURVEY_DURATION}</p>
				<p class="caption">Deliverable</p>
				<p class="meta">
					Written read + architecture diagrams + 90-day roadmap + 90-min walkthrough
				</p>
			</div>
			<div class="cta-block">
				<BookCallCTA size="large" />
				<p class="caption foot">
					First, a free consultation. We can get started on the survey soon after.
				</p>
			</div>
		</aside>
	</div>
</section>

<section id="fractional" class="service container">
	<SectionMarker number="02" label="Fractional Leadership" as="h2" variant="pill" />
	<h3 class="service-title">Embedded engineering leadership.</h3>

	<div class="service-grid">
		<div class="service-body prose">
			<p>
				Fractional engagements are for when ongoing expertise and development is needed, but it's
				most practical or feasible for such expertise to be an outside expert as opposed to
				full-time in-house. We come in as the senior engineering force and serve you either
				partially or in-full as you need. We provide everything from architecting to business advice
				to development and product consulting for our clients. As needed, we leverage our partner
				network to bring in experts to further enhance the project.
			</p>

			<h4>What you get</h4>
			<p>
				A named principal responsible for your software needs, capable of serving as your all-in-one
				architect, engineering manager, developer, consultant, and product lead.
			</p>

			<h4>Who it's for</h4>
			<ol>
				<li>
					Non-technical companies building or maintaining mission-critical software systems in need
					of competant management and direction.
				</li>
				<li>
					Teams undergoing a period of change (growth, implementing SOC processes, acquisition,
					etc.) and in need of temporary leadership.
				</li>
				<li>
					Early stage companies and startups where expertise is required but it doesn't yet make
					financial sense to bring an expert on full-time.
				</li>
			</ol>
		</div>

		<aside class="service-aside">
			<div class="pricebox">
				<p class="caption">Structure</p>
				<p class="meta">Monthly retainer</p>
				<p class="caption">Time commitment</p>
				<p class="meta">Weekly or monthly hour allotment</p>
			</div>
			<div class="cta-block">
				<BookCallCTA size="large" />
				<p class="caption foot">
					Pricing depends on time commitment and engagement length, which we can discuss in the free
					consultation.
				</p>
			</div>
		</aside>
	</div>
</section>

<section id="modernization" class="service container">
	<SectionMarker number="03" label="Legacy Modernization" as="h2" variant="pill" />
	<h3 class="service-title">Bring the business up to standards without breaking the business.</h3>

	<div class="service-grid">
		<div class="service-body prose">
			<p>
				Don't fall behind neglecting modernization when things are changing so fast in the industry.
				Modernization is the necessary work of taking a system that runs your business and
				rebuilding the parts of it that hold you back, without ever taking the rest of it offline.
				This work includes database migrations, API extractions, and developer workflow integrations
				using AI. Think your framework upgrades that have been pushed to next quarter for the last
				six quarters.
			</p>

			<h4>What you get</h4>
			<p>
				A project beginning with a written proposal of services, fixed milestones, and a real
				handoff at the end. We work inside your repository, against your existing team's review
				process, with feature flags and incremental cutovers wherever there's a system already in
				production. Every change lands behind a verification step. Every milestone is something you
				could ship to production today if we walked away at that point.
			</p>

			<p>
				Code that ships includes tests, runbooks, and documentation written to last. Collaboration
				and pedagogy are two of our four core values, so we treat the readability of our changes,
				and the knowledge transfer that goes with it, as part of the deliverable.
			</p>

			<h4>Who it's for</h4>
			<p>
				Businesses with a system in production that's still load-bearing but is starting to slow you
				down — hires take too long to onboard, every feature ships with a side of regression, the
				framework is two majors behind, the database is one wrong query from a stall. Some examples:
				a Rails 4 monolith that needs to be a Rails 7 monolith, a 2017-era React + REST app that
				wants to be Next.js + GraphQL, a monolithic REST architecture that needs to scale
				dynamically for fluctuating traffic.
			</p>
		</div>

		<aside class="service-aside">
			<div class="pricebox">
				<p class="caption">Structure</p>
				<p class="meta">Project-scoped, fixed milestones</p>
				<p class="caption">Typical duration</p>
				<p class="meta">2–6 months</p>
				<p class="caption">Often follows</p>
				<p class="meta">An Architecture Survey</p>
			</div>
			<div class="cta-block">
				<BookCallCTA size="large" />
				<p class="caption foot">Scope and price are project-specific.</p>
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
		margin-bottom: var(--s-9);
	}

	.toc ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-3);
	}

	/* Ghost outline pill — matches SectionMarker variant="pill". These are
	 * real jump-links, so they get an interactive hover (border darkens). */
	.toc a {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--ink-2);
		text-decoration: none;
		padding: 0.55rem 0.9rem;
		border: 1px solid var(--rule-strong);
		border-radius: var(--r-sm);
		transition:
			border-color var(--t-state) var(--ease),
			color var(--t-state) var(--ease);
	}

	.toc a:hover {
		color: var(--ink);
		border-color: var(--ink);
	}

	.toc .glyph {
		color: var(--forest);
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

	.service-body :global(.look-for) {
		list-style: none;
		padding: 0;
		margin: var(--s-4) 0 0 0;
		display: grid;
		gap: var(--s-4);
	}

	.service-body :global(.look-for li) {
		padding-left: var(--s-4);
		border-left: 2px solid var(--rule);
	}

	.service-body :global(.look-for strong) {
		color: var(--ink);
		font-weight: 500;
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
