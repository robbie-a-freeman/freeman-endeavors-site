<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import CaseStudyMeta from '$lib/components/CaseStudyMeta.svelte';
	import StatBlock from '$lib/components/StatBlock.svelte';

	// Props are the frontmatter fields from the .svelte.md file.
	// mdsvex passes them all in as Svelte props.
	let {
		title,
		description,
		published,
		og_image,
		client_anonymized,
		industry,
		stack,
		engagement,
		duration,
		lenses,
		roi,
		children
	} = $props<{
		title: string;
		description: string;
		published: string;
		og_image?: string;
		client_anonymized?: string;
		industry?: string;
		stack?: string[];
		engagement?: string;
		duration?: string;
		lenses?: string[];
		roi?: Array<{ value: string; label: string }>;
		children: () => unknown;
	}>();

	const dateFmt = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<Meta {title} {description} ogImage={og_image} ogType="article" />

<article class="case-study">
	<header class="container case-header">
		<p class="caption">Case study · {dateFmt.format(new Date(published))}</p>
		<h1>{title}</h1>
		<p class="dek">{description}</p>
		<CaseStudyMeta
			client={client_anonymized ?? 'Anonymized'}
			{industry}
			{stack}
			{engagement}
			{duration}
			{lenses}
		/>
	</header>

	<div class="container body-wrap">
		<div class="body prose">
			{@render children()}
		</div>
	</div>

	{#if roi && roi.length > 0}
		<div class="container">
			<div class="outcome-marker">
				<span class="glyph">§</span> 04 · <span class="lbl">Outcome</span>
			</div>
			<StatBlock stats={roi} contained />
		</div>
	{/if}

	<footer class="container case-footer">
		<div class="footer-grid">
			<div>
				<h2>A similar problem in your system?</h2>
				<p>The architecture call is free. We listen, we ask, we tell you what we'd do.</p>
			</div>
			<div><BookCallCTA size="large" /></div>
		</div>
	</footer>
</article>

<style>
	.case-header {
		padding-top: var(--s-9);
		padding-bottom: var(--s-4);
	}

	.case-header h1 {
		font-size: clamp(2rem, 4.5vw, 3.25rem);
		line-height: 1.08;
		letter-spacing: -0.018em;
		margin: var(--s-3) 0 var(--s-4) 0;
		max-width: 24ch;
	}

	.case-header .dek {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 56ch;
		margin: 0 0 var(--s-5) 0;
	}

	.body-wrap {
		padding-bottom: var(--s-7);
	}

	.body {
		max-width: 38rem;
		margin: 0 auto;
	}

	.body :global(h2) {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--muted);
		font-weight: 400;
		margin-top: var(--s-7);
		margin-bottom: var(--s-3);
	}

	.body :global(h2)::before {
		content: '§ ';
		color: var(--brick);
	}

	.body :global(h3) {
		font-family: var(--font-display);
		font-size: 1.625rem;
		font-weight: 500;
		margin-top: var(--s-3);
		margin-bottom: var(--s-4);
		letter-spacing: -0.01em;
	}

	.outcome-marker {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--muted);
		font-weight: 400;
		margin-bottom: var(--s-3);
	}

	.outcome-marker .glyph {
		color: var(--brick);
	}

	.outcome-marker .lbl {
		color: var(--ink-2);
	}

	.case-footer {
		border-top: 1px solid var(--rule);
		padding-top: var(--s-8);
		padding-bottom: var(--s-9);
		margin-top: var(--s-7);
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-5);
	}

	.footer-grid h2 {
		max-width: 22ch;
		font-size: var(--fs-display-md);
	}

	.footer-grid p {
		color: var(--ink-2);
		max-width: 42ch;
		font-size: var(--fs-body-lg);
	}

	@media (min-width: 720px) {
		.footer-grid {
			grid-template-columns: 2fr 1fr;
			align-items: end;
			gap: var(--s-7);
		}
	}
</style>
