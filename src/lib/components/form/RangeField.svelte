<script lang="ts">
	import { Range, Label } from 'flowbite-svelte';
	export let value = 5;
	export let label: string;
	export let expand: boolean = true;
</script>

<div class:mb-6={expand}>
	<Label>{label}</Label>
	<Range id="range-minmax" min="0" max="10" bind:value />
	<p>Value: {value}</p>
</div>
