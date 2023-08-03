let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelector('.vid-btn');

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});


document.querySelector('.controls').addEventListener('click', (event) => {
  if (event.target.classList.contains('vid-btn')) {
    document.querySelector('.controls .active').classList.remove('active');
    event.target.classList.add('active');
    let src = event.target.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  }
});


// var swiper = new Swiper(".mySwiper", {
//   spaceBetween:20,
//   loop:true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     640:{
//       slidesPerView:1,
//     },
//     768: {
//       slidesPerView:2,
//     },
//     1024:{
//       slidesPerView:3,
//     },
//   }, 
// });

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next", // Selector for the next arrow element
    prevEl: ".swiper-button-prev", // Selector for the previous arrow element
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
