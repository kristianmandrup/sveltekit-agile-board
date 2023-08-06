<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { FieldType } from '$lib/components/form/types';
	import Builder from '$lib/components/form/Builder.svelte';
	import List from './List.svelte';
	import New from './New.svelte';
	import AddItem from './AddItem.svelte';

	export let data;

	// Client API:
	const { posted, enhance, form, errors, constraints, capture, restore } = superForm(data.form);
	export const snapshot = { capture, restore };

	const formFields = [
		{
			id: 'name',
			type: 'text' as FieldType
		},
		{
			id: 'description',
			type: 'textarea' as FieldType
		}
	];
	let props = {
		formFields,
		posted,
		form,
		errors,
		constraints
	};

	$: ({ projects } = data);
</script>

<layout>
	<div class="grid">
		<AddItem {props} />
		<List items={projects} />
	</div>
</layout>
