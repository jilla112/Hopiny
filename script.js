const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMsg = document.getElementById("finalMsg");
const song = document.getElementById("song");

/* Recovery */
recoverBtn.addEventListener("click", () => {
  errorScreen.style.opacity = "0";
  setTimeout(() => {
    errorScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.style.opacity = "1";
    createButterflies();
  }, 1000);
});

/* Butterfly generator (emoji based) */
function createButterflies() {
  for (let i = 0; i < 25; i++) {
    let butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.innerHTML = "🦋";
    butterfly.style.left = Math.random() * window.innerWidth + "px";
    butterfly.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(butterfly);
  }
}

/* NO button run */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES click */
yesBtn.addEventListener("click", () => {
  finalMsg.innerHTML = "❤️ Forever Together ❤️";

  if (song) {
    song.play().then(() => {
      console.log("Song playing");
    }).catch(error => {
      console.log("Song blocked:", error);
    });
  }
});
