const form = document.getElementById("requestForm");
const dialog = document.getElementById("confirmDialog");
const confirmBtn = document.getElementById("confirmSubmit");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    dialog.showModal();
});

confirmBtn.addEventListener("click", () => {
    dialog.close();
    form.submit();
});