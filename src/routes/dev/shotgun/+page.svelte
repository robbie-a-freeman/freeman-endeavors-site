<script lang="ts">
	const variants = [
		{
			slug: 'a',
			name: 'Letterpress Broadside',
			tagline: 'Typography is the entire design. Huge Fraunces, hairline rules, mono CTA.'
		},
		{
			slug: 'b',
			name: 'Editorial Marginalia',
			tagline: 'Magazine grid with right-side marginalia. Brick "truth", numbered margin items.'
		},
		{
			slug: 'c',
			name: 'Quiet Authority',
			tagline: 'Restraint as design. Small headline, one giant Fraunces italic anchor word.'
		}
	];
</script>

<svelte:head>
	<title>/design-shotgun — Homepage hero variants</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="dev-index">
	<p class="dev-marker"><span class="glyph">§</span> DEV · /design-shotgun</p>
	<h1>Homepage hero — 3 directions</h1>
	<p class="lede">
		Each link opens a working Svelte page using the real <code>tokens.css</code>, Fraunces, and
		Instrument Sans. Compare them at the same viewport width to keep the fidelity honest.
	</p>

	<ul class="variant-list">
		{#each variants as v (v.slug)}
			<li>
				<a href="/dev/shotgun/{v.slug}/">
					<span class="vletter">{v.slug.toUpperCase()}</span>
					<span class="vbody">
						<span class="vname">{v.name}</span>
						<span class="vtag">{v.tagline}</span>
					</span>
					<span class="varrow" aria-hidden="true">→</span>
				</a>
			</li>
		{/each}
	</ul>

	<p class="footnote">
		These pages live under <code>src/routes/dev/shotgun/</code> with
		<code>prerender = false</code>, so they don't ship to production. Delete the
		<code>dev/</code> directory when you're done.
	</p>
</section>

<style>
	.dev-index {
		max-width: 60ch;
		margin: 0 auto;
		padding: var(--s-9) var(--gutter);
	}

	.dev-marker {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--muted);
		margin: 0 0 var(--s-5) 0;
	}

	.dev-marker .glyph {
		color: var(--brick);
	}

	h1 {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: var(--fs-display-md);
		line-height: 1.1;
		letter-spacing: -0.015em;
		margin: 0 0 var(--s-5) 0;
	}

	.lede {
		font-family: var(--font-body);
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		line-height: 1.55;
		margin: 0 0 var(--s-7) 0;
	}

	.lede code {
		font-family: var(--font-mono);
		font-size: 0.9em;
		color: var(--brick);
	}

	.variant-list {
		list-style: none;
		padding: 0;
		margin: 0;
		border-top: 1px solid var(--rule);
	}

	.variant-list li {
		border-bottom: 1px solid var(--rule);
	}

	.variant-list a {
		display: grid;
		grid-template-columns: 3rem 1fr auto;
		align-items: center;
		gap: var(--s-5);
		padding: var(--s-5) 0;
		text-decoration: none;
		color: var(--ink);
		transition:
			color var(--t-state) var(--ease),
			padding var(--t-state) var(--ease);
	}

	.variant-list a:hover {
		color: var(--brick);
		padding-left: var(--s-3);
	}

	.vletter {
		font-family: var(--font-display);
		font-weight: 500;
		font-style: italic;
		font-size: 2.25rem;
		line-height: 1;
		color: var(--brick);
	}

	.vbody {
		display: flex;
		flex-direction: column;
		gap: var(--s-2);
	}

	.vname {
		font-family: var(--font-display);
		font-size: 1.375rem;
		font-weight: 500;
		letter-spacing: -0.01em;
	}

	.vtag {
		font-family: var(--font-body);
		font-size: var(--fs-body-sm);
		color: var(--muted);
		line-height: 1.45;
	}

	.varrow {
		font-family: var(--font-mono);
		color: var(--muted);
	}

	.footnote {
		margin: var(--s-7) 0 0;
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		color: var(--muted);
		line-height: 1.5;
	}

	.footnote code {
		color: var(--brick);
	}
</style>
