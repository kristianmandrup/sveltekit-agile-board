<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { FieldType } from '$lib/components/form/types';
	import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
	import EditButton from '$lib/components/buttons/EditButton.svelte';
	import Builder from '$lib/components/form/Builder.svelte';
	import TextDecription from '$lib/components/display/TextDecription.svelte';
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

	$: ({ projects } = data);
</script>

<layout>
	<div class="grid">
		<div>
			{#each projects as project}
				<div>
					<Title title={project.name} />
					<TextDecription text={project.description} />
					<DeleteButton action="deleteProject" label="Delete" id={project.id} />
					<EditButton route="projects" id={project.id} label="Edit" />
				</div>
			{/each}
		</div>
		<form method="POST" use:enhance>
			<h3>New Project</h3>
			<Builder {posted} {formFields} values={$form} errors={$errors} constraints={$constraints} />
			<button type="submit">Add Project</button>
		</form>
	</div>
</layout>
