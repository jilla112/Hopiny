const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const timeline = document.getElementById("timeline");
const yesBtn = document.getElementById("yesBtn");
const finalMsg = document.getElementById("finalMsg");

recoverBtn.addEventListener("click", () => {
  errorScreen.style.display = "none";
  timeline.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
  finalMsg.innerHTML = "System Restored ❤️ Forever Together!";
});
