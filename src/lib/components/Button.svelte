<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'ghost' | 'ink';
	type Size = 'default' | 'large';

	interface Props {
		variant?: Variant;
		size?: Size;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children: Snippet;
	}

	const {
		variant = 'primary',
		size = 'default',
		href,
		type = 'button',
		disabled,
		onclick,
		children
	}: Props = $props();
</script>

{#if href}
	<a {href} class="btn btn-{variant} size-{size}" {onclick}>
		{@render children()}
	</a>
{:else}
	<button class="btn btn-{variant} size-{size}" {type} {disabled} {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-body);
		font-weight: 500;
		text-decoration: none;
		border: 1px solid transparent;
		border-radius: var(--r-sm);
		padding: 0.75rem 1.25rem;
		font-size: var(--fs-body);
		line-height: 1.2;
		transition:
			background-color var(--t-state) var(--ease),
			color var(--t-state) var(--ease),
			border-color var(--t-state) var(--ease),
			transform var(--t-micro) var(--ease);
		cursor: pointer;
		white-space: nowrap;
	}

	.btn:hover {
		transform: translateY(-1px);
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}

	.size-large {
		padding: 1rem 1.75rem;
		font-size: 1.0625rem;
	}

	.btn-primary {
		background: var(--forest);
		color: var(--surface);
		border-color: var(--forest);
	}

	.btn-primary:hover {
		background: var(--forest-2);
		border-color: var(--forest-2);
		color: var(--surface);
	}

	.btn-ghost {
		background: transparent;
		color: var(--ink);
		border-color: var(--rule-strong);
	}

	.btn-ghost:hover {
		border-color: var(--ink);
		color: var(--ink);
	}

	.btn-ink {
		background: var(--ink);
		color: var(--surface);
		border-color: var(--ink);
	}

	.btn-ink:hover {
		background: var(--ink-2);
		color: var(--surface);
	}
</style>
