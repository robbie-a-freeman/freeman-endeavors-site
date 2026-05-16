<script lang="ts">
	interface Item {
		slug: string;
		title: string;
		description: string;
		published: string;
	}

	interface Props {
		items: Item[];
		baseHref: string;
		emptyMessage?: string;
	}

	const { items, baseHref, emptyMessage = 'Nothing here yet.' }: Props = $props();

	const dateFmt = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
</script>

{#if items.length === 0}
	<p class="empty">{emptyMessage}</p>
{:else}
	<ul class="list">
		{#each items as item}
			<li class="row">
				<a href="{baseHref}{item.slug}/" class="row-link">
					<span class="row-date caption">{dateFmt.format(new Date(item.published))}</span>
					<span class="row-title">{item.title}</span>
					<span class="row-dek">{item.description}</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.list {
		list-style: none;
		padding: 0;
		margin: 0;
		border-top: 1px solid var(--rule);
	}

	.row {
		border-bottom: 1px solid var(--rule);
	}

	.row-link {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-2);
		padding: var(--s-6) 0;
		text-decoration: none;
		color: var(--ink);
		transition: opacity var(--t-state) var(--ease);
	}

	.row-link:hover {
		opacity: 0.7;
	}

	.row-date {
		display: block;
	}

	.row-title {
		display: block;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: var(--fs-display-md);
		line-height: 1.12;
		letter-spacing: -0.012em;
	}

	.row-dek {
		display: -webkit-box;
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 60ch;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.empty {
		color: var(--muted);
		padding: var(--s-7) 0;
	}
</style>
