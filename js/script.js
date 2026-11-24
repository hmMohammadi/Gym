const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const themeToggle = document.querySelector(".theme-toggle");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});

// Dark/light mode
themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeToggle.textContent = isDark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

// Contact form validation and confirmation
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        formMessage.textContent = "Please complete all fields with a valid email address.";
        return;
    }

    const name = document.querySelector("#name").value.trim();
    formMessage.textContent = `Thanks, ${name}! Your message is ready to be sent.`;
    contactForm.reset();
});

// Automatically update the copyright year
document.querySelector("#year").textContent = new Date().getFullYear();