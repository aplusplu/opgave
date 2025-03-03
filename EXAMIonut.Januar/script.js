// Image Slider

// 'let' declares a variable that can be updated, while 'const' declares a constant variable that cannot be reassigned.
let currentSlide = 0; // Keeps track of the current slide index
const slides = document.querySelectorAll(".hero-slider .slide"); // Selects all elements with the class 'slide' inside the 'hero-slider' section

// Function to show a specific slide by its index
function showSlide(index) {
  slides.forEach((slide, idx) => {
    // Loop through all slides
    slide.style.display = idx === index ? "block" : "none"; // Only display the slide that matches the index
  });
}

// Function to advance to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide, looping back to the first if at the end
  showSlide(currentSlide); // Display the updated slide
}

// Aut.advance the slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide when the page loads
showSlide(currentSlide);

// ---------------------------------------------------
// Burger Menu Toggle

const burgerMenu = document.querySelector(".burger-menu"); // Selects the burger menu button
const navMenu = document.querySelector(".nav-menu"); // Selects the navigation menu

// Hide menu on small screens and show the burger menu
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    burgerMenu.style.display = "block"; // Show burger menu
    navMenu.style.display = "none"; // Hide nav menu
  } else {
    burgerMenu.style.display = "none"; // Hide burger menu
    navMenu.style.display = "flex"; // Show nav menu with flex layout
  }
});

// Trigger the resize check on page load
window.dispatchEvent(new Event("resize"));

// Toggle navigation menu when burger menu is clicked
burgerMenu.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block"; // Show/hide the nav menu
});

// ---------------------------------------------------
// Form

const form = document.querySelector("form"); // Select the first form element on the page
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Fetch the values of name and email inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // validation check
  if (!name || !email) {
    alert("Please fill out all fields."); // Alert the user if field are empty
    return;
  }

  alert("Form submitted successfully!"); // Conf msg
  form.reset(); // Clears the form inputs
});

/*
JavaScript links to the HTML:

1. **Image Slider:**
   - The `.hero-slider .slide` class targets the slide images in the `<section class="hero-slider">`.
   - The `showSlide()` and `nextSlide()` functions control visibility of the slides.

2. **Burger Menu:**
   - The `.burger-menu` button and `.nav-menu` are selected from the `<header>` element.
   - JS toggles the visibility of the navigation menu based on screen size.

3. **Form Validation:**
   - The `<form>` in the `.subscribe` section is targeted for validation.
   - The input fields are selected using their `id` attributes (`#name` and `#email`).
   - The script prevents form submission if fields are empty and shows an alert message.
*/
