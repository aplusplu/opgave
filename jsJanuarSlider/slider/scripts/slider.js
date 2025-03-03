const slide = document.querySelector(".image-in-slide");
const title = document.querySelector(".slide-title");
const description = document.querySelector(".slide-description");
const button = document.querySelector(".slide-button");

const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");

let currentImageIndex = 0;

// Array af objekter til slides
let slides = [
  {
    image: "./assets/images/coffee1.jpg",
    alt: "Kaffe på et bord",
    title: "Friskbrygget Kaffe",
    description: "Nyd en kop friskbrygget kaffe med en udsøgt aroma.",
    link: "https://example.com/coffee1",
  },
  {
    image: "./assets/images/coffee2.jpg",
    alt: "Latte kunst i en kop",
    title: "Latte Kunst",
    description: "Smuk latte art lavet af vores dygtige baristaer.",
    link: "https://example.com/coffee2",
  },
  {
    image: "./assets/images/coffee3.jpg",
    alt: "Espresso med bønner",
    title: "Perfekt Espresso",
    description: "En stærk espresso med rige smagsnuancer.",
    link: "https://example.com/coffee3",
  },
];

// Funktion til at opdatere sliden
function setActiveSlide() {
  let slideData = slides[currentImageIndex];

  slide.src = slideData.image;
  slide.alt = slideData.alt;
  title.textContent = slideData.title;
  description.textContent = slideData.description;
  button.href = slideData.link;
}

// Gå til næste slide
function next() {
  currentImageIndex = (currentImageIndex + 1) % slides.length;
  setActiveSlide();
}

// Gå til forrige slide
function previous() {
  currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
  setActiveSlide();
}

// Event listeners for knapper
btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);

// Event listener for piletaster
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    next();
  } else if (event.key === "ArrowLeft") {
    previous();
  }
});

// Automatisk skift af slides
setInterval(next, 3000);

// Initial slide load
setActiveSlide();
