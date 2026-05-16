<script lang="ts">
	import { page } from '$app/stores';
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';
</script>

<Meta title="Page not found" description="The page you were looking for doesn't exist on this site." />

<section class="container error">
	<p class="caption">{$page.status} · Missing page</p>
	<h1>We don't have that page.</h1>
	<p class="lede">
		Either we deleted it, you typed it from memory, or you followed a link that hasn't been updated
		yet. Sorry about that.
	</p>

	<ul class="links">
		<li><a href="/services/">Services</a> — what we do and what it costs</li>
		<li><a href="/case-studies/">Case studies</a> — three engagements written honestly</li>
		<li><a href="/writing/">Writing</a> — how we think, written down</li>
		<li><a href="/approach/">Approach</a> — values, methodology, the team</li>
	</ul>

	<div class="cta-wrap">
		<BookCallCTA size="large" />
	</div>
</section>

<style>
	.error {
		padding-top: var(--s-9);
		padding-bottom: var(--s-10);
		max-width: 38rem;
	}

	.error h1 {
		margin: var(--s-3) 0 var(--s-5);
		max-width: 16ch;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		margin-bottom: var(--s-7);
	}

	.links {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--s-7);
		border-top: 1px solid var(--rule);
	}

	.links li {
		padding: var(--s-4) 0;
		border-bottom: 1px solid var(--rule);
		color: var(--ink-2);
	}

	.links li a {
		font-family: var(--font-display);
		font-size: 1.25rem;
		color: var(--ink);
		margin-right: var(--s-3);
		text-decoration: none;
		border-bottom: 1px solid var(--brick);
	}

	.links li a:hover {
		color: var(--brick);
	}

	.cta-wrap {
		display: flex;
		justify-content: flex-start;
	}
</style>
