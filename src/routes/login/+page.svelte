<script lang="ts">
	// import type { ActionData } from './$types';
	// export let form: ActionData;
</script>

<h1>Login</h1>

<form method="POST">
	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	<button type="submit">Log in</button>
</form>
