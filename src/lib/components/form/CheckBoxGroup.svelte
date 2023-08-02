<script lang="ts">
	import { Checkbox, Label } from 'flowbite-svelte';
	import type { FormColorType } from 'flowbite-svelte/dist/types';
	interface ICheckboxItem {
		id: string;
		label: string;
		checked: boolean;
		color?: FormColorType;
	}
	export let items: ICheckboxItem[] = [];
</script>

<div class="mb-6">
	{#each items as item}
		<Checkbox {...item} name={item.id} aria-labelledby={item.label}>${item.label}</Checkbox>
	{/each}
</div>
