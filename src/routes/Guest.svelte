<script lang="ts">
	import Welcome from '$lib/components/hero/Welcome.svelte';
	import LoginButton from '$lib/components/session/LoginButton.svelte';
	import RegisterButton from '$lib/components/session/RegisterButton.svelte';
	import Breadcrumb from './Breadcrumb.svelte';
</script>

<div class="pt-24">
	<Breadcrumb />
	<Welcome />
	<div class="pt-24 text-center">
		<LoginButton />
		<RegisterButton />
	</div>
</div>
