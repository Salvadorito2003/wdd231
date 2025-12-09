import { items } from "../data/items.mjs";

const itemsContainer = document.getElementById("items");

displayThreeItems(items)

function displayThreeItems(items) {
    const filteredItems = items.filter(
        i => i.personalize == true
    );
    const shuffled = filteredItems.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    selected.forEach(item => {
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