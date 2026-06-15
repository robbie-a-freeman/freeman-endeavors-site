<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';

	let theme: Theme = $state('light');

	onMount(() => {
		const current = document.documentElement.getAttribute('data-theme');
		theme = current === 'dark' ? 'dark' : 'light';
	});

	function setTheme(next: Theme) {
		theme = next;
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('fe-theme', next);
		} catch (_e) {
			/* private mode / storage disabled — silently no-op */
		}
	}

	function toggle() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}
</script>

<button
	type="button"
	class="toggle"
	onclick={toggle}
	aria-label="Switch to {theme === 'dark' ? 'light' : 'dark'} mode"
	title="Switch to {theme === 'dark' ? 'light' : 'dark'} mode"
>
	{#if theme === 'dark'}
		<!-- Sun glyph — visible in dark mode (click to go light) -->
		<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
			<circle cx="10" cy="10" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5" />
			<g stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
				<line x1="10" y1="1.5" x2="10" y2="4" />
				<line x1="10" y1="16" x2="10" y2="18.5" />
				<line x1="1.5" y1="10" x2="4" y2="10" />
				<line x1="16" y1="10" x2="18.5" y2="10" />
				<line x1="3.5" y1="3.5" x2="5.25" y2="5.25" />
				<line x1="14.75" y1="14.75" x2="16.5" y2="16.5" />
				<line x1="3.5" y1="16.5" x2="5.25" y2="14.75" />
				<line x1="14.75" y1="5.25" x2="16.5" y2="3.5" />
			</g>
		</svg>
	{:else}
		<!-- Moon glyph — visible in light mode (click to go dark) -->
		<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
			<path
				d="M16.5 12.5A7 7 0 0 1 7.5 3.5a7 7 0 1 0 9 9z"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>

<style>
	.toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: transparent;
		border: 1px solid var(--rule);
		border-radius: var(--r-sm);
		color: var(--ink);
		padding: 0;
		transition:
			border-color var(--t-state) var(--ease),
			color var(--t-state) var(--ease);
	}

	.toggle:hover {
		border-color: var(--rule-strong);
		color: var(--forest);
	}

	.toggle:focus-visible {
		outline: 2px solid var(--forest);
		outline-offset: 2px;
	}
</style>
