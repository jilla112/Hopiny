const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

/* Recovery Click */
recoverBtn.addEventListener("click", () => {
  errorScreen.style.display = "none";
  mainContent.style.display = "block";
});

/* NO button small run */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES click */
yesBtn.addEventListener("click", () => {
  playSong();
  createButterflies();
});

/* Play Song */
function playSong() {
  if (song) {
    song.currentTime = 0;
    song.play().catch(() => {});
  }
}

/* Simple Butterfly Effect */
function createButterflies() {
  for (let i = 0; i < 12; i++) {
    let butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.innerHTML = "🦋";
    butterfly.style.left = Math.random() * window.innerWidth + "px";
    butterfly.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(butterfly);

    setTimeout(() => {
      butterfly.remove();
    }, 5000);
  }
}
