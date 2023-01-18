let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-cons");
let loginBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-con");
let closeBtn = document.querySelector("#form-close");
let videoBtn = document.querySelectorAll(".vid-btn");
let navbar = document.querySelector(".nav-bar");
let Menubar = document.querySelector("#menu-bar");

window.onscroll = () => {
  searchBtn.classList.remove("fa-xmark");
  searchBar.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  Menubar.classList.remove("fa-xmark");
};

Menubar.addEventListener("click", () => {
  Menubar.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-xmark");
  searchBar.classList.toggle("active");
});

loginBtn.addEventListener("click", () => {
  loginForm.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
