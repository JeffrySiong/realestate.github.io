const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  })
);

// SWIPER JS
const swiper = new Swiper(".home__swiper", {
  loop: true,
  speed: 800,
  parallax: true,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",

    formatFractionCurrent: (number) => {
      return "0" + number;
    },
    formatFractionTotal: (number) => {
      return "0" + number;
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
