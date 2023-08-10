<script lang="ts">
	import 'iconify-icon';
	import '@picocss/pico';
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
	import Footer from './Footer.svelte';

	// Navbar See: https://flowbite-svelte.com/docs/components/navbar
	let menuItems: any[] = [
		{
			path: '/',
			icon: 'mdi:home'
		}
	];
</script>

<div class="relative px-8">
	<Navbar />
	<!-- <Sidebar /> -->
	<div style="height:300px;" class="overflow-scroll pb-16">
		<slot />
	</div>
	<!-- <Footer /> -->
</div>
