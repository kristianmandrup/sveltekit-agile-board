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
	<div style="height:800px;" class="overflow-scroll pb-16">
		<Sidebar />
		<div class="p-4 sm:ml-64">
			<Breadcrumb />
			<slot />
		</div>
	</div>
</div>
<Footer />
