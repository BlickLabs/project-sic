// var logosHomeCarousel = $('.home-clients-carousel');

// logosHomeCarousel.owlCarousel ({
//   loop: true,
//   nav: true,
//   dots: true,
//   navText: ['<img class="solutions-navigation-icon" src="img/icons/icon-arrow-left.png" />', '<img class="solutions-navigation-icon" src="img/icons/icon-arrow-right.png" />'],
  
// });

// logosHomeCarousel.each(function(index) {
//   $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='solutions-navigation-controls'></div>");
// });

var logosHomeCarousel = $('.home-clients-carousel');

logosHomeCarousel.owlCarousel({
  loop: false,
  center: false,
  autoWidth: true,
  margin: 0,
  nav: true,
  dots: false,
  navText: ['<img class="navigation-icon" src="img/icons/arrow-blue-left.png" />', '<img class="navigation-icon" src="img/icons/arrow-blue-right.png" />'],
  
})