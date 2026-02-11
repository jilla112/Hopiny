const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const cardScreen = document.getElementById("cardScreen");
const yayScreen = document.getElementById("yayScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

recoverBtn.addEventListener("click", () => {
  errorScreen.classList.add("hidden");
  cardScreen.classList.remove("hidden");
});

yesBtn.addEventListener("click", () => {
  cardScreen.classList.add("hidden");
  yayScreen.classList.remove("hidden");
  if (song) song.play().catch(() => {});
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
