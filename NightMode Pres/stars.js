document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-dark-mode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    const isNight = body.classList.toggle("night");
    body.classList.toggle("day", !isNight);
    toggleButton.setAttribute("aria-pressed", isNight ? "true" : "false");
  });

  // Set default mode
  body.classList.add("night");
});

document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", function () {
    const body = document.body;

    // Toggle between dark-mode and light-mode
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      this.setAttribute("aria-pressed", "true"); // Update button state
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      this.setAttribute("aria-pressed", "false"); // Update button state
    }
  });
