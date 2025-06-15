// Navigation Toggle
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

const header = document.getElementById("navbar");
header.querySelector("nav").classList.add("bg-[#815328]");

const toggleMenu = () => {
  navMenu.classList.toggle("left-[100%]");
  navMenu.classList.toggle("left-[0]");

  hamburger.classList.toggle("ri-menu-line");
  hamburger.classList.toggle("ri-text-wrap");
};

hamburger.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Scroll Up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (window.scrollY >= 250) {
    scrollUpBtn.classList.add("bottom-6", "opacity-100", "pointer-events-auto");
    scrollUpBtn.classList.remove(
      "opacity-0",
      "pointer-events-none",
      "bottom-4"
    );
  } else {
    scrollUpBtn.classList.add("opacity-0", "pointer-events-none", "bottom-4");
    scrollUpBtn.classList.remove(
      "bottom-6",
      "opacity-100",
      "pointer-events-auto"
    );
  }
};

window.addEventListener("scroll", scrollUp);

// swiper
const swiper = new Swiper(".reviewSwiper", {
  speed: 400,
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  breakpoints: {
    641: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
