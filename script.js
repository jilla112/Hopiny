const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMsg = document.getElementById("finalMsg");
const song = document.getElementById("song");

recoverBtn.addEventListener("click", () => {
  errorScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

/* Run Away Button */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES Click */
yesBtn.addEventListener("click", () => {
  finalMsg.innerHTML = "System Restored ❤️ Forever Together!";
  song.play();
  confettiEffect();
});

/* Confetti */
function confettiEffect() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    confetti.style.top = "0px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.opacity = 1;
    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      confetti.style.top =
        parseInt(confetti.style.top) + 5 + "px";
      confetti.style.opacity -= 0.02;
      if (parseInt(confetti.style.top) > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
    }, 20);
  }
}
