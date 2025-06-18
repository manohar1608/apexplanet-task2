// Menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Alert on contact form submission
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    contactForm.reset();
  });
}
