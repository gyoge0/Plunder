<script>
    import Auto from "./Auto.svelte";
    import {clickerStore} from "./clickers";
    import Multiplier from "./Multiplier.svelte";

    let clickers = []
    clickerStore.subscribe(value => {
        clickers = value
    })

</script>

<section>
    <div>
        <Multiplier/>
        {#each clickers as clicker}
            <Auto bind:clicker/>
        {/each}
    </div>
</section>

<style>
    section {
        width: 50%;
        flex-grow: 0;
        height: 100%;
    }

    div {
        overflow-y: auto;
        width: 90%;
        height: 75%;
    }
</style>