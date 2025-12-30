const navbar = document.getElementById("navbar");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".feature-panel");
const whyItems = document.querySelectorAll(".why-item");


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


tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    // activate clicked
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");

     tab.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    });
  });
});


whyItems.forEach(item => {
  const header = item.querySelector(".why-header");

  header.addEventListener("click", () => {
    // close others
    whyItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // toggle current
    item.classList.toggle("active");
  });
});




