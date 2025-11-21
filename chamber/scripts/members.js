const jsonDocument = "data/members.json";
const membersContainer = document.querySelector(".members");


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".grid");

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});



async function getMemberData() {
    const response = await fetch(jsonDocument);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
    displaySpotlight(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement("section");
        card.classList.add("card")
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phoneNumber = document.createElement("p");
        const websiteUrl = document.createElement("a");
        websiteUrl.href = member.websiteUrl;
        const image = document.createElement("img");
        const membershipLevel = document.createElement("p")
        membershipLevel.classList.add("level")

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phoneNumber.textContent = `Phone Number: ${member.phoneNumber}`;
        websiteUrl.textContent = member.websiteUrl;
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name} image`);       
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "340");
        image.setAttribute("height", "340");
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(membershipLevel);
        card.appendChild(websiteUrl);
        
        membersContainer.appendChild(card);
    });
}

