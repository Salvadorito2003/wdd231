const message = document.getElementById("message");

const lastVisitStorage = "lastVisit";

const lastVisit = localStorage.getItem(lastVisitStorage);

const today = Date.now();

const msToDays = 86400000;

if(!lastVisit) {
    message.innerHTML = "Welcome! Let us know if you have any questions."
} else {
    const lastVisitDate = Number(lastVisit);
    const differenceMiliseconds = today - lastVisitDate;
    const differenceDays = differenceMiliseconds / msToDays;

    if (differenceDays < 1) {
        message.innerHTML = "Back so soon! Awesome!";
    } else {
        message.innerHTML = `You last visited ${differenceDays} days ago.`;
    }
}

localStorage.setItem(lastVisitStorage, today);