<script lang="ts">
	import { Radio } from 'flowbite-svelte';
	interface IRadioItem {
		label: string;
		value: string;
	}
	export let selected: string;
	export let items: IRadioItem[] = [];
	export let id: string;
	export let expand: boolean = true;
</script>

<div class:mb-6={expand}>
	{#each items as item}
		<Radio name={id} aria-labelledby={item.label} bind:group={selected} value={item.value}
			>${item.label}</Radio
		>
	{/each}
</div>
