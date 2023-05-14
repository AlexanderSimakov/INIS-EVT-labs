const images = [
  "icons/bg1.jpg",
  "icons/bg2.jpg",
  "icons/bg3.jpg",
  "icons/bg4.jpg",
  "icons/bg5.jpg",
  "icons/bg6.jpg",
  "icons/bg7.jpg",
];

let currentIndex = 1;

function changeBackground() {
  document.body.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
