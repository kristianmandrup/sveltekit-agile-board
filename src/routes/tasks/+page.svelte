<script lang="ts">
	import AddItem from '$lib/components/AddItem.svelte';
	import List from '$lib/components/List.svelte';
	import type { FieldType } from '$lib/components/form/types.js';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

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

	const { form, posted, enhance, errors, constraints, capture, restore } = superForm(data.form);
	export const snapshot = { capture, restore };

	const entity = 'task';

	let props = {
		formFields,
		posted,
		form,
		errors,
		constraints
	};

	$: ({ tasks } = data);
</script>

<layout>
	<div class="grid">
		<AddItem {props} {entity} />
		<List items={tasks} {entity} />
	</div>
</layout>
