<h1>Register</h1>

<form method="POST">
	<div>
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required />
	</div>
	<div>
		<label for="username">Username</label>
		<input id="username" name="username" type="text" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input id="password" name="password" type="password" required />
	</div>

	<button type="submit">Register</button>
</form>
<p>Already have an account? <a href="/login">Login</a></p>
