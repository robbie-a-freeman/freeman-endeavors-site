<script lang="ts">
	import { CTA } from '$lib/config';
</script>

<svelte:head>
	<title>Shotgun C · Quiet Authority</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<hr class="frame-top" />

<section class="hero">
	<div class="hero-inner">
		<p class="marker"><span class="glyph">§</span> 00</p>

		<h1 class="headline">
			We embed, we ship, and we tell you the
			<span class="anchor">truth</span>
			about your software.
		</h1>

		<p class="lede">
			A small software consultancy. We start with a fixed-price architecture survey and
			grow from there. We say so when we're not the right team.
		</p>

		<a class="cta-link" href={CTA.href}>
			Book a 45-minute call <span aria-hidden="true">→</span>
		</a>
	</div>

	<a class="back" href="/dev/shotgun/">← all variants</a>
</section>

<hr class="frame-bottom" />

<style>
	.frame-top,
	.frame-bottom {
		border: 0;
		border-top: 1px solid var(--rule);
		margin: 0;
	}

	.hero {
		position: relative;
		padding: var(--s-10) var(--gutter);
		min-height: 80vh;
		display: flex;
		align-items: center;
	}

	.hero-inner {
		max-width: 60ch;
		margin: 0 auto;
		width: 100%;
	}

	.marker {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--muted);
		margin: 0 0 var(--s-6) 0;
	}

	.marker .glyph {
		color: var(--brick);
		font-weight: 500;
	}

	.headline {
		font-family: var(--font-body);
		font-weight: 600;
		font-size: 1.75rem;
		line-height: 1.4;
		letter-spacing: -0.005em;
		color: var(--ink);
		margin: 0 0 var(--s-7) 0;
		max-width: 32ch;
	}

	.anchor {
		display: block;
		font-family: var(--font-display);
		font-weight: 400;
		font-style: italic;
		font-size: clamp(5.5rem, 16vw, 11rem);
		line-height: 0.88;
		color: var(--forest);
		letter-spacing: -0.045em;
		font-variation-settings: 'opsz' 144;
		margin: var(--s-3) 0 var(--s-2) -0.06em;
	}

	.lede {
		font-family: var(--font-body);
		font-size: var(--fs-body-sm);
		color: var(--muted);
		line-height: 1.55;
		max-width: 50ch;
		margin: 0 0 var(--s-6) 0;
	}

	.cta-link {
		display: inline-block;
		font-family: var(--font-body);
		font-size: var(--fs-body);
		font-weight: 500;
		color: var(--forest);
		text-decoration: none;
		transition: color var(--t-state) var(--ease);
	}

	.cta-link:hover {
		color: var(--forest-2);
	}

	.cta-link span {
		margin-left: 0.3em;
		display: inline-block;
		transition: transform var(--t-state) var(--ease);
	}

	.cta-link:hover span {
		transform: translateX(3px);
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
</style>
