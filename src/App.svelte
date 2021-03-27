<script lang="ts">
	import Dashboard from "./components/Dashboard.svelte";
</script>

<main class="duration-200 dark:bg-gray-800">
	<Dashboard />
</main>

<style>
	main{
		flex-grow:1;
		margin: 0;
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>