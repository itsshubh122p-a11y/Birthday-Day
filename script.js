// ===== 100 Birthday Wishes for Female Best Friend =====
const wishes = [
  "🎂 Happy Birthday Muskan! 💖",
  "💝 Meri zindagi ki sabse pyari dost ko janamdin ki badhai",
  "✨ Tum sirf best friend nahi",
  "🌸 Tumhari dosti meri zindagi ka sabse khoobsurat gift hai",
  "🎉 Happy Birthday to the girl who knows all my secrets",
  "🌙 Tum ho to har din chaand sa lagta hai",
  "💌 Meri life ka sabse soft corner tum ho",

  // 10–100 (short but emotional)
  "🎂 Tumhari dosti meri duniya hai",
  "💖 Happy Birthday meri moti",
  "🎉 Tum ho to life colourful hai",
  "🫶 Best friend forever",
  "🌙 Tumhari smile priceless hai",
  "🎁 Thank you for being you",

  "🎂 Hamesha khush raho",
  "🌸 Dosti ho to tum jaisi",

  "🎂 Happy wala Birthday",
  "💖 Smile always",
  "✨ Stay amazing",
  "🌸 Stay blessed",
  "🎉 Stay happy",
  "💫 Stay strong",
  "🫶 Stay kind",
  "🌙 Stay you",
  "💌 Stay magical",
  "🎁 Stay forever",

  

  "🎂 Cheers to you",
  "💖 Cheers to us",
  "✨ Cheers to memories",
  "🌸 Cheers to friendship",
  "🎉 Cheers to love",
  "💫 Cheers to smiles",
  "🫶 Cheers to laughter",
  "🌙 Cheers to bond",
  "💌 Cheers to forever",
  "🎁 Cheers to life"
];

// ===== Generate Wish with Blast Effect =====
function generateWish() {
  const wishBox = document.getElementById("wishBox");
  const random = Math.floor(Math.random() * wishes.length);

  wishBox.innerText = wishes[random];

  // Glow effect
  wishBox.classList.remove("wish-animate");
  void wishBox.offsetWidth;
  wishBox.classList.add("wish-animate");

  // Confetti blast
  createConfetti();
}

// ===== Confetti Blast =====
function createConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("span");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// ===== Infinite Birthday Timeline Counter =====
function birthdayTimeline() {
  const startDate = new Date("2025-12-31");
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())
  ) {
    years--;
  }

  document.getElementById("timelineCounter").innerText =
    `🎂 Celebrating ${20 + 1} Year(s) of Your Birthday Journey 💖`;
}

birthdayTimeline();


// ===== Reel Videos =====
const reels = document.querySelectorAll(".reel-video");
reels.forEach(video => {
  video.addEventListener("click", () => {
    reels.forEach(v => { if(v!==video){v.pause(); v.currentTime=0;} });
    video.paused ? video.play() : video.pause();
  });
});

// ===== Animate Birthday Bubbles =====
const bubbles = document.querySelectorAll(".bubble");
bubbles.forEach(bubble => {
  bubble.style.animationDuration = `${Math.random()*5 + 4}s`;
  bubble.style.animationDelay = `${Math.random()*2}s`;
});


// 🔢 Random Phone Number Generator
function generateRandomPhone() {
  let number = "+91 ";
  number += Math.floor(6000000000 + Math.random() * 3999999999);
  document.getElementById("randomPhone").innerText = number;
}

generateRandomPhone();


// 📸 Photo Click Glow Effect
const photos = document.querySelectorAll(".me-photo");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    photo.classList.add("photo-active");

    setTimeout(() => {
      photo.classList.remove("photo-active");
    }, 600);
  });
});


// ⏳ LIVE BIRTHDAY COUNTDOWN (AUTO START)
function startBirthdayCountdown() {
  // Birthday: 31 December 2025, 12:00 AM
  const birthdayDate = new Date("December 31, 2025 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
      document.querySelector(".countdown-timer").innerHTML =
        "<h3>🎉 Happy Birthday Muskan 🎂💖</h3>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
}

// AUTO START WHEN WEBSITE LOADS
startBirthdayCountdown();


// 🎂 Cake Cutting Interaction
const cake = document.getElementById("cake");
const music = document.getElementById("birthdayMusic");
const cakeMessage = document.getElementById("cakeMessage");

cake.addEventListener("click", () => {
  cake.classList.add("cake-cut");

  cakeMessage.innerText =
    "🎉 Happy Birthday Muskan 💖 May your life be sweet like this cake!";

  music.play();
  launchConfetti();
});

// 🎉 Confetti Generator
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
