<script lang="ts">
	import { filter_category } from '../ts/active-technology-filter';
	export let label: string;
	export let category: string;

	let pill: any;

	filter_category.subscribe( current_cat => {
		if (!pill) {
			// not initialized, return
			return;
		}
		if (current_cat === category) {
			pill.className = pill.className + ' selected';
		} else {
			pill.className = pill.className.replace(' selected', '');
		}
	});

	function on_click_handler() {
		filter_category.update(prev_category => prev_category === category ? '' : category);		
	}
</script>

<div bind:this={pill} class="tech-pill" on:click={on_click_handler}>
    <div class="tech-pill-contents">{label}</div>
</div>

<style>
    .tech-pill {
		width: 170px;
		height: 50px;
		margin: 0 5px;
		background-color: var(--secondary-color);
		border-radius: 90px;
		position: relative;
		cursor: pointer;
	}
	.tech-pill:hover {
		background-color: var(--off-white-color) !important;
		color: var(--secondary-color) !important
	}
	:global(.tech-pill.selected) {
		background-color: var(--off-white-color) !important;
		color: var(--secondary-color) !important
	}
    .tech-pill .tech-pill-contents {
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		font-size: 14px;
	}
</style>