<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import SectionMarker from '$lib/components/SectionMarker.svelte';
	import { SITE } from '$lib/config';

	const orgJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: SITE.name + ' LLC',
		url: SITE.url,
		email: SITE.email,
		sameAs: [SITE.linkedin].filter(Boolean),
		description: SITE.tagline
	};
</script>

<Meta
	title="Freeman Endeavors Software Consulting"
	description="Software consulting for SMBs, opinionated about cloud architecture, the data layer, and scoping. Starts with a fixed-price architecture survey."
/>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<` + `script type="application/ld+json">${JSON.stringify(orgJsonLd)}<` + `/script>`}
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-main">
			<p class="hero-eyebrow"><span class="glyph">§</span> A SOFTWARE CONSULTANCY</p>
			<h1>We can guide you through your software endeavors.</h1>
			<p class="lede">
				Apps? Webapps? Distributed systems, mission-critical notifications? Agentic workflows?
				Whether you're trying to build, scale, automate, or modernize, we're here to help.
			</p>
			<br />
			<p class="lede">
				Meet Freeman Endeavors: we help SMBs build, ship, and maintain production systems you can
				depend on.
			</p>
		</div>

		<aside class="hero-marginalia">
			<p class="margin-byline"><em>Our Process</em></p>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 01</span> · DISCOVERY</p>
				<p class="margin-body">
					A free 45-minute consultation. Tell us what your situation is and we'll assess how we can
					help.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 02</span> · PROPOSAL</p>
				<p class="margin-body">
					We propose a plan with clear timelines, budget, and deliverables. Usually this is a
					focused, deep survey of your technical landscape.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 03</span> · SURVEY</p>
				<p class="margin-body">
					We execute the agreed-upon plan and communicate with you throughout the process. After
					it's concluded, we'll discuss the findings.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 04</span> · SUPPORT</p>
				<p class="margin-body">
					We're not about the survey-and-dash life. We want to work with clients that we can support
					for the long haul.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-cta">
				<BookCallCTA size="default" />
			</div>
		</aside>
	</div>
</section>

<section class="container section-block">
	<SectionMarker number="01" label="What we offer" as="h2" />
	<div class="services-grid">
		<a href="/services/#survey" class="service-tile">
			<h3>Architecture Survey</h3>
			<p>
				A two-week, fixed-price read of your system. Where it's brittle, what to fix first, what to
				ignore.
			</p>
			<span class="caption tile-foot">Fixed-price · 2 weeks →</span>
		</a>
		<a href="/services/#fractional" class="service-tile">
			<h3>Fractional Engineering Leadership</h3>
			<p>
				Embedded technical leadership for companies with technical needs without technical teams, or
				for teams between leadership hires. We customize our involvement based on the roles you need
				from us.
			</p>
			<span class="caption tile-foot">Monthly retainer →</span>
		</a>
		<a href="/services/#modernization" class="service-tile">
			<h3>Legacy Modernization</h3>
			<p>
				Restructure and replatform an aging system without breaking the business it runs. This
				includes migrations, integrations, and dependency swaps/updates, as well as other services
				peformed to extend software to match the business needs.
			</p>
			<span class="caption tile-foot">Project-scoped →</span>
		</a>
	</div>
</section>

<section class="container section-block">
	<SectionMarker number="02" label="What kinds of problems do we solve for you?" as="h2" />
	<ol class="entries">
		<li class="entry">
			<header class="entry-head">
				<p class="entry-tag"><span class="glyph">§</span> 02 · A</p>
				<p class="entry-eyebrow">Scaling under load</p>
			</header>
			<div class="entry-body">
				<h3 class="entry-headline">
					Trying to scale up for <em>more users</em>?
				</h3>
				<p class="entry-para">
					We can transition your systems to dynamically scaling architectures to handle traffic
					whenever it comes.
				</p>
			</div>
		</li>
		<li class="entry">
			<header class="entry-head">
				<p class="entry-tag"><span class="glyph">§</span> 02 · B</p>
				<p class="entry-eyebrow">Compliance</p>
			</header>
			<div class="entry-body">
				<h3 class="entry-headline">
					Automating mission-critical processes while <em>maintaining compliance</em>?
				</h3>
				<p class="entry-para">
					Your systems should honor the agreements you make with your clients. We can ensure that.
				</p>
			</div>
		</li>
		<li class="entry">
			<header class="entry-head">
				<p class="entry-tag"><span class="glyph">§</span> 02 · C</p>
				<p class="entry-eyebrow">Distributed systems</p>
			</header>
			<div class="entry-body">
				<h3 class="entry-headline">
					Battling <em>race conditions</em> with your microservices?
				</h3>
				<p class="entry-para">We will run the race and beat them. Ready, set, go! 🏃💨</p>
			</div>
		</li>
	</ol>
</section>

<section class="container section-block">
	<SectionMarker number="03" label="Our expertise" as="h2" />

	<div class="opinions-list">
		<article class="opinion">
			<p class="caption opinion-tag">
				<span class="glyph">§</span> 03.A · Distributed Systems in the Cloud
			</p>
			<p class="opinion-body">
				We've deployed all kinds of distributed systems: Lambda + API Gateway services running at
				scale, mission-critical kafka brokers sustaining thousands of events, and Linux-VM fleets.
				Maintaining software at an enterprise scale while keeping costs down is attainable through
				good decisionmaking and sound development processes.
			</p>
		</article>

		<article class="opinion">
			<p class="caption opinion-tag">
				<span class="glyph">§</span> 03.B · The API Layer
			</p>
			<p class="opinion-body">
				So many technical challenges are much harder than they need to be because of API schemas
				that don't solve their intended problems, either because of design issues or because the
				problem space has shifted since construction. We outline your problem space and then design
				API contracts and associated schemas that fit the requirements. We work with REST, GraphQL,
				GRPC, MCP, Pub/Sub, and whatever else your projects call for.
			</p>
		</article>

		<article class="opinion">
			<p class="caption opinion-tag">
				<span class="glyph">§</span> 03.C · ARCHITECTURE, SCOPING, AND COORDINATION
			</p>
			<p class="opinion-body">
				The hardest part of senior engineering is scoping and estimating. We're equipped to own that
				work for all of our engagements. We work with project management and scoping flows on the
				cutting edge with markdown and Linear, as well as traditional sprint-based planning in Jira
				and Notion.
			</p>
		</article>
	</div>
</section>

<section class="container section-block">
	<div class="closing-grid">
		<div>
			<SectionMarker number="04" label="Take the first step" />
			<h2>If something here sounds like your problem, we'd love to chat.</h2>
		</div>
		<div class="closing-cta">
			<BookCallCTA size="large" />
		</div>
	</div>
</section>

<style>
	.hero {
		padding-top: var(--s-9);
		padding-bottom: var(--s-9);
		background-image: radial-gradient(rgba(26, 26, 24, 0.06) 1px, transparent 1px);
		background-size: 9px 9px;
	}

	:global([data-theme='dark']) .hero {
		background-image: radial-gradient(rgba(240, 235, 226, 0.06) 1px, transparent 1px);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-7);
	}

	.hero-eyebrow {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--muted);
		font-weight: 400;
		margin: 0 0 var(--s-5) 0;
	}

	.hero-eyebrow .glyph {
		color: var(--brick);
		font-weight: 500;
	}

	.hero-main h1 {
		font-size: clamp(2.5rem, 5.8vw, 4.75rem);
		line-height: 1.04;
		letter-spacing: -0.022em;
		margin: 0 0 var(--s-6) 0;
		max-width: 18ch;
		text-wrap: balance;
	}

	.hero-main h1 em {
		font-style: italic;
		color: var(--brick);
		font-weight: 500;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		line-height: 1.5;
		max-width: 38ch;
		margin: 0;
	}

	.hero-marginalia {
		border-top: 1px solid var(--rule);
		padding-top: var(--s-5);
	}

	.margin-byline {
		font-family: var(--font-display);
		font-size: var(--fs-body);
		color: var(--ink-2);
		margin: 0 0 var(--s-4) 0;
	}

	.margin-byline em {
		font-style: italic;
	}

	.margin-rule {
		border: 0;
		border-top: 1px solid var(--rule);
		margin: var(--s-4) 0;
	}

	.margin-item {
		margin: 0;
	}

	.margin-label {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--ink-2);
		font-weight: 500;
		margin: 0 0 var(--s-2) 0;
	}

	.margin-label .num {
		color: var(--brick);
	}

	.margin-body {
		font-size: var(--fs-body-sm);
		color: var(--muted);
		line-height: 1.5;
		margin: 0;
	}

	.margin-cta {
		padding-top: var(--s-3);
	}

	.section-block {
		padding-top: var(--s-9);
		padding-bottom: var(--s-9);
		border-top: 1px solid var(--rule);
	}

	.services-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-2);
		margin-top: var(--s-5);
	}

	.service-tile {
		display: block;
		padding: var(--s-6);
		border: 1px solid var(--rule);
		background: var(--surface);
		text-decoration: none;
		color: var(--ink);
		transition:
			border-color var(--t-state) var(--ease),
			transform var(--t-micro) var(--ease);
	}

	.service-tile:hover {
		border-color: var(--rule-strong);
		transform: translateY(-2px);
	}

	.service-tile h3 {
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 500;
		margin: 0 0 var(--s-3) 0;
		letter-spacing: -0.01em;
	}

	.service-tile p {
		margin: 0 0 var(--s-4) 0;
		color: var(--ink-2);
		font-size: var(--fs-body);
	}

	.tile-foot {
		color: var(--forest);
	}

	.entries {
		list-style: none;
		margin: var(--s-7) 0 0 0;
		padding: 0;
		border-top: 1px solid var(--rule-strong);
	}

	.entry {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-4);
		padding: var(--s-7) 0;
		border-bottom: 1px solid var(--rule);
	}

	.entry-head {
		display: flex;
		flex-direction: column;
		gap: var(--s-2);
	}

	.entry-tag {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--muted);
		font-weight: 500;
		margin: 0;
	}

	.entry-tag .glyph {
		color: var(--brick);
	}

	.entry-eyebrow {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--ink-2);
		margin: 0;
	}

	.entry-headline {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(1.875rem, 3.6vw, 2.625rem);
		line-height: 1.08;
		letter-spacing: -0.015em;
		margin: 0 0 var(--s-4) 0;
		color: var(--ink);
		text-wrap: balance;
		max-width: 22ch;
	}

	.entry-headline em {
		font-style: italic;
		color: var(--brick);
		font-weight: 500;
	}

	.entry-para {
		font-family: var(--font-body);
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		line-height: 1.55;
		margin: 0;
		max-width: 52ch;
	}

	.opinions-lede {
		font-family: var(--font-display);
		font-size: 1.375rem;
		line-height: 1.35;
		color: var(--ink-2);
		max-width: 52ch;
		margin: var(--s-3) 0 var(--s-7) 0;
	}

	.opinions-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;
	}

	.opinion {
		padding: var(--s-6) 0;
		border-top: 1px solid var(--rule);
	}

	.opinion:first-child {
		border-top: 1px solid var(--rule-strong);
	}

	.opinion-tag {
		margin: 0 0 var(--s-3) 0;
	}

	.opinion-tag .glyph {
		color: var(--brick);
	}

	.opinion-body {
		font-size: var(--fs-body-lg);
		color: var(--ink);
		max-width: 60ch;
		margin: 0 0 var(--s-3) 0;
		line-height: 1.55;
	}

	.how-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-6);
		margin-top: var(--s-5);
	}

	.how-body {
		max-width: 60ch;
		font-size: var(--fs-body-lg);
	}

	.how-lede {
		font-family: var(--font-display);
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.3;
		color: var(--ink);
	}

	.closing-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-5);
	}

	.closing-grid h2 {
		max-width: 24ch;
		font-size: var(--fs-display-md);
	}

	.closing-body {
		max-width: 42ch;
		color: var(--ink-2);
		font-size: var(--fs-body-lg);
	}

	.closing-cta {
		padding-top: var(--s-3);
	}

	@media (min-width: 720px) {
		.hero-grid {
			grid-template-columns: 2fr 1fr;
			gap: var(--s-8);
			align-items: start;
		}

		.hero-marginalia {
			border-top: 0;
			padding-top: 0;
			border-left: 1px solid var(--rule);
			padding-left: var(--s-6);
		}

		.services-grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.closing-grid {
			grid-template-columns: 2fr 1fr;
			align-items: end;
			gap: var(--s-7);
		}

		.closing-cta {
			text-align: right;
		}
	}

	@media (min-width: 860px) {
		.entry {
			grid-template-columns: minmax(180px, 14rem) 1fr;
			gap: var(--s-7);
			padding: var(--s-8) 0;
		}

		.entry-head {
			padding-top: var(--s-2);
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding-top: var(--s-10);
			padding-bottom: var(--s-10);
		}
	}
</style>
