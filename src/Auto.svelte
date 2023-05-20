<script lang="ts">
    import {goldStore, multiplierStore} from "./game";
    import type {Clicker} from "./clickers";
    import {clickerStore, futureClickers} from "./clickers";

    export let clicker: Clicker;

    let gold = 0;
    goldStore.subscribe(value => {
        gold = value;
    });
    let currentPrice = clicker.basePrice;
    let count = 0;
    let clickers = []
    clickerStore.subscribe(value => {
        clickers = value;
    })
    let multiplier = 1;
    multiplierStore.subscribe(value => {
        multiplier = value;
    })

    function buy() {
        if (gold >= currentPrice) {
            goldStore.update(value => value - currentPrice);
            currentPrice = Math.round(currentPrice * clicker.priceIncrease);
            setInterval(() => {
                goldStore.update(value => value + clicker.goldAdded * multiplier);
            }, 1000);
            count++;

            if (clicker.name === clickers.at(-1).name && futureClickers.length > 0) {
                let next = futureClickers.shift();
                clickerStore.update(value => [...value, next])
            }
        }
    }
</script>

<div>
    <h1>{clicker.name}</h1>
    <p id="desc">{clicker.description}</p>
    <p>Price: {currentPrice}</p>
    <p>Gold: {clicker.goldAdded}/s</p>
    <p>Count: {count}</p>
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
        font-family: Arial,sans-serif;
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
        font-family: Arial,sans-serif;
        font-size: 2.25em;
    }
    #desc {
        font-family: Arial,sans-serif;
        font-size: 1.25em;
    }
    p {
        font-family: Arial,sans-serif;
        font-size: 1em;
    }
</style>