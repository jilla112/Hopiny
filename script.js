const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const cardScreen = document.getElementById("cardScreen");
const yayScreen = document.getElementById("yayScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

/* 404 → Card */
recoverBtn.addEventListener("click", () => {
  errorScreen.style.display = "none";
  cardScreen.classList.remove("hidden");
});

/* YES → YAY + Song */
yesBtn.addEventListener("click", () => {
  cardScreen.style.display = "none";
  yayScreen.classList.remove("hidden");

  if (song) {
    song.play().catch(() => {});
  }
});

/* NO run */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
