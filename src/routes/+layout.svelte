<script lang="ts">
	import '../app.postcss';
	import 'iconify-icon';
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
	import Footer from './Footer.svelte';
	import SimpleNavbar from './SimpleNavbar.svelte';
	import Breadcrumb from './Breadcrumb.svelte';

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
	<div style="height:600px;" class="overflow-scroll pb-16">
		<slot />
	</div>
	<Footer />
</div>
