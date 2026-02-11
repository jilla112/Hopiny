const recoverBtn = document.getElementById("recoverBtn");
const errorScreen = document.getElementById("errorScreen");
const mainContent = document.getElementById("mainContent");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMsg = document.getElementById("finalMsg");
const song = document.getElementById("song");

/* Sparkle Background */
createSparkles();

function createSparkles() {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];
  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      alpha: Math.random()
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + star.alpha + ")";
      ctx.fill();
      star.alpha += (Math.random() - 0.5) * 0.05;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* Recovery */
recoverBtn.addEventListener("click", () => {
  errorScreen.style.opacity = "0";
  setTimeout(() => {
    errorScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.style.opacity = "1";
    createButterflies();
  }, 1500);
});

/* NO Run */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 500 - 250;
  const y = Math.random() * 400 - 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES Click */
yesBtn.addEventListener("click", () => {
  finalMsg.innerHTML = "❤️ Forever Together ❤️";

  song.currentTime = 0;
  song.play().catch(() => {});

  massiveConfetti();
});

/* Butterflies */
function createButterflies() {
  for (let i = 0; i < 40; i++) {
    let butterfly = document.createElement("div");
    butterfly.classList.add("butterfly");
    butterfly.style.left = Math.random() * window.innerWidth + "px";
    butterfly.style.animationDuration = 6 + Math.random() * 8 + "s";
    document.body.appendChild(butterfly);
  }
}

/* Massive Confetti */
function massiveConfetti() {
  for (let i = 0; i < 200; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    confetti.style.top = "0px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      confetti.style.top =
        parseInt(confetti.style.top) + 6 + "px";
      if (parseInt(confetti.style.top) > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
    }, 15);
  }
}
