<script lang="ts">
	export let id: string;
	export let route: string = '';
	export let label: string = 'Edit';
</script>

<a href="${route}/${id}" role="button" class="outline constrast" style="width: 100%;">${label}</a>
