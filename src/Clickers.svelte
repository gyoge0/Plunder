<script>
    import Auto from "./Auto.svelte";
    import {clickerStore} from "./clickers";
    import Multiplier from "./Multiplier.svelte";

    let clickers = []
    clickerStore.subscribe(value => {
        clickers = value
    })

</script>

<div>
    <Multiplier/>
    {#each clickers as clicker}
        <Auto bind:clicker/>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;
        gap: 30px;
        margin-bottom: 30px;
    }
</style>