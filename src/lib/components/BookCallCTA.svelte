<script lang="ts">
	import Button from './Button.svelte';
	import { CTA } from '$lib/config';

	interface Props {
		size?: 'default' | 'large';
		variant?: 'primary' | 'ghost' | 'ink';
		label?: string;
	}

	const { size = 'default', variant = 'primary', label = CTA.primary }: Props = $props();
</script>

<Button href={CTA.href} {size} {variant}>{label}</Button>
