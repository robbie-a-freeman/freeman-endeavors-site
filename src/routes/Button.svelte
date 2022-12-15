<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

	export let text: string;
    function bubble_click_event_up() {
		dispatch('click');
	}
</script>

<span on:click={bubble_click_event_up}>{text}</span>

<style>
    span {
        background-color: var(--primary-color);
        color: #fff;
        opacity: 100%;
        font-size: 24px;
        height: 150px;
		padding: 1rem 2rem 1rem 2.5rem;
		color: var(--off-white-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		text-decoration: none;
		transition: color 0.2s linear;
		letter-spacing: 0.5rem;
		text-align: center;
        cursor: pointer;
    }
</style>