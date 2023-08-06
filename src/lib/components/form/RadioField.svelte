<script lang="ts">
	import { Radio } from 'flowbite-svelte';
	export let selected: string;
	export let label: string;
	export let value: string;
	export let id: string;
	export let expand: boolean = true;
</script>

<div class:mb-6={expand}>
	<Radio name={id} aria-labelledby={label} {selected} {value}>${label}</Radio>
</div>
