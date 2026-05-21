<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import SectionMarker from '$lib/components/SectionMarker.svelte';
	import { SITE, SURVEY_PRICE_USD } from '$lib/config';

	const priceFmt = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	});

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
	title="Software consulting that ships"
	description="Software consulting for SMBs, opinionated about cloud architecture, the data layer, and scoping. Starts with a fixed-price architecture survey."
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}</script>`}
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-main">
			<p class="hero-eyebrow"><span class="glyph">§</span> A SOFTWARE CONSULTANCY</p>
			<h1>
				We can guide you through your software endeavors.
			</h1>
			<p class="lede">
				Meet Freeman Endeavors: we help SMBs build, ship, and maintain distributed cloud systems you can
				depend on.
			</p>
			<br />
			<p class="lede">
				Whether you're trying to build, scale, automate, or modernize, we're here to help.
			</p>
		</div>

		<aside class="hero-marginalia">
			<p class="margin-byline"><em>Our Process</em></p>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 01</span> · DISCOVERY</p>
				<p class="margin-body">A free 45-minute discovery call focused on your architectural
				requirements. Tell us what your situation is and we'll assess how we can help.</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 02</span> · PROPOSAL</p>
				<p class="margin-body">
					We propose a plan with clear timelines, budget, and deliverables.
					Usually this is a focused, deep survey of your technical landscape.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 03</span> · SURVEY</p>
				<p class="margin-body">
					We execute the agreed-upon plan and communicate with you
					throughout the process. After it's concluded, we'll discuss the findings.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 04</span> · SUPPORT</p>
				<p class="margin-body">
					We're not about the survey-and-dash life. We want to work with clients that
					we can support for the long haul.
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
			<span class="caption tile-foot">Fixed-price · {`~`}2-4 weeks →</span>
		</a>
		<a href="/services/#fractional" class="service-tile">
			<h3>Fractional Engineering Leadership</h3>
			<p>
				Embedded technical leadership for teams between hires. We run the engineering function for
				one to four days a week until your full-time hire is up.
			</p>
			<span class="caption tile-foot">Monthly retainer →</span>
		</a>
		<a href="/services/#modernization" class="service-tile">
			<h3>Legacy Modernization</h3>
			<p>
				Replatform an aging system without breaking the business it runs. Migrations, integrations,
				and the slow careful work of trustworthy systems.
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
					Your systems should honor the agreements you make with your clients. We can ensure
					that.
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
				<span class="glyph">§</span> 03.A · CLOUD, SERVERLESS, AND VM FLEETS
			</p>
			<p class="opinion-body">
				We've shipped all three: Lambda + API Gateway services running at scale, Kubernetes
				footprints sized for a SaaS doing real revenue, and Linux-VM fleets where the right
				answer was not to abstract the hardware. Maintaining software at an enterprise scale
				while keeping costs down is attainable through good decisionmaking and sound
				development processes.
			</p>
			<a href="/case-studies/vr-edtech-second-principal/" class="opinion-link">
				See: a Kafka migration on AWS MSK →
			</a>
		</article>

		<article class="opinion">
			<p class="caption opinion-tag">
				<span class="glyph">§</span> 03.B · THE DATA LAYER
			</p>
			<p class="opinion-body">
				Postgres, GraphQL, and the joints between them. Most SMB systems are fine until year
				three, when the schema decisions made at year one start charging interest — joins that
				should have been denormalized, resolvers that hide an N+1, an index that everyone
				forgot to add. We read your schema and your slowest queries before we read your
				application code. If the data layer is wrong, nothing on top of it is going to hold up.
			</p>
			<a href="/case-studies/workforce-saas-founding-engineer/" class="opinion-link">
				See: a multi-tenant data model built to survive a rewrite →
			</a>
		</article>

		<article class="opinion">
			<p class="caption opinion-tag">
				<span class="glyph">§</span> 03.C · ARCHITECTURE, SCOPING, AND COORDINATION
			</p>
			<p class="opinion-body">
				The hardest part of senior engineering is not writing code. It's deciding what to
				build, in what order, with what team — and being honest about which parts of the work
				you don't yet know enough to estimate. We've owned that work for our own engagements,
				for client teams between leadership hires, and for the engineers who pick up the code
				after we leave.
			</p>
			<a href="/case-studies/higher-ed-donation-page/" class="opinion-link">
				See: six weeks to wrap an immovable CRM →
			</a>
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

	.opinion-link {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--forest);
		text-decoration: none;
	}

	.opinion-link:hover {
		text-decoration: underline;
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
