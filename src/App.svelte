<script lang="ts">
	import Dashboard from "./components/Dashboard.svelte";
	import { expensesList } from "./config/store/expenses";
	import { db } from './config/firebase/firebase';
	import { collectionData } from 'rxfire/firestore';

const query = db.collection('expenses')
collectionData(query, 'id').subscribe((data) => {
	console.log(`> data : `,data)
	$expensesList = data
});

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