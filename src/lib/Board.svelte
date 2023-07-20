<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
			};
		}
	});

	let uid = 1;

	interface ITask {
		id: number;
		status: string;
		description: string;
		done?: boolean;
	}

	let tasks: ITask[] = [
		{ id: uid++, status: 'todo', description: 'write some docs' },
		{ id: uid++, status: 'done', description: 'start writing blog post' },
		{ id: uid++, status: 'wip', description: 'buy some milk' },
		{ id: uid++, status: 'todo', description: 'mow the lawn' },
		{ id: uid++, status: 'done', description: 'feed the turtle' },
		{ id: uid++, status: 'wip', description: 'fix some bugs' }
	];

	let columns = ['todo', 'wip', 'done'];

	const createColumnsMap = () => {
		return columns.reduce((acc, col) => {
			acc[col] = [];
			return acc;
		}, {} as any);
	};

	// turns the list into a map
	// test: [{task 1 }, { task 2}]
	$: tasksByColumn = tasks.reduce((acc, task) => {
		task.done = task.status === 'done';
		acc[task.status].push(task);
		return acc;
	}, createColumnsMap());

	function add(input: any) {
		const task = {
			id: uid++,
			status: 'todo',
			description: input.value
		};

		tasks = [task, ...tasks];
		input.value = '';
	}

	function remove(task: any) {
		tasks = tasks.filter((t) => t !== task);
	}

	function mark(task: any, done = true) {
		task.status = 'done';
		task.done = done;
		// remove(task);
		tasks = [...tasks]; // tasks.concat(task);
		console.log(tasks);
	}
</script>

You were right, I had messed up...

<div class="board">
	<input
		placeholder="what needs to be done?"
		on:keydown={(e) => e.key === 'Enter' && add(e.target)}
	/>
	<h2>Board</h2>
	<div class="container">
		{#each columns as column}
			<div class="column">
				<div class="title">{column}</div>
				{#each tasksByColumn[column] as task (task.id)}
					<label
						class:done={task.done}
						in:receive={{ key: task.id }}
						out:send={{ key: task.id }}
						animate:flip={{ duration: 200 }}
					>
						{#if task.status !== 'todo'}
							<input checked={task.done} type="checkbox" on:change={() => mark(task, true)} />
						{/if}
						{task.description}
						<button on:click={() => remove(task)}>remove</button>
					</label>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
	}

	.column {
		flex: 1;
		padding: 10px;
		border: 1px solid #ccc;
	}

	.title {
		text-align: center;
		font-weight: bold;
		margin-bottom: 10px;
	}

	label {
		display: block;
		position: relative;
		line-height: 1.2;
		padding: 0.5em 2.5em 0.5em 2em;
		margin: 0 0 0.5em 0;
		border-radius: 2px;
		user-select: none;
		border: 1px solid hsl(240, 8%, 70%);
		background-color: hsl(240, 8%, 93%);
		color: #333;
	}

	input[type='checkbox'] {
		position: absolute;
		left: 0.5em;
		top: 0.6em;
		margin: 0;
	}

	.done {
		border: 1px solid hsl(240, 8%, 90%);
		background-color: hsl(240, 8%, 98%);
	}

	button {
		position: absolute;
		top: 0;
		right: 0.2em;
		width: 2em;
		height: 100%;
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 1.4em 1.4em;
		border: none;
		opacity: 0;
		transition: opacity 0.2s;
		text-indent: -9999px;
		cursor: pointer;
	}

	label:hover button {
		opacity: 1;
	}
</style>
