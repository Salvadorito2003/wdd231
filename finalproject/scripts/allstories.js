const jsonDocument = "data/stories.json";
const storiesContainer = document.getElementById("missionaries-stories")


async function getStoryData() {
    const response = await fetch(jsonDocument);
    const data = await response.json();
    displayStory(data.stories);
}

getStoryData();

const displayStory = (stories) => {

    stories.forEach(story => {
        let card = document.createElement("section");
        card.classList.add("story-card")
        const description = document.createElement("p");
        const name = document.createElement("h3");
        const date = document.createElement("h3");

        description.textContent = story.story;
        name.textContent = story.author;
        date.textContent = story.date;

        card.appendChild(description);
        card.appendChild(name);
        card.appendChild(date);

        storiesContainer.appendChild(card);
    });
}