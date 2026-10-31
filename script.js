
// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================
// SCROLL REVEAL ANIMATION
// ============================

const revealElements = document.querySelectorAll(
  ".placeholder-section, .hero-content, .hero-visual"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// ============================
// CURRENT YEAR
// ============================

const footerText = document.querySelector(".footer p");

if (footerText) {
  footerText.textContent =
    `© ${new Date().getFullYear()} Salman. Designed & Developed with care.`;
}

// ============================
// NAVIGATION ACCESSIBILITY
// ============================

menuToggle.setAttribute("aria-expanded", "false");

console.log("Salman's Portfolio Loaded Successfully!");
