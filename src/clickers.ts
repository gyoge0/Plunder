import {Writable, writable} from "svelte/store";

export type Clicker = {
    name: string
    description: string
    basePrice: number
    goldAdded: number
    priceIncrease: number
}


export const clickerStore: Writable<Clicker[]> = writable([
    {
        name: "Pirate",
        description: "Just your everyday pirate.",
        basePrice: 10,
        goldAdded: 1,
        priceIncrease: 1.1
    },
])

export const futureClickers: Clicker[] = [
    {
        name: "Pirate Quartermaster",
        description: "A loyal pirate quartermaster.",
        basePrice: 25,
        goldAdded: 2,
        priceIncrease: 1.1
    },
    {
        name: "Pirate Captain",
        description: "A swashbuckling pirate captain.",
        basePrice: 50,
        goldAdded: 5,
        priceIncrease: 1.1
    },
    {
        name: "Privateer",
        description: "A pirate sponsored by the British Empire",
        basePrice: 150,
        goldAdded: 10,
        priceIncrease: 1.2
    },
    {
        name: "Pirate Crew",
        description: "A crew of pirates.",
        basePrice: 500,
        goldAdded: 25,
        priceIncrease: 1.1
    },
    {
        name: "Blackbeard",
        description: "The most famous pirate of all time.",
        basePrice: 2500,
        goldAdded: 75,
        priceIncrease: 1.1
    },
    {
        name: "Long John Silver",
        description: "Everyone's favorite peg-legged pirate.",
        basePrice: 10000,
        goldAdded: 250,
        priceIncrease: 1.1
    },
    {
        name: "Jack Sparrow",
        description: "Why fight when you can negotiate?",
        basePrice: 50_000,
        goldAdded: 2000,
        priceIncrease: 1.1
    },
    {
        name: "Davy Jones",
        description: "The captain of the Flying Dutchman.",
        basePrice: 250_000,
        goldAdded: 5000,
        priceIncrease: 1.1
    },
    {
        name: "Captain Hook",
        description: "The #1 Crocodile hater.",
        basePrice: 1_000_000,
        goldAdded: 10_000,
        priceIncrease: 1.1
    },
    {
        name: "Hondo Ohnaka",
        description: "Speak softly and drive a big tank.",
        basePrice: 5_000_000,
        goldAdded: 25_000,
        priceIncrease: 1.1
    }
]