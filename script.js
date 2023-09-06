new Swiper('.image-slider', {
  // Optional parameters

  loop: true,
  loopedSlides: 2,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  grabCursor: true,

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.image-slider',
  },

  autoHeight: true,

  spaceBetween: 40,

  slidesPerView: 1,
})
