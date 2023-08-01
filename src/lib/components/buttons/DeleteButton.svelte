<script lang="ts">
	export let id: string;
	export let action: string;
	export let label: string = 'Delete';
</script>

<form action="?/${action}&id={id}" method="POST">
	<button type="submit" class="outline secondary">${label}</button>
</form>
