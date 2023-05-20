<script lang="ts">
    export let gold;
    export let click;
</script>


<section>
    <div>
        <button on:click={click}>
            {gold}
        </button>
    </div>
</section>

<style>
    section {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    div {
        display: flex;
        justify-content: center;
        padding-top: 100px;
        align-items: center;
        width: 100%;
    }
    button {
        all: unset;
        border-radius: 25px;
        background: black;
        color: white;
        padding: 10px;
        font-size: 6em;
        font-family: Arial,sans-serif;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 100px;
        max-width: 500px;
        user-select: none;
    }
</style>
