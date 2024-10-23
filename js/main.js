var searchIcon = document.querySelector("#search-icon");
var searchBar = document.querySelector("#search-bar");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});


// swiper

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
   },
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});