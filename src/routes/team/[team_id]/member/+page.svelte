<script>
	export let member = {
		name: '',
		role: '',
		techPreferences: '',
		workStyle: ''
	};
</script>

<div>
	<h1>Create Member: TODO form</h1>
	<label>
		Member Name:
		<input bind:value={member.name} required />
	</label>
	<label>
		Role:
		<input bind:value={member.role} required />
	</label>
	<label>
		Tech Preferences:
		<input bind:value={member.techPreferences} required />
	</label>
	<label>
		Work Style:
		<select bind:value={member.workStyle} required>
			<option value="">--Please choose an option--</option>
			<option value="conservative">Conservative</option>
			<option value="risky">Risky</option>
		</select>
	</label>
</div>
