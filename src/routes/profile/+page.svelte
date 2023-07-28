<script lang="ts">
	// import type { PageData } from '../$types';
	export let data; //: PageData;
	let { sex, description, role } = data;
</script>

<h1>Profile</h1>

<ul>
	<li id="sex">${sex}</li>
	<li id="description">${description}</li>
	<li id="role">${role}</li>
</ul>
