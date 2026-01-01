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



document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#page2");
  const blobs = container?.querySelectorAll(".blob");

  if (!container || !blobs.length) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(blobs, {
      x,
      y,
      stagger: 0.12,
      duration: 1,
      ease: "power3.out"
    });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to(blobs, {
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    });
  });
});







 