<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import SectionMarker from '$lib/components/SectionMarker.svelte';
	import StatBlock from '$lib/components/StatBlock.svelte';
	import { SITE, AUDIT_PRICE_USD } from '$lib/config';

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
	description="Freeman Endeavors is a small software consultancy. We embed with SMB teams to ship the system they actually need — starting with a fixed-price architecture audit."
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(orgJsonLd)}</script>`}
</svelte:head>

<section class="hero container">
	<div class="hero-grid">
		<div class="hero-headline">
			<p class="eyebrow caption">A software consultancy</p>
			<h1>
				We embed, we ship,<br />
				and we tell you the truth<br />
				about your software.
			</h1>
			<p class="lede">
				Freeman Endeavors is a small consultancy that helps SMBs unstick the systems they already
				depend on. We start with a fixed-price architecture audit and grow from there — fractional
				leadership, modernization work, or nothing at all if nothing is what's right.
			</p>
		</div>

		<aside class="hero-intake">
			<p class="caption">Start here</p>
			<h2 class="intake-heading">
				A 45-minute architecture call.<br />
				No deck. No pitch.
			</h2>
			<p class="intake-body">
				Tell us what's broken. We'll tell you, plainly, whether we're the right team for it — and
				what an honest next step looks like.
			</p>
			<BookCallCTA size="large" />
			<p class="intake-foot caption">Free · No prep required</p>
		</aside>
	</div>
</section>

<section class="container section-block">
	<SectionMarker number="01" label="What we do" as="h2" />
	<div class="services-grid">
		<a href="/services/#audit" class="service-tile">
			<h3>Architecture Audit</h3>
			<p>
				A two-week, fixed-price read of your system. Where it's brittle, what to fix first, what to
				ignore. Fee published below.
			</p>
			<span class="caption tile-foot">{priceFmt.format(AUDIT_PRICE_USD)} · {`~`}2 weeks →</span>
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
	<SectionMarker number="02" label="What you can expect" as="h2" />
	<div class="band">
		<StatBlock
			contained
			stats={[
				{ value: '45 min', label: 'Time from first call to a usable read on your system' },
				{ value: '~2 weeks', label: 'Calendar time for a fixed-price audit' },
				{ value: '1', label: 'Principal you actually talk to, start to finish' }
			]}
		/>
	</div>
</section>

<section class="container section-block">
	<SectionMarker number="03" label="How we work" as="h2" />
	<div class="how-grid">
		<div class="how-body">
			<p class="how-lede">
				You talk directly to the engineer doing the work. The principal is on every call, in
				every PR, and answerable for every deliverable. We're a small, focused team of senior
				consultants — collaborators come in by name when their craft is what the job calls for.
				Nothing gets handed to a junior you've never met.
			</p>
			<p>
				The audit comes back as a written document, not a slide deck. The fractional engagements
				are billed monthly, scoped weekly, and ended cleanly when the team is past the hard part.
				Modernization runs as a project — fixed milestones, real handoffs, code that your next
				engineer can read.
			</p>
			<p>
				<a href="/approach/">Read more about how we work →</a>
			</p>
		</div>
	</div>
</section>

<section class="container section-block closing">
	<div class="closing-grid">
		<div>
			<SectionMarker number="04" label="Next step" />
			<h2>If something here sounds like your problem, the call is free.</h2>
			<p class="closing-body">
				Forty-five minutes. We listen, we ask, we tell you what we'd do.
			</p>
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
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-7);
	}

	.eyebrow {
		margin: 0 0 var(--s-4) 0;
	}

	.hero-headline h1 {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		line-height: 1.04;
		letter-spacing: -0.02em;
		margin: 0 0 var(--s-5) 0;
		max-width: 18ch;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 38ch;
		margin: 0;
	}

	.hero-intake {
		border: 1px solid var(--rule);
		padding: var(--s-6);
		background: var(--surface);
		display: flex;
		flex-direction: column;
		gap: var(--s-4);
	}

	.intake-heading {
		font-size: 1.5rem;
		line-height: 1.18;
		margin: 0;
		font-family: var(--font-display);
		font-weight: 500;
		letter-spacing: -0.01em;
	}

	.intake-body {
		margin: 0;
		color: var(--ink-2);
		font-size: var(--fs-body);
	}

	.intake-foot {
		margin: 0;
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
		color: var(--brick);
	}

	.band {
		margin-top: var(--s-5);
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
			grid-template-columns: 7fr 5fr;
			gap: var(--s-7);
			align-items: end;
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

	@media (min-width: 1024px) {
		.hero {
			padding-top: var(--s-10);
			padding-bottom: var(--s-10);
		}
	}
</style>
