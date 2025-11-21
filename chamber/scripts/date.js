const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear} Argentina Chamber of Commerce`;

const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const tomorrow = document.querySelector("#tomorrow");
const twoDays = document.querySelector("#two-days");
const threeDays = document.querySelector("#three-days");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
const oneDay = weekday[(d.getDay() + 1) % 7];
const twoDay = weekday[(d.getDay() + 2) % 7];
const threeDay = weekday[(d.getDay() + 3) % 7];

tomorrow.innerHTML = oneDay;
twoDays.innerHTML = twoDay;
threeDays.innerHTML = threeDay;