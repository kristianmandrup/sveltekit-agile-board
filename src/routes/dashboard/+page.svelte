<script lang="ts">
	import { onMount } from 'svelte';
	import { Bar, Doughnut } from 'svelte-chartjs';

	let taskStatusData: any = {};
	let projectProgressData: any = {};

	onMount(() => {
		taskStatusData = {
			labels: ['To Do', 'In Progress', 'Blocked', 'Completed'],
			datasets: [
				{
					label: 'Task Status',
					data: [10, 5, 3, 7], // Replace these values with your actual data
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)'
					],
					borderWidth: 1
				}
			]
		};

		projectProgressData = {
			labels: ['Completed', 'Remaining'],
			datasets: [
				{
					data: [25, 75], // Replace these values with your actual data
					backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
					borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
					borderWidth: 1
				}
			]
		};
	});
</script>

<layout>
	<div class="chart-container">
		<h2>Task Status</h2>
		<Bar data={taskStatusData} options={{ responsive: true, maintainAspectRatio: false }} />
	</div>

	<div class="chart-container">
		<h2>Project Progress</h2>
		<Doughnut
			data={projectProgressData}
			options={{ responsive: true, maintainAspectRatio: false }}
		/>
	</div>
</layout>

<style>
	.chart-container {
		max-width: 600px;
		margin: 1rem auto;
		height: 400px;
	}
</style>
