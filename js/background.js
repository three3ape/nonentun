const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// const background = document.querySelector("#background");
// const bgImage = document.createElement("img");
const body = document.querySelector("body");
body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(img/${chosenImage})`;

// bgImage.src = `img/${chosenImage}`;

// background.appendChild(bgImage);
