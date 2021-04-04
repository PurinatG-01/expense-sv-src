<script>
    import ExpenseBar from "./ExpenseBar.svelte";
    import { createEventDispatcher } from "svelte";
    import {
        _removeExpensesList,
        _updateExpensesList,
    } from "../utility/_expenses";

    export let data;
    export let title;
    export let id;

    const dispatch = createEventDispatcher();

    let toggleEdit = false;
    let listData = null;
    let newExpenseTitle = "";
    let newExpenseValue = null;

    const editExpenses = () => {
        toggleEdit = true;
    };

    const deleteExpenses = () => {
        toggleEdit = false;
        // dispatch("delete", {
        //     index: index,
        // });
        _removeExpensesList(id);
    };
    const saveExpenses = () => {
        toggleEdit = false;
        _updateExpensesList(id, listData);
    };

    const addExpense = () => {
        if (newExpenseTitle.length == 0 || !newExpenseValue) return null;
        let r = () => (Math.random() * 256) >> 0;
        let color = `rgb(${r()}, ${r()}, ${r()})`;
        listData = [
            ...listData,
            { title: newExpenseTitle, value: newExpenseValue, color: color },
        ];
        newExpenseTitle = "";
        newExpenseValue = null;
    };

    const removeExpense = (index) => {
        listData.splice(index, 1);
        listData = [...listData];
    };

    $: {
        listData = data;
    }
</script>

<div
    class="flex flex-col flex-grow w-full max-w-xs mb-4 mr-4 text-lg bg-transparent rounded-2xl"
>
    {#if listData}
        <ExpenseBar data={listData} />
        <div
            class="px-4 py-8 transition-all duration-200 border border-gray-200 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-2xl "
        >
            <h3
                class="pl-2 mb-2 font-semibold text-gray-600 bg-transparent dark:text-gray-100 "
            >
                {title}
                {#if !toggleEdit}
                    <button
                        on:click={editExpenses}
                        class="float-right text-sm font-light text-yellow-400 border-none focus:outline-none p4"
                        >Edit</button
                    >
                {/if}
            </h3>
            {#each listData as expense, i}
                <div
                    class="flex items-center px-2 py-2 mb-4 overflow-hidden text-sm font-light text-gray-600 duration-100 bg-transparent border-b border-gray-200 dark:text-gray-100 dark:border-gray-600 whitespace-nowrap"
                >
                    {expense.title}
                    <span class="bg-transparent" style="color: {expense.color};"
                        >&nbsp : {expense.value}</span
                    >
                    {#if toggleEdit}
                        <button
                            on:click={() => {
                                removeExpense(i);
                            }}
                            class="flex items-center justify-center w-6 h-6 ml-auto mr-0 text-sm font-light text-red-400 duration-200 border border-red-400 inline-blockpx-8 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-red-400"
                            >-</button
                        >
                    {/if}
                </div>
            {/each}
            {#if toggleEdit}
                <div
                    class="flex items-center px-2 py-2 mb-4 overflow-hidden text-sm font-light text-gray-600 duration-100 bg-transparent border-b border-gray-200 dark:text-gray-100 dark:border-gray-600 whitespace-nowrap"
                >
                    <input
                        class="flex-grow font-light text-gray-600 bg-transparent border-t-0 border-l-0 border-r-0 border-blue-400 rounded-none dark:text-gray-100 focus:border-b-2 focus:outline-none "
                        style="max-width: 100px;"
                        name="title"
                        placeholder="expense name"
                        bind:value={newExpenseTitle}
                    />
                    &nbsp; : &nbsp;

                    <input
                        class="flex-grow font-light text-gray-600 bg-transparent border-t-0 border-l-0 border-r-0 border-blue-400 rounded-none dark:text-gray-100 focus:border-b-2 focus:outline-none "
                        style="max-width: 100px;"
                        name="value"
                        type="number"
                        placeholder="expense cost"
                        bind:value={newExpenseValue}
                    />
                    <button
                        on:click={addExpense}
                        class="flex items-center justify-center w-6 h-6 ml-auto mr-0 text-sm font-light text-blue-400 duration-200 border border-blue-400 inline-blockpx-8 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-blue-400"
                        >+</button
                    >
                </div>

                <div class="flex justify-end w-full bg-transparent">
                    <button
                        on:click={saveExpenses}
                        class="px-8 py-2 mr-2 text-sm font-light text-green-400 duration-200 border border-green-400 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-green-400"
                        >Save</button
                    >
                    <button
                        on:click={deleteExpenses}
                        class="px-8 py-2 text-sm font-light text-red-400 duration-200 border border-red-400 duration focus:outline-none rounded-2xl hover:border-opacity-0 hover:text-gray-50 hover:bg-red-400"
                        >Delete</button
                    >
                </div>
            {/if}
        </div>
    {:else}
        <div
            class="flex items-center justify-center p-4 text-sm font-light text-gray-400 border border-gray-200 shadow-sm rounded-2xl"
        >
            Loading...
        </div>
    {/if}
</div>

<style>
</style>
