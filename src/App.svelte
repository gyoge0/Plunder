<script>
    import {goldStore, multiplierStore} from "./game";
    import ClickArea from "./ClickArea.svelte";
    import Clickers from "./Clickers.svelte";
    import InfoBar from "./InfoBar.svelte";
    import {closeModal, Modals} from "svelte-modals";

    let gold;
    goldStore.subscribe(value => {
        gold = value;
    });
    let multiplier = 1;
    multiplierStore.subscribe(value => {
        multiplier = value;
    });

    function click() {
        goldStore.update(value => value + multiplier)
    }
</script>

<main>
    <InfoBar/>
    <Modals>
        <div slot="backdrop" class="backdrop" on:click={closeModal}></div>
    </Modals>
    <h1>Plunder 🏴‍☠️</h1>
    <div id="content">
        <ClickArea gold={gold} click={click}/>
        <Clickers/>
    </div>
    <img src="/wave.svg" alt="wave background">
</main>

<style>
    img {
        position: fixed;
        bottom: 0;
        z-index: -1;
    }
    main {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        gap: 30px;
    }

    #content {
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        width: 100%;
        height: 100%;
    }

    h1 {
        font-size: 8em;
        font-family: Arial, sans-serif;
    }

    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.50)
    }
</style>