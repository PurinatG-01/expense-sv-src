<script>
    import ExpenseList from "./ExpenseList.svelte";
    import Dialog from "./Dialog.svelte";
    import { expensesList } from "../config/store/expenses";
    let isDark = false;

    // subscribe to expenses store
    let userExpenses;
    let isAddDialogOpen = false;

    const unsubExpenses = expensesList.subscribe((val) => {
        userExpenses = val;
    });

    const toggleDark = () => {
        isDark = !isDark;
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
        // isAddDialogOpen = true;
        $expensesList = [
            ...$expensesList,
            {
                title: "test title",
                id: Date.now(),
                expenses: [],
            },
        ];
    };
</script>

<Dialog
    open={isAddDialogOpen}
    on:close={() => {
        isAddDialogOpen = false;
    }}
/>
<h1
    class="w-full text-4xl font-extrabold text-gray-600 bg-transparent dark:text-gray-100 max-w-screen-2xl"
>
    Expense-SV
</h1>
<h2
    class="w-full mb-8 text-xl text-gray-600 bg-transparent dark:text-gray-100 max-w-screen-2xl"
>
    by Purinat Sanbundit
</h2>
<div class="flex w-full mb-8 bg-transparent max-w-screen-2xl">
    <div
        class="px-4 py-2 mx-auto ml-0 mr-4 font-light text-gray-600 duration-200 border border-gray-200 rounded-full shadow-lg cursor-pointer w-min whitespace-nowrap hover:bg-yellow-400 hover:text-gray-100 dark:text-gray-100 dark:border-gray-600 dark:bg-yellow-400"
        on:click={toggleDark}
    >
        Toggle Dark mode
    </div>
    <div
        on:click={addNewExpenses}
        class="px-4 py-2 mx-auto ml-0 font-light text-gray-100 duration-200 bg-green-400 border border-green-200 rounded-full shadow-lg cursor-pointer w-min whitespace-nowrap dark:text-gray-100 dark:border-gray-600 dark:bg-green-400"
    >
        Add new list
    </div>
</div>
<div class="flex flex-wrap w-full mx-auto bg-transparent xw max-w-screen-2xl">
    {#each userExpenses as expenses, index}
        <ExpenseList
            {index}
            bind:id={expenses.id}
            bind:title={expenses.title}
            bind:data={expenses.expenses}
            on:save={onExpenseListSave}
            on:delete={onExpenseListDelete}
        />
    {/each}
</div>

<style>
</style>
