import { items } from "../data/items.mjs";
const itemsContainer = document.getElementById("items");


const allButton = document.querySelector("#all");
const clothesButton = document.querySelector("#clothes");
const varietiesButton = document.querySelector("#varieties");
const souveniersButton = document.querySelector("#souveniers");
const display = document.querySelector(".all");

allButton.addEventListener("click", () => {
    display.classList.add("all");
    display.classList.remove("clothes");
    display.classList.remove("varieties");
    display.classList.remove("souveniers");
});

clothesButton.addEventListener("click", () => {
    display.classList.add("clothes");
    display.classList.remove("all");
    display.classList.remove("varieties");
    display.classList.remove("souveniers");
});

varietiesButton.addEventListener("click", () => {
    display.classList.add("varieties");
    display.classList.remove("all");
    display.classList.remove("clothes");
    display.classList.remove("souveniers");
});

souveniersButton.addEventListener("click", () => {
    display.classList.add("souveniers");
    display.classList.remove("all");
    display.classList.remove("clothes");
    display.classList.remove("varieties");
});

displayItems(items);

function displayItems(items) {
    items.forEach(item => {
        let card = document.createElement("section");
    });
}