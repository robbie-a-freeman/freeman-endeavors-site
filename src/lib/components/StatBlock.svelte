<script lang="ts">
	interface Stat {
		value: string;
		label: string;
	}

	interface Props {
		stats: Stat[];
		contained?: boolean;
	}

	const { stats, contained = false }: Props = $props();
</script>

<div class="stats" class:contained>
	{#each stats as stat}
		<div class="stat">
			<div class="value">{stat.value}</div>
			<div class="label caption">{stat.label}</div>
		</div>
	{/each}
</div>

<style>
	.stats {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-5);
	}

	.stats.contained {
		background: var(--surface-2);
		padding: var(--s-6);
		border: 1px solid var(--rule);
		border-left: none;
		border-right: none;
		margin: var(--s-7) 0;
	}

	.value {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.04;
		letter-spacing: -0.015em;
		color: var(--ink);
		font-feature-settings: 'tnum' 1;
	}

	.label {
		margin-top: var(--s-2);
	}

	@media (min-width: 720px) {
		.stats {
			grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
			gap: var(--s-6);
		}
	}
</style>
