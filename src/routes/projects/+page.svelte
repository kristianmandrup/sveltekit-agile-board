<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// Client API:
	const { form } = superForm(data.form);

	$: ({ projects } = data);
</script>

<layout>
	<div class="grid">
		<div>
			{#each projects as project}
				<div>
					<header>{project.name}</header>
					<p>
						{project.description}
					</p>
					<form action="?/deleteProject&id={project.id}" method="POST">
						<button type="submit" class="outline secondary">Delete Project</button>
					</form>
					<a href="/{project.id}" role="button" class="outline constrast" style="width: 100%;"
						>Edit Project</a
					>
				</div>
			{/each}
		</div>
		<form action="?/createProject" method="POST">
			<h3>New Project</h3>
			<label for="title">Project Name </label>
			<input type="text" id="name" name="name" bind:value={$form.name} />
			<label for="description"> Description </label>
			<textarea id="description" name="description" rows={5} bind:value={$form.description} />
			<button type="submit">Add Project</button>
		</form>
	</div>
</layout>
