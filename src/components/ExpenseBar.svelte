<script>
    // your script goes here
    import { onMount } from 'svelte'

    let totalExpense = 0
    let listData = null
    
    const calculatePercentage = (value)=>{
        return Math.round((value/totalExpense)*100)
    }

    export let data

    $: {
        listData = data;
        totalExpense = 0
        data.forEach(element => {
            totalExpense += element.value
        });
    };

</script>

<!-- markup (zero or more items) goes here -->

<div class="p-4 mb-4 duration-200 border border-gray-200 shadow-lg dark:border-gray-600 dark:bg-gray-800 rounded-2xl">
    <h5 class="mb-2 text-lg text-gray-600 bg-transparent dark:text-gray-100" >Total expense : {totalExpense}</h5>
    <div class="flex h-4 overflow-hidden rounded-2xl">
        {#if listData}
        {#each data as item}
            <div style='background-color: { item.color }; flex-grow: {calculatePercentage(item.value)};'>
            </div>
        {/each}
        {/if }
    </div>
</div>
