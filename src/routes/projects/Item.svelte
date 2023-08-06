<script lang="ts">
	import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
	import EditButton from '$lib/components/buttons/EditButton.svelte';
	import TextDecription from '$lib/components/display/TextDecription.svelte';
	import Title from '$lib/components/display/Title.svelte';
	export let id: string;
	export let name: string;
	export let description: string;
</script>

<div class="item">
	<Title title={name} />
	<TextDecription text={description} />
	<DeleteButton action="deleteProject" label="Delete" {id} />
	<EditButton route="projects" {id} label="Edit" />
</div>
