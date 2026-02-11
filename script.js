const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMsg = document.getElementById("finalMsg");
const song = document.getElementById("song");

/* Recovery Button */
recoverBtn.addEventListener("click", () => {
  errorScreen.style.opacity = "0";
  setTimeout(() => {
    errorScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    createButterflies();
  }, 1000);
});

/* Run Away NO Button */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 400 - 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES Click */
yesBtn.addEventListener("click", () => {
  finalMsg.innerHTML = "System Restored ❤️ Forever Together!";

  song.currentTime = 0;
  song.play().catch(error => {
    console.log("Autoplay blocked:", error);
  });

  confettiEffect();
});

/* Butterfly Generator */
function createButterflies() {
  for (let i = 0; i < 30; i++) {
    let butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.style.left = Math.random() * window.innerWidth + "px";
    butterfly.style.animationDuration = 5 + Math.random() * 8 + "s";
    document.body.appendChild(butterfly);
  }
}

/* Confetti Effect */
function confettiEffect() {
  for (let i = 0; i < 120; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
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
