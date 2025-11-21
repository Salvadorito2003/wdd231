const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecast = document.querySelector("#forecast");
const forecastTwo = document.querySelector("#forecastTwo");
const forecastThree = document.querySelector("#forecastThree");

const myKey = "552b4e30cfa351081e49909aba5677fc";
const myLat = "-32.95650350125565";
const myLon = "-60.69973346052616";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`;
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}`




async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
            const forecastResponse = await fetch(forecastUrl);
            if(forecastResponse.ok) {
                const forecastData = await forecastResponse.json();
                console.log(forecastData);
                displayForecast(forecastData);
            } else {
                throw error(await response.text());
            }
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
    currentTemp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}&deg;C`; 
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", captionDesc);
}



function displayForecast(forecastData) {
    forecast.innerHTML = `${(forecastData.list[0].main.temp - 273.15).toFixed(2)}&deg;C`;
    forecastTwo.innerHTML = `${(forecastData.list[1].main.temp - 273.15).toFixed(2)}&deg;C`;
    forecastThree.innerHTML = `${(forecastData.list[2].main.temp - 273.15).toFixed(2)}&deg;C`;
}