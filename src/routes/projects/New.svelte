<script lang="ts">
	import Builder from '$lib/components/form/Builder.svelte';
	// export let posted: any;
	// export let values: any;
	// export let errors: any;
	// export let constraints: any;
	// export let formFields: any;
	// export let enhance: any;
	export let props: any;
	let enhance = props.enhance;
</script>

<form method="POST" use:enhance>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<h3>New Project</h3>
		<Builder {...props} />
		<button type="submit">Add Project</button>
	</div>
</form>
