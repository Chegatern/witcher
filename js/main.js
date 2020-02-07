var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow'
  },
  loop: true,
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});

//  menu-button-active

let menuButton = document.querySelector('.menu-button');

let menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
});


