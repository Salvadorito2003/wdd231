const yearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = `© ${currentYear}`;