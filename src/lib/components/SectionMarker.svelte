<script lang="ts">
	interface Props {
		number: string;
		label: string;
		as?: 'h2' | 'h3' | 'div';
		variant?: 'plain' | 'pill';
	}

	const { number, label, as = 'div', variant = 'plain' }: Props = $props();
</script>

{#if as === 'h2'}
	<h2 class="marker" class:pill={variant === 'pill'}>
		<span class="glyph">§</span>
		{number} · <span class="label">{label}</span>
	</h2>
{:else if as === 'h3'}
	<h3 class="marker" class:pill={variant === 'pill'}>
		<span class="glyph">§</span>
		{number} · <span class="label">{label}</span>
	</h3>
{:else}
	<div class="marker" class:pill={variant === 'pill'}>
		<span class="glyph">§</span>
		{number} · <span class="label">{label}</span>
	</div>
{/if}

<style>
	.marker {
		font-family: var(--font-mono);
		font-size: var(--fs-caption);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--muted);
		font-weight: 400;
		margin: 0 0 var(--s-3) 0;
	}

	.glyph {
		color: var(--brick);
		font-weight: 500;
	}

	.label {
		color: var(--ink-2);
	}

	/* Ghost outline pill — opt-in via variant="pill". Static (non-interactive)
	 * because the marker is a section heading, not a link; no hover affordance. */
	.marker.pill {
		display: inline-block;
		padding: 0.55rem 0.9rem;
		border: 1px solid var(--rule-strong);
		border-radius: var(--r-sm);
		background: transparent;
		line-height: 1;
	}

	.marker.pill .glyph {
		color: var(--forest);
	}
</style>
