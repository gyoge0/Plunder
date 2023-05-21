<script lang="ts">
    import {goldStore, multiplierStore} from "./game";

    let gold = 0;
    goldStore.subscribe(value => {
        gold = value;
    });

    let multiplier = 1;
    multiplierStore.subscribe(value => {
        multiplier = value;
    });

    let currentPrice = 100;

    function buy() {
        if (gold >= currentPrice) {
            goldStore.update(value => value - currentPrice);
            currentPrice = currentPrice * 10;
            multiplierStore.update(value => value * 2);
        }
    }
</script>

<div>
    <h1>Multiplier</h1>
    <p id="desc">Multiplies all the gold you gain.</p>
    <p>Price: {currentPrice}</p>
    <p>Current multiplier: {multiplier}x</p>
    <!--suppress HtmlWrongAttributeValue -->
    <button on:click={buy} disabled="{gold < currentPrice}">Buy!</button>
</div>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;
        padding: 20px;
        gap: 4px;
        background-color: #bae6ff;
        border: solid 5px black;
        width: 450px;
        border-radius: 30px;
    }

    button {
        all: unset;
        font-family: Arial, sans-serif;
        background-color: #22e610;
        font-size: 1.5em;
        color: white;
        padding: 5px;
        border-color: green;
        border-radius: 10px;
        border-width: 10px;
        width: fit-content;
        align-self: flex-end;
        user-select: none;
        position: absolute;
        transform: translate(0, 80px);
    }

    button:disabled {
        background-color: #e61010;
        border-color: darkred;
    }

    button:hover:enabled {
        cursor: pointer;
        background-color: #1e9e0c;
        border-color: darkgreen;
    }

    h1 {
        font-family: Arial, sans-serif;
        font-size: 2.25em;
    }

    #desc {
        font-family: Arial, sans-serif;
        font-size: 1.25em;
    }

    p {
        font-family: Arial, sans-serif;
        font-size: 1em;
    }
</style>
