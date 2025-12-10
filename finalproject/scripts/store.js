import { items } from "../data/items.mjs";
const itemsContainer = document.querySelector(".items");

const allButton = document.querySelector("#all");
const clothesButton = document.querySelector("#clothes");
const varietiesButton = document.querySelector("#varieties");
const souvenirsButton = document.querySelector("#souvenirs");
const display = document.querySelector(".all");

allButton.addEventListener("click", () => {
    display.classList.add("all");
    display.classList.remove("clothes");
    display.classList.remove("varieties");
    display.classList.remove("souvenirs");
    itemsContainer.innerHTML = "";
    displayItems(items);
});

clothesButton.addEventListener("click", () => {
    display.classList.add("clothes");
    display.classList.remove("all");
    display.classList.remove("varieties");
    display.classList.remove("souvenirs");

    const filteredItems = items.filter(
        i => i.category == "clothes"
    );
    itemsContainer.innerHTML = "";
    displayItems(filteredItems);
    
});

varietiesButton.addEventListener("click", () => {
    display.classList.add("varieties");
    display.classList.remove("all");
    display.classList.remove("clothes");
    display.classList.remove("souvenirs");

    const filteredItems = items.filter(
        i => i.category == "varieties"
    );
    itemsContainer.innerHTML = "";
    displayItems(filteredItems);
    
});

souvenirsButton.addEventListener("click", () => {
    display.classList.add("souvenirs");
    display.classList.remove("all");
    display.classList.remove("clothes");
    display.classList.remove("varieties");

    const filteredItems = items.filter(
        i => i.category == "souvenirs"
    );
    itemsContainer.innerHTML = "";
    displayItems(filteredItems);
    
});

displayItems(items)

function displayItems(items) {
items.forEach(item => {
    
    let card = document.createElement("section");
    card.classList.add("card")
    const name = document.createElement("h2");
    const description = document.createElement("p");
    const figure = document.createElement("figure");
    const image = document.createElement("img");

    name.textContent = item.name;
    description.textContent = item.description;
    
    image.setAttribute("src", item.image);
    image.setAttribute("alt", `${item.name} image`);       
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");

    
    figure.appendChild(image);
    card.appendChild(figure);
    card.appendChild(name);
    card.appendChild(description);
    
    itemsContainer.appendChild(card);
});
}