const jsonDocument = "data/stories.json";
const storiesContainer = document.getElementById("missionaries-stories")


async function getStoryData() {
    try {
        const cached = localStorage.getItem("storiesCache");
        if (cached) {
            const data = JSON.parse(cached);
            displayStory(data);
            return;
        }


        const response = await fetch(jsonDocument);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.stories) {
            throw new Error("Invalid JSON format: missing 'stories' array.");
        }


        localStorage.setItem("storiesCache", JSON.stringify(data.stories));

        displayStory(data.stories);
    } catch (error) {
        console.error("Error loading stories:", error);
    }
}

getStoryData();

const displayStory = (stories) => {
    const shuffled = stories.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 2);

    selected.forEach(story => {
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


