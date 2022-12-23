<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let loaded = false;
	onMount(() => loaded = true);
</script>

	<div class="app">
		{#if loaded}
		<Header />

		<main in:fade="{{duration: 2000}}">
			<slot />
		</main>

		<footer>
			<p>Copyright © Freeman Endeavors LLC</p>
		</footer>
		{/if}
	</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--secondary-color);
	}

	:global(html) {
		background-color: var(--secondary-color);
		width:100%;
	}

	:global(body) {
		width: fit-content;
		
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color: #fff;
		background-color: var(--primary-color);
		font-family: 'Roboto';
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	@media (min-width: 1100px) {
		:global(body) {
			display: contents;
		}
	}
	@media (max-width: 1100px) {
		:global(body) {
			padding-left: 50px;
		}
	}
</style>
