const spotlightContainer = document.querySelector(".spotlights");
const jsonDocument = "data/members.json";

getMemberData();

async function getMemberData() {
    const response = await fetch(jsonDocument);
    const data = await response.json();
    displaySpotlight(data.members);
}


function displaySpotlight(members) {
    filteredMembers = members.filter(
        m => m.membershipLevel == 2 || m.membershipLevel == 3
    );
    const shuffled = filteredMembers.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    selected.forEach(member => {
        if(member.membershipLevel == 3 || member.membershipLevel == 2) {
            let spotlightCard = document.createElement("section");
            spotlightCard.classList.add("spotlight-card")
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

        
            spotlightCard.appendChild(image);
            spotlightCard.appendChild(name);
            spotlightCard.appendChild(address);
            spotlightCard.appendChild(phoneNumber);
            spotlightCard.appendChild(membershipLevel);
            spotlightCard.appendChild(websiteUrl);
            
            spotlightContainer.appendChild(spotlightCard);
        }
    });
}