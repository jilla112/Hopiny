const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const cardScreen = document.getElementById("cardScreen");
const yayScreen = document.getElementById("yayScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* 404 → Card */
recoverBtn.addEventListener("click", () => {
  errorScreen.classList.add("hidden");
  cardScreen.classList.remove("hidden");
});

/* YES → YAY + Song */
yesBtn.addEventListener("click", () => {
  cardScreen.classList.add("hidden");
  yayScreen.classList.remove("hidden");

  // Direct audio play (strong method)
  const audio = new Audio("song.mp3");
  audio.play().catch(err => {
    console.log("Audio error:", err);
  });
});

/* NO button run */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
