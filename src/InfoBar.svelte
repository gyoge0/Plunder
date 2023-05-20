<script lang="ts">
    import {openModal} from "svelte-modals";
    import InfoModal from "./InfoModal.svelte";

    function show() {
        openModal(InfoModal)
    }
</script>
<section>
    <button on:click={show}>
        <img src="/info.svg" alt="info">
    </button>
</section>

<style>
    section {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        padding-top: 25px;
        padding-right: 25px;
    }
    button {
        all: unset;
        width: 50px;
        height: 50px;
        user-select: none;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>