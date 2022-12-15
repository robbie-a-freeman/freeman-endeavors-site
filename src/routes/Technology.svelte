<script lang="ts">
    import { filter_category } from '../ts/active-technology-filter';
    // import { createEventDispatcher } from 'svelte';
    // const dispatch = createEventDispatcher();

	// export let text: string;
    // function bubble_click_event_up() {
	// 	dispatch('click');
	// }

    export let name: string;
    export let img_src: string;
    export let categories: string[];

    let tech: any;

    filter_category.subscribe( current_cat => {
		if (categories && tech) {
            const is_currently_highlighted = tech.className.includes('highlighted');
            if (categories.includes(current_cat) && !is_currently_highlighted) {
                tech.className = tech.className + ' highlighted';
            }
            if (!categories.includes(current_cat) && is_currently_highlighted) {
                tech.className = tech.className.replace(' highlighted', '');
            }
        }
	});
</script>
<!-- categories={categories.toString()}  -->
<div bind:this={tech} class="tech">
    <img src={img_src} alt={name}/>
    <span class="tooltip">{name}</span>
</div>

<style>
    .tech {
        position: relative;
        display: inline-block;
        max-height: 75px;
        max-width: 75px;
        padding: 30px;
        transition: 0.5s;
    }
    :global(.tech.highlighted) {
        transition: 1s;
        box-shadow: 0 0 5px #ffee10;
        text-shadow: 0 0 5px #ffee10;
    }

    .tech img {
        width: 100%;
        height: 100%;
        display: block;
        max-height: 75px;
        max-width: 75px;
    }

    .tech .tooltip {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;

        /* Position the tooltip */
        position: absolute;
        z-index: 1;
    }

    .tech:hover .tooltip {
        visibility: visible;
    }

</style>