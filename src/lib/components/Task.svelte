<script lang="ts">
	import type { ITask } from '$lib/types/tasks';

	let task: ITask;
</script>

<div class="task">
	{JSON.stringify(task, null, 2)}
</div>
