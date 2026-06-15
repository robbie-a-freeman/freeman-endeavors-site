<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE } from '$lib/config';

	let { children } = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;

		// Legacy hash-anchor migration: visitors on /#expertise or /#contact
		// get rewritten to canonical URLs without a reload.
		const hash = window.location.hash;
		if (hash === '#expertise') {
			history.replaceState(null, '', '/services/');
			window.location.assign('/services/');
		} else if (hash === '#contact') {
			history.replaceState(null, '', '/contact/');
			window.location.assign('/contact/');
		}
	});
</script>

<svelte:head>
	<!--
		Plausible (T19). Domain configured in src/lib/config.ts.
		Custom event `architecture_call_booked` fires from /contact/ on
		Cal.com's bookingSuccessful callback.
	-->
	<script
		defer
		data-domain={SITE.domain}
		src="https://plausible.io/js/script.tagged-events.js"
	></script>
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<div class="layout" class:loaded={mounted}>
	<Header />
	<main id="main">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.skip-link {
		position: absolute;
		left: -9999px;
		top: 0;
		background: var(--ink);
		color: var(--surface);
		padding: var(--s-3) var(--s-4);
		z-index: 100;
	}

	.skip-link:focus {
		left: var(--s-4);
		top: var(--s-3);
	}

	.layout {
		opacity: 0;
		transition: opacity var(--t-entry) var(--ease);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.layout.loaded {
		opacity: 1;
	}

	main {
		flex: 1;
	}
</style>
