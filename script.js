const navbar = document.getElementById("navbar");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

 window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

 openMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

