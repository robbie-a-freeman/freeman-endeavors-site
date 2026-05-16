<script lang="ts">
	interface Props {
		client: string;
		industry?: string;
		stack?: string[];
		engagement?: string;
		duration?: string;
	}

	const { client, industry, stack, engagement, duration }: Props = $props();
</script>

<dl class="meta">
	<div class="row">
		<dt class="caption">Client</dt>
		<dd>{client}</dd>
	</div>
	{#if industry}
		<div class="row">
			<dt class="caption">Industry</dt>
			<dd>{industry}</dd>
		</div>
	{/if}
	{#if stack && stack.length > 0}
		<div class="row">
			<dt class="caption">Stack</dt>
			<dd>{stack.join(' · ')}</dd>
		</div>
	{/if}
	{#if engagement}
		<div class="row">
			<dt class="caption">Engagement</dt>
			<dd>{engagement}</dd>
		</div>
	{/if}
	{#if duration}
		<div class="row">
			<dt class="caption">Duration</dt>
			<dd>{duration}</dd>
		</div>
	{/if}
</dl>

<style>
	.meta {
		background: var(--surface-2);
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
		padding: var(--s-5) var(--s-6);
		margin: var(--s-6) 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-3);
	}

	.row {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-1);
	}

	dt.caption {
		margin: 0;
	}

	dd {
		margin: 0;
		font-size: var(--fs-body);
	}

	@media (min-width: 720px) {
		.meta {
			grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
			gap: var(--s-5);
		}

		.row {
			gap: var(--s-2);
		}
	}
</style>
