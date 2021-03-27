import { writable } from 'svelte/store'

export const expensesList = writable([

    {
        title: 'List 1',
        id: Date.now(),
        expenses: [
            {
                title: "Expense 1",
                value: 145,
                color: "#2357aa",
            },
            {
                title: "Expense 2",
                value: 200,
                color: "#46aabb",
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
            {
                title: "Expense 5",
                value: 300,
                color: "#aa90dd",
            },
        ]
    },
])