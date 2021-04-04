<script>
    import ExpenseList from "./ExpenseList.svelte";
    import Dialog from "./Dialog.svelte";
    import { expensesList } from "../config/store/expenses";
    import { _addExpensesList } from "../utility/_expenses";
    import { settingPreference } from "../config/store/user";
import { _toggleDarkMode } from "../utility/_user";

    export let uid;

    let isDark;
    let newListTitle;
    let isAddDialogOpen = false;
    let userExpenses;

    // subscribe to expenses store
    const unsubExpenses = expensesList.subscribe((val) => {
        userExpenses = val;
    });


    const toggleDark = () => {
        isDark = !isDark;
        _toggleDarkMode(uid, isDark)
        if (isDark) document.querySelector("html").classList.add("dark");
        else document.querySelector("html").classList.remove("dark");
    };

    const onExpenseListSave = (event) => {
        let tempList = [...$expensesList];
        tempList.splice(event.detail.index, 1, event.detail.newExpenses);
        $expensesList = tempList;
    };

    const onExpenseListDelete = (event) => {
        let tempList = [...$expensesList];
        tempList.splice(event.detail.index, 1);
        $expensesList = tempList;
    };

    const addNewExpenses = () => {
        isAddDialogOpen = false;
        _addExpensesList({
            title: newListTitle ?? "-",
            uid: uid,
            expenses: [],
        });
        newListTitle = undefined;
    };

    const toggleAddNewListDialog = () => {
        isAddDialogOpen = true;
    };

    $: {
        if($settingPreference){
            isDark = $settingPreference[0].darkMode
            if (isDark) document.querySelector("html").classList.add("dark");
            else document.querySelector("html").classList.remove("dark");
        }
    }
</script>

<Dialog
    open={isAddDialogOpen}
    on:close={() => {
        isAddDialogOpen = false;
    }}
    title="Add new list"
>
    <form class="w-full" on:submit|preventDefault={addNewExpenses}>
        <input
            placeholder="Insert list name..."
            bind:value={newListTitle}
            class="w-full h-8 mb-4 text-sm font-light border-t-0 border-b border-l-0 border-r-0 border-blue-400 focus:outline-none"
        />
        <button
            type="submit"
            class="float-right px-8 py-2 mr-2 text-sm font-light text-green-400 duration-200 border border-green-400 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-green-400"
            >Add
        </button>
    </form>
</Dialog>
<div class="flex w-full mb-8 bg-transparent max-w-screen-2xl">
    <div
        class="px-4 py-2 mx-auto ml-0 mr-4 font-light text-gray-600 duration-200 border border-gray-200 rounded-full shadow-lg cursor-pointer w-min whitespace-nowrap hover:bg-yellow-400 hover:text-gray-100 dark:text-gray-100 dark:border-gray-600 dark:bg-yellow-400"
        on:click={toggleDark}
    >
        Toggle Dark mode
    </div>
    <div
        on:click={toggleAddNewListDialog}
        class="px-4 py-2 mx-auto ml-0 font-light text-gray-100 duration-200 bg-green-400 border border-green-200 rounded-full shadow-lg cursor-pointer w-min whitespace-nowrap dark:text-gray-100 dark:border-gray-600 dark:bg-green-400"
    >
        Add new list
    </div>
</div>
<div class="flex flex-wrap w-full mx-auto bg-transparent xw max-w-screen-2xl">
    {#each userExpenses as expenses, index}
        <ExpenseList
            {index}
            id={expenses.id}
            title={expenses.title}
            data={expenses.expenses}
            on:save={onExpenseListSave}
            on:delete={onExpenseListDelete}
        />
    {/each}
</div>

<style>
</style>
