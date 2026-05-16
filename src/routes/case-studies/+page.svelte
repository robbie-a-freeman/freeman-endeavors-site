<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import EditorialList from '$lib/components/EditorialList.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import { loadCaseStudies } from '$lib/content/loaders';

	const modules = import.meta.glob<{ metadata?: Record<string, unknown> }>(
		'./*/+page.svelte.md',
		{ eager: true }
	);
	const entries = loadCaseStudies(modules);
</script>

<Meta
	title="Case studies"
	description="Anonymized engagements: modernization, fractional leadership, audit-to-roadmap. Real systems, real outcomes, no marketing varnish."
/>

<header class="page-header container">
	<p class="caption">Selected engagements</p>
	<h1>Three engagements, written honestly.</h1>
	<p class="lede">
		Anonymized to protect clients we still work with. The systems, the constraints, and the
		outcomes are real. The metrics come from the clients themselves, not from us.
	</p>
</header>

<section class="container list-wrap">
	<EditorialList
		items={entries}
		baseHref="/case-studies/"
		emptyMessage="Case studies are being prepared. Check back shortly."
	/>
</section>

<section class="container closing">
	<div class="closing-grid">
		<div>
			<h2>Want to talk about a system like one of these?</h2>
			<p>
				The architecture call is free. Forty-five minutes, no deck, no follow-up unless you ask
				for one.
			</p>
		</div>
		<div><BookCallCTA size="large" /></div>
	</div>
</section>

<style>
	.page-header {
		padding-top: var(--s-9);
		padding-bottom: var(--s-7);
	}

	.page-header h1 {
		margin: var(--s-3) 0 var(--s-5) 0;
		max-width: 22ch;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 56ch;
	}

	.list-wrap {
		padding-bottom: var(--s-9);
	}

	.closing {
		border-top: 1px solid var(--rule);
		padding-top: var(--s-8);
		padding-bottom: var(--s-9);
	}

	.closing-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-5);
	}

	.closing-grid h2 {
		font-size: var(--fs-display-md);
		max-width: 22ch;
	}

	.closing-grid p {
		color: var(--ink-2);
		max-width: 42ch;
		font-size: var(--fs-body-lg);
	}

	@media (min-width: 720px) {
		.closing-grid {
			grid-template-columns: 2fr 1fr;
			align-items: end;
			gap: var(--s-7);
		}
	}
</style>
