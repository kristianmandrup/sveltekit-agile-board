<script lang="ts">
	import { Toggle } from 'flowbite-svelte';
	export let checked: boolean;
	export let id: string;
	export let label: string;
	export let props = {};
	export let expand: boolean = true;
</script>

<div class:mb-6={expand}>
	<Toggle {id} {...props} {checked}>${label}</Toggle>
</div>
