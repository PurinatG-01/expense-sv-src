<script>
    import ExpenseBar from "./ExpenseBar.svelte";

    export let data
    export let title
</script>

<div class="list-master">
    <h3 class="list-title">{title}</h3>
    <ExpenseBar data={data} />
    <div class="list-wrapper">
        {#each data as expense}
            <div class="todo">
                <button class="circle-button" />{expense.title}
                <span style="color: {expense.color};"
                    >&nbsp : {expense.value}</span
                >
                <input class="color-picker" type="color" />
            </div>
        {/each}
        <button class="add-button">Add</button>
    </div>
</div>

<style>

    .color-picker{
        margin: 0;
        width: 32px;
        height: 32px;
        margin-left: auto;
    }
    .list-title{
        font-weight: 400;

    }
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

    .list-master {
        max-width: 320px;
        width: 100%;
        flex-direction: column;
        display: flex;
        margin: 16px auto;
    }

    .list-wrapper {
        border-radius: 16px;
        margin: 0;
        padding: 16px;
        border: 1px solid #dfdfdf;
        flex-direction: column;
        display: flex;
    }

    .list-wrapper > .todo {
        padding: 16px;
        margin-bottom: 16px;
        border-radius: 16px;
        border: 1px solid #dfdfdf;
    }

    .todo {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
