<script lang="ts">
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
</script>

<svelte:head>
	<title>Shotgun B · Editorial Marginalia</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="hero">
	<div class="grid">
		<div class="main">
			<p class="byline"><span class="glyph">§</span> A SOFTWARE CONSULTANCY</p>
			<h1 class="headline">
				We embed, we ship,<br />
				and we tell you the <em>truth</em><br />
				about your software.
			</h1>
			<p class="lede">
				Freeman Endeavors is a small consultancy that helps SMBs unstick the systems they already
				depend on. We start with a fixed-price architecture survey and grow from there — fractional
				leadership, modernization work, or nothing at all if nothing is what's right.
			</p>
		</div>

		<aside class="marginalia">
			<p class="margin-byline"><em>— Notes from the principal</em></p>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 01</span> INTAKE</p>
				<p class="margin-body">A 45-minute consultation. No deck, no pitch. Free.</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 02</span> PROMISE</p>
				<p class="margin-body">
					A plain-spoken read on whether we're the right team. We say so if we're not.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-item">
				<p class="margin-label"><span class="num">§ 03</span> PROOF</p>
				<p class="margin-body">
					Three anonymized engagements in our case studies. Real ROI, real teeth.
				</p>
			</div>

			<hr class="margin-rule" />

			<div class="margin-cta">
				<BookCallCTA size="default" />
			</div>
		</aside>
	</div>

	<a class="back" href="/dev/shotgun/">← all variants</a>
</section>

<style>
	.hero {
		position: relative;
		padding: var(--s-9) var(--gutter) var(--s-10);
		background-color: var(--surface);
		background-image:
			radial-gradient(rgba(26, 26, 24, 0.04) 1px, transparent 1px),
			radial-gradient(rgba(26, 26, 24, 0.03) 1px, transparent 1px);
		background-size:
			7px 7px,
			11px 11px;
		background-position:
			0 0,
			3px 3px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-7);
	}

	.byline {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--muted);
		margin: 0 0 var(--s-5) 0;
		font-weight: 400;
	}

	.byline .glyph {
		color: var(--brick);
		font-weight: 500;
	}

	.headline {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(2.5rem, 5.8vw, 4.75rem);
		line-height: 1.04;
		letter-spacing: -0.022em;
		color: var(--ink);
		margin: 0;
		text-wrap: balance;
	}

	.headline em {
		font-style: italic;
		color: var(--brick);
		font-weight: 500;
	}

	.lede {
		font-family: var(--font-body);
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		line-height: 1.5;
		max-width: 38ch;
		margin: var(--s-6) 0 0;
	}

	.marginalia {
		border-left: 1px solid var(--rule);
		padding-left: var(--s-6);
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
		margin: 0 0 var(--s-2) 0;
		font-weight: 500;
	}

	.margin-label .num {
		color: var(--brick);
		margin-right: var(--s-2);
	}

	.margin-body {
		font-family: var(--font-body);
		font-size: var(--fs-body-sm);
		color: var(--muted);
		line-height: 1.5;
		margin: 0;
	}

	.margin-cta {
		padding-top: var(--s-3);
	}

	.back {
		position: absolute;
		top: var(--s-4);
		right: var(--gutter);
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--muted);
		text-decoration: none;
	}

	.back:hover {
		color: var(--ink);
	}

	@media (min-width: 960px) {
		.grid {
			grid-template-columns: 2fr 1fr;
			gap: var(--s-8);
			align-items: start;
		}
	}
</style>
