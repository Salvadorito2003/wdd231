const now = new Date();
document.getElementById("timestamp").value = now.toISOString().slice(0, 16);