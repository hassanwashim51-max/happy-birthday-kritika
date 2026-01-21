function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.body.classList.add("night");

  // PLAY MUSIC
  let music = document.getElementById("bgMusic");
  music.play().catch(e => console.log("Audio blocked"));

  // BALLOONS
  for (let i = 0; i < 12; i++) {
    let b = document.createElement("div");
    b.className = "balloon";
    b.innerHTML = "🎈";
    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = 4 + Math.random() * 4 + "s";
    document.body.appendChild(b);
  }
}
