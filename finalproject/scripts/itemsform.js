import { items } from "../data/items.mjs";
const selectsContainer = document.querySelector("#product-selects");
const quantityInput = document.querySelector("#quantity");

quantityInput.addEventListener("change", () => {
    const quantity = parseInt(quantityInput.value);

    selectsContainer.innerHTML = "";
    for (let i = 0; i < quantity; i++) {
        
        addItems(items);
    }
});

function addItems(items) {
    let select = document.createElement("select")
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "-- select item --";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    items.forEach(item => {
        let option = document.createElement("option");
        if (item.personalize == true) {
            let personalized = "Personalized"
            option.textContent =  `${item.name} - ${personalized}`;
        } else {
            option.textContent = item.name;
        }
        
        select.appendChild(option);
    });
    selectsContainer.appendChild(select);
}