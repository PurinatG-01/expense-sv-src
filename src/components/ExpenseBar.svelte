<script>
    // your script goes here
    export let data

    let totalExpense = 0

    data.forEach(element => {
        totalExpense += element.value
    });

    const calculatePercentage = (value)=>{
        return Math.round((value/totalExpense)*100)
    }

</script>

<style>
    /* your styles go here */
    .expense-bar-wrapper{
        padding: 16px;
        border-radius: 16px;
        border: 1px solid #dfdfdf;
        margin: 0;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
    }

    .bar{
        border-radius: 16px;
        border: 1px solid #dfdfdf;
        height: 16px;
        display: flex;
        overflow: hidden;
    }

    .item{
        height: 100%;
        min-width: 20px;
    }
    .expense-bar-title{
        margin: 0;
        margin-bottom: 8px;
        font-weight: 200;
        font-size: 16px;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="expense-bar-wrapper">
    <h5 class="expense-bar-title" >Total expense : {totalExpense}</h5>
    <div class="bar">
        {#each data as item}
            <div class="item" style='background-color: { item.color }; flex-grow: {calculatePercentage(item.value)};'>
            </div>
        {/each}
    </div>
</div>
