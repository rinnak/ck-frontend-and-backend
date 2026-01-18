const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navItems = document.querySelectorAll(".nav__item");

const navOverlay = document.createElement("div");
navOverlay.className = "nav-overlay";
document.body.appendChild(navOverlay);

function activateMenuItem(clickedItem) {
  navItems.forEach((item) => {
    item.classList.remove("active");
  });
  clickedItem.classList.add("active");
}

function toggleMenu() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  mainNav.classList.toggle("active");
  navOverlay.classList.toggle("active");

  document.body.style.overflow = mainNav.classList.contains("active")
    ? "hidden"
    : "";
}

menuToggle.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    activateMenuItem(link);
    if (window.innerWidth <= 875) {
      toggleMenu();
    }
  });
});

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
