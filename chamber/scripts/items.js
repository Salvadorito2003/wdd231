import { items } from "../data/interest.mjs";

const itemsContainer = document.getElementById("places");

displayPlaces(items);

function displayPlaces(items) {
    items.forEach(item => {
        let card = document.createElement("section");
        card.classList.add("card")
        const name = document.createElement("h2");
        const address = document.createElement("address");
        const figure = document.createElement("figure");
        const image = document.createElement("img");
        const description = document.createElement("p");
        const button = document.createElement("button");
        name.textContent = item.name;
        address.textContent = item.address;
        description.textContent = item.description;
        button.textContent = `Learn More`;
        image.setAttribute("src", item.image);
        image.setAttribute("alt", `${item.name} image`);       
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");
        

        card.appendChild(name);
        figure.appendChild(image);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        
        itemsContainer.appendChild(card);
    });
}