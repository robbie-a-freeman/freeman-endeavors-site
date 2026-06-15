<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';

	let { title, description, published, og_image, dek, children } = $props<{
		title: string;
		description: string;
		published: string;
		og_image?: string;
		dek?: string;
		children: () => unknown;
	}>();

	const dateFmt = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<Meta {title} {description} ogImage={og_image} ogType="article" />

<article class="essay">
	<header class="container essay-header">
		<p class="caption">Essay · {dateFmt.format(new Date(published))}</p>
		<h1>{title}</h1>
		{#if dek}
			<p class="dek">{dek}</p>
		{/if}
	</header>

	<div class="container body-wrap">
		<div class="body prose">
			{@render children()}
		</div>
	</div>

	<footer class="container essay-footer">
		<div class="footer-grid">
			<div>
				<h2>Want to talk about something the piece raised?</h2>
				<p>Forty-five minutes, free. We listen, we ask, we tell you what we'd do.</p>
			</div>
			<div><BookCallCTA size="large" /></div>
		</div>
	</footer>
</article>

<style>
	.essay-header {
		padding-top: var(--s-9);
		padding-bottom: var(--s-6);
	}

	.essay-header h1 {
		font-size: clamp(2rem, 4.5vw, 3.5rem);
		line-height: 1.08;
		letter-spacing: -0.018em;
		margin: var(--s-3) 0 var(--s-4) 0;
		max-width: 22ch;
	}

	.dek {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 60ch;
		margin: 0;
	}

	.body-wrap {
		padding-bottom: var(--s-7);
	}

	.body {
		max-width: 38rem;
		margin: 0 auto;
	}

	.body :global(h2) {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 500;
		margin-top: var(--s-7);
		margin-bottom: var(--s-4);
		letter-spacing: -0.012em;
	}

	.body :global(h3) {
		font-family: var(--font-body);
		font-size: 1.25rem;
		font-weight: 500;
		margin-top: var(--s-6);
		margin-bottom: var(--s-3);
	}

	.essay-footer {
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
		max-width: 26ch;
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
