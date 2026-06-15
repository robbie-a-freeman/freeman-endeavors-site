<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import EditorialList from '$lib/components/EditorialList.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
	import { loadEssays } from '$lib/content/loaders';

	const modules = import.meta.glob<{ metadata?: Record<string, unknown> }>('./*/+page.svelte.md', {
		eager: true
	});
	const entries = loadEssays(modules);
</script>

<Meta
	title="Writing"
	description="Essays on how SMBs buy, build, and maintain software. Long-form, opinionated, no marketing varnish."
/>

<header class="page-header container">
	<p class="caption">Writing</p>
	<h1>How we think, written down.</h1>
	<p class="lede">
		Long-form pieces on the things we keep meeting on every engagement — what an honest software
		diagnosis looks like, when the rebuild is the wrong answer, when fractional leadership pays off
		and when it doesn't.
	</p>
</header>

<section class="container list-wrap">
	<EditorialList
		items={entries}
		baseHref="/writing/"
		emptyMessage="The first essay is on the way."
	/>
</section>

<section class="container closing">
	<div class="closing-grid">
		<div>
			<h2>Want to talk about something a piece raised?</h2>
			<p>The consultation is free. Forty-five minutes, no deck.</p>
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
		max-width: 26ch;
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
