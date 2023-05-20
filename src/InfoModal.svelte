<script>
    // noinspection ES6UnusedImports
    import {closeModal} from 'svelte-modals'

    export let isOpen

    export let title
    export let message
</script>

{#if isOpen}
    <div>
        <button on:click={closeModal}>X</button>
        <section id="info">
            <h2>What is Plunder?</h2>
            <p>Plunder is an idle clicker game. Buy clickers to plunder as much gold as you can!</p>
            <h2>Github</h2>
            <p><a href="http://github.com/gyoge0/plunder" target="_blank">https://github.com/gyoge0/plunder</a></p>
        </section>
    </div>
{/if}

<style>
    div {
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, 0);
        background: white;
        padding: 50px;
        border-radius: 50px;
        display: flex;
        flex-flow: column nowrap;
        font-family: Arial, sans-serif;
    }

    #info {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
    }

    button {
        all: unset;
        position: absolute;
        right: 25px;
        top: 25px;
        background: black;
        border-radius: 5px;
        padding: 3px 5px;
        font-family: Arial, sans-serif;
        color: white;
        width: fit-content;
        user-select: none;
    }
</style>