// Navigation Toggle
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Set initial header background
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

// Show Scroll Up
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

// // Change Header
// const scrollHeader = () => {
//   const header = document.getElementById("navbar");
//   const nav = header.querySelector("nav");
//   const links = header.querySelectorAll("div, h1");

//   if (window.scrollY >= 250) {
//     nav.classList.remove("bg-white");
//     nav.classList.add("bg-[#815328]");

//     links.forEach((el) => {
//       el.classList.remove("text-[#815328]");
//       el.classList.add("text-white");
//     });
//   } else {
//     nav.classList.remove("bg-[#815328]");
//     nav.classList.add("bg-white");

//     links.forEach((el) => {
//       el.classList.remove("text-white");
//       el.classList.add("text-[#815328]");
//     });
//   }
// };

// window.addEventListener("scroll", scrollHeader);

// Swiper for Customer Reviews
const reviewSwiper = new Swiper(".reviewSwiper", {
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
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(".home__data");


// Scroll Reveal
ScrollReveal().reveal('#home', {
  duration: 1000,
  origin: 'bottom',
  distance: '60px',
  opacity: 0,
  easing: 'ease-in-out',
  reset: true // Only animate once
});