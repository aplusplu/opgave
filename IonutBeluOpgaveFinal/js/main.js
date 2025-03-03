// Img
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);

// MenuvToggle
const burgerButton = document.getElementById("burgerButton");
const menuItems = document.getElementById("menuItems");
const closeMenu = document.querySelector(".close-menu");

burgerButton.addEventListener("click", () => {
  menuItems.classList.toggle("show");
});

// Close-menu
window.addEventListener("click", (e) => {
  if (
    !menuItems.contains(e.target) &&
    e.target !== burgerButton &&
    !burgerButton.contains(e.target)
  ) {
    menuItems.classList.remove("show");
  }
});
closeMenu.addEventListener("click", () => {
  menuItems.classList.remove("show");
});

// Modal fc
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const learnMoreButton = document.getElementById("learnMoreButton");
const contactButton = document.getElementById("contactButton");
const closeButtons = document.querySelectorAll(".close");

// Learn MoreMD
learnMoreButton.addEventListener("click", () => {
  modalContent.innerHTML =
    "<p>Her kan du finde mere information om, hvordan vi kan hjælpe dig med at opnå økonomisk succes.</p>";
  modal.classList.add("show");
});

// Contact MD
contactButton.addEventListener("click", () => {
  modalContent.innerHTML = `
        <h3>Kontaktformular</h3>
        <form id="contactForm">
            <label for="name">Navn:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="creditCard">Kreditkort:</label>
            <input type="text" id="creditCard" name="creditCard" required pattern="\\d{16}">

            <label for="message">Besked:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Bliv medlem af vores Discord-server og begynd at investere med professionelle tips!</button>
        </form>
        <p id="contactSuccessMessage" style="display:none;">Din besked er sendt! Tak for din interesse.</p>
    `;
  modal.classList.add("show");
  setupContactForm();
});

// x MD
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").classList.remove("show"); // Hide the modal that contains this close button
  });
});

// set contact
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  const contactSuccessMessage = document.getElementById(
    "contactSuccessMessage"
  );

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactSuccessMessage.style.display = "block";
  });
}

// NewsPopup 
setTimeout(() => {
  document.getElementById("newsletterModal").classList.add("show");
}, 10000);

// News submit
const newsletterForm = document.getElementById("newsletterForm");
const newsletterSuccessMessage = document.getElementById(
  "newsletterSuccessMessage"
);

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterSuccessMessage.style.display = "block";
});
