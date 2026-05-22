<script lang="ts">
	import { CTA } from '$lib/config';
</script>

<svelte:head>
	<title>Shotgun A · Letterpress Broadside</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="hero">
	<div class="hero-inner">
		<p class="marker"><span class="glyph">§</span> 00 · MANIFESTO</p>

		<hr class="rule rule-top" />

		<h1 class="headline">
			We embed, we ship,<br />
			and we tell you the <em>truth</em><br />
			about your software.
		</h1>

		<hr class="rule rule-bottom" />

		<p class="lede">
			A small consultancy that helps SMBs unstick the systems they already depend on. Fixed-price
			architecture surveys. Fractional engineering. Modernization done slowly, on purpose.
		</p>

		<div class="cta-row">
			<a class="cta-link" href={CTA.href}>
				START: A 45-MIN CALL <span aria-hidden="true">→</span>
			</a>
		</div>
		<hr class="rule rule-cta" />
		<p class="cta-foot">Free · No prep required</p>
	</div>

	<a class="back" href="/dev/shotgun/">← all variants</a>
</section>

<style>
	.hero {
		position: relative;
		padding: var(--s-9) var(--gutter) var(--s-10);
		min-height: 80vh;
	}

	.hero-inner {
		max-width: 64ch;
	}

	.marker {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--muted);
		margin: 0 0 var(--s-5) 0;
	}

	.marker .glyph {
		color: var(--brick);
		font-weight: 500;
	}

	.rule {
		border: 0;
		border-top: 1px solid var(--rule);
		margin: 0;
	}

	.rule-top {
		margin-bottom: var(--s-5);
	}

	.rule-bottom {
		margin-top: var(--s-5);
		margin-bottom: var(--s-7);
	}

	.headline {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(3rem, 8.5vw, 6.5rem);
		line-height: 1;
		letter-spacing: -0.028em;
		color: var(--ink);
		font-variation-settings: 'opsz' 144;
		margin: 0;
		text-wrap: balance;
		hanging-punctuation: first allow-end last;
	}

	.headline em {
		font-style: italic;
		color: var(--forest);
		font-weight: 500;
	}

	.lede {
		font-family: var(--font-body);
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		line-height: 1.5;
		max-width: 42ch;
		margin: 0 0 var(--s-7) 0;
	}

	.cta-row {
		margin: 0;
	}

	.cta-link {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: var(--fs-body-sm);
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-weight: 500;
		color: var(--brick);
		text-decoration: none;
		padding: var(--s-3) 0 var(--s-2) 0;
		transition: color var(--t-state) var(--ease);
	}

	.cta-link:hover {
		color: var(--brick-2);
	}

	.cta-link span {
		margin-left: 0.4em;
	}

	.rule-cta {
		border-color: var(--brick);
		max-width: 26ch;
	}

	.cta-foot {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--muted);
		margin: var(--s-3) 0 0 0;
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

	@media (min-width: 1024px) {
		.hero {
			padding-top: var(--s-10);
		}
	}
</style>
