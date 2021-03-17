<script lang="ts">
    import ExpenseBar from "./ExpenseBar.svelte";

    let expenses: Array<Object> = [
        {
            title: "Expense 1",
            value: 145,
            color: "#2357aa",
        },
        {
            title: "Expense 2",
            value: 200,
            color: "#4657bb",
        },
        {
            title: "Expense 3",
            value: 500,
            color: "#6957cc",
        },
        {
            title: "Expense 4",
            value: 300,
            color: "#aa57dd",
        },
    ];
</script>

<!-- markup (zero or more items) goes here -->

<div style="background-color: transparent;">
    <ExpenseBar data={expenses} />
    <div class="list-wrapper">
        {#each expenses as expense}
            <div class="todo">
                <button class="circle-button" />{expense.title}
                <span style="color: {expense.color};">&nbsp : {expense.value}</span>
            </div>
        {/each}
        <button class="add-button">Add</button>
    </div>
</div>

<style>
    .circle-button {
        border-radius: 50%;
        width: 1em;
        height: 1em;
        margin: 0;
        padding: 0;
        margin-right: 8px;
        border: 0;
    }

    .circle-button:focus {
        outline: 0;
    }
    .circle-button:hover {
        background: rgb(78, 255, 166);
    }

    .list-wrapper {
        padding: 16px;
        border-radius: 16px;
        border: 1px solid #dfdfdf;
        flex-direction: column;
        display: flex;
    }

    .list-wrapper > .todo {
        min-width: 300px;
        padding: 16px;
        margin-bottom: 16px;
        border-radius: 16px;
        border: 1px solid #dfdfdf;
    }

    .todo {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 200;
    }

    .todo,
    .circle-button,
    .add-button {
        transition: all 0.2s ease-in-out;
    }

    .todo:hover {
        transform: translateY(-8px);
    }

    .add-button {
        border: none;
        padding: 8px;
        margin-bottom: 16px;
        border-radius: 16px;
        align-self: flex-end;
        font-size: 12px;
        font-weight: 200;
        width: 100px;
        margin: 0;
        background: #fefefe;
        color: rgb(78, 255, 166);
        border: 1px solid rgb(78, 255, 166);
    }

    .add-button:hover {
        background-color: rgb(78, 255, 166);
        color: #fefefe;
    }

    .add-button:focus {
        outline: 0;
    }
</style>
