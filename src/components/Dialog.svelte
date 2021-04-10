<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let isVisible = false;

    export let open;
    $: {
        isVisible = open;
    }

    const onClose = (event) => {
        dispatch("close");
    };

    export let title;
</script>

<!-- markup (zero or more items) goes here -->

{#if isVisible}
    <div
        on:click|once={onClose}
        style="backdrop-filter: blur(5px);"
        class="fixed top-0 left-0 z-50 flex items-center w-screen h-screen p-0 m-0 duration-200 bg-gray-600 bg-opacity-50"
    >
        <div
            on:click|stopPropagation={() => {}}
            class="w-full max-w-xs p-4 mx-auto border-gray-200 rounded-2xl dark:border-gray-600"
        >
            <h3 class="w-full mb-4 font-semibold text-gray-600">{title}</h3>
            <slot class="w-full" />
        </div>
    </div>
{/if}

<style>
    /* your styles go here */
</style>
