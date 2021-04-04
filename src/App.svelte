<script lang="ts">
	import Dashboard from "./components/Dashboard.svelte";
	import { expensesList } from "./config/store/expenses";
	import { settingPreference } from "./config/store/user";
	import { db } from "./config/firebase/firebase";
	import { collectionData } from "rxfire/firestore";
	import { _authState, _login, _logout } from "./utility/_user";

	let currentUser;

	const unsubAuth = _authState.subscribe((user) => {
		currentUser = user;
	});

	$: {
		if (currentUser) {
			collectionData(
				db.collection("expenses").where("uid", "==", currentUser.uid),
				"id"
			).subscribe((data) => {
				$expensesList = data;
			});

			collectionData(
				db.collection("users").where("uid", "==", currentUser.uid),
				"id"
			).subscribe((data) => {
				$settingPreference = data;
			});
		}
	}
</script>

<main class="duration-200 dark:bg-gray-800">
	<h1
		class="w-full mb-4 text-4xl font-extrabold text-gray-600 bg-transparent dark:text-gray-100 max-w-screen-2xl"
	>
		Expense-SV
	</h1>
	{#if currentUser}
		<div
			class="absolute z-50 flex items-center mx-auto mb-8 bg-transparent top-4 right-4 max-w-screen-2xl"
		>
			<div class="hidden bg-transparent sm:flex ">
				<img
					src={currentUser.photoURL}
					alt={currentUser.displayName}
					class="mr-4 rounded-full max-h-12"
				/>
				<div
					class="mr-4 text-xl font-semibold text-gray-600 bg-transparent dark:text-gray-100"
				>
					<span class="mb-1 bg-transparent"
						>{currentUser.displayName}</span
					>
					<br />
					<span
						class="text-sm font-light text-gray-600 bg-transparent "
						>{currentUser.email}</span
					>
				</div>
			</div>

			<button
				on:click={_logout}
				class="w-10 h-10 p-2 text-sm font-light text-red-400 duration-200 border border-red-400 sm:px-8 sm:py-2 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-red-400"
				><span class="hidden bg-transparent sm:block">Log out</span>
				<span class="block bg-transparent sm:hidden">=></span>
			</button>
		</div>
		<Dashboard uid={currentUser.uid} />
	{:else}
		<h3
			class="mt-4 mb-4 text-2xl font-semibold text-gray-600 bg-transparent dark:text-gray-100"
		>
			Please login
		</h3>
		<button
			on:click={_login}
			class="px-8 py-2 text-sm font-light text-green-400 duration-200 border border-green-400 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-green-400"
			>Google sign in</button
		>
	{/if}
</main>

<style>
	main {
		flex-grow: 1;
		margin: 0;
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
