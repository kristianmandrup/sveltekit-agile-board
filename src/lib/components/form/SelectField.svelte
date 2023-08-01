<script lang="ts">
	import { Label, Select, Helper } from 'flowbite-svelte';
	import type { SelectOptionType } from 'flowbite-svelte/dist/types';
	export let id: string;
	export let label: string = id;
	export let placeholder: string = '';
	export let valid = false;
	export let error: string;
	export let selected: string;
	export let items: SelectOptionType[];
	export let constraint = {};

	let ariaInvalid = error ? 'true' : undefined;
	let errorColor = error && 'red';
	let validColor = valid && 'green';
	let statusColor: any = errorColor || validColor || '';
</script>

<div class="mb-6">
	<Label for={id} class="block mb-2">${label}</Label>
	<Select
		{id}
		size="lg"
		color={statusColor}
		{placeholder}
		aria-invalid={ariaInvalid}
		{items}
		bind:value={selected}
		{...constraint}
	/>
	{#if error}
		<Helper class="mt-2" color={statusColor}>${error}</Helper>
	{/if}
</div>
