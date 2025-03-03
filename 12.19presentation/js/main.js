// Burger Menu Toggle
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

// Toggle menu visibility when burger button is clicked
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1); // Get section ID
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjust for sticky header
      behavior: "smooth",
    });
    menu.classList.remove("show"); // Hide menu after clicking a link (mobile)
  });
});

// Active Menu Highlight on Scroll
const sections = document.querySelectorAll("section");
const observerOptions = {
  threshold: 0.6, // Trigger when 60% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === id) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});


// Cart Functionality
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
const buyNowButtons = document.querySelectorAll(".buy-now");

buyNowButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});

// Carousel Scrolling Logic
const carousel = document.querySelector('.carousel');
const books = document.querySelectorAll('.book');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const booksPerView = 3; // Number of books visible on mobile
const totalBooks = books.length;
const maxIndex = Math.ceil(totalBooks / booksPerView) - 1;

function updateCarouselPosition() {
    const bookWidth = books[0].offsetWidth + 16; // Book width + gap
    carousel.style.transform = `translateX(-${currentIndex * bookWidth * booksPerView}px)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarouselPosition();
    }
});

// Previous Button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    }
});

// Update carousel position on window resize
window.addEventListener('resize', () => {
    updateCarouselPosition();
});

