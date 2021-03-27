<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();
    let isVisible = false;

    export let open;
    $ : {
        isVisible = open
    }

    const onClose = (event) => {
        dispatch('close')
    }

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

{#if isVisible}
<div on:click|once={onClose} class="absolute top-0 left-0 flex items-center w-screen h-screen p-0 m-0 duration-200 bg-gray-600 bg-opacity-50">
    <div class="w-full h-full max-w-xs mx-auto border-gray-200 max-h-96 rounded-2xl dark:border-gray-600">
    </div>
</div>
{/if}