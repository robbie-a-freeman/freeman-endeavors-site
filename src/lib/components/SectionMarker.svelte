<script lang="ts">
	interface Props {
		number: string;
		label: string;
		as?: 'h2' | 'h3' | 'div';
	}

	const { number, label, as = 'div' }: Props = $props();
</script>

{#if as === 'h2'}
	<h2 class="marker"><span class="glyph">§</span> {number} · <span class="label">{label}</span></h2>
{:else if as === 'h3'}
	<h3 class="marker"><span class="glyph">§</span> {number} · <span class="label">{label}</span></h3>
{:else}
	<div class="marker">
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
</style>
