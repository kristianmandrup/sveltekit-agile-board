<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { FieldType } from '$lib/components/form/types';
	import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
	import EditButton from '$lib/components/buttons/EditButton.svelte';
	import Builder from '$lib/components/form/Builder.svelte';
	import TextDecription from '$lib/components/display/TextDescription.svelte';
	import Title from '$lib/components/display/Title.svelte';

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

	$: ({ deliverables } = data);
</script>

<layout>
	<div class="grid">
		<div>
			{#each deliverables as deliverable}
				<div>
					<Title title={deliverable.name} />
					<TextDecription text={deliverable.description} />
					<DeleteButton action="deleteDeliverable" label="Delete" id={deliverable.id} />
					<EditButton route="deliverables" id={deliverable.id} label="Edit" />
				</div>
			{/each}
		</div>
		<form method="POST" use:enhance>
			<h3>New Deliverable</h3>
			<Builder {posted} {formFields} values={$form} errors={$errors} constraints={$constraints} />
			<button type="submit">Add Deliverable</button>
		</form>
	</div>
</layout>
