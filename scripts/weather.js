
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const myKey = "552b4e30cfa351081e49909aba5677fc";
const myLat = "49.747159953465044";
const myLon = "6.641206584733308";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    captionDesc.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;K`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", captionDesc);
}

