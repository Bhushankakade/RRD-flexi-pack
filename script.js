const navbar = document.getElementById("navbar");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");

  if (isOpen) {
    mobileMenu.classList.remove("open");
    menuIcon.classList.remove("ph-x");
    menuIcon.classList.add("ph-list");
  } else {
    mobileMenu.classList.add("open");
    menuIcon.classList.remove("ph-list");
    menuIcon.classList.add("ph-x");
  }
});

const dropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const icon = this.querySelector(".ph-caret-down");

    content.classList.toggle("show");
    icon.classList.toggle("rotate-180");
  });
});

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
    menuIcon.classList.remove("ph-x");
    menuIcon.classList.add("ph-list");
  }
});
