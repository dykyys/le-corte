// $(document).ready(function () {
//   $('.gallery__list').slick({
//     arrows: true,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 250,
//     centerMode: true,
//     variableWidth: true,
//   });
// });

$('.gallery__list').slick({
  dots: false,
  arrows: true,
  autoplay: true,
  // infinite: true,
  slidesToShow: 2,
  // slidesToScroll: 1,
  autoplaySpeed: 750,
  centerMode: false,
  // variableWidth: true,
  nextArrow: '.next',
  prevArrow: '.prev',
  lazyLoad: 'ondemand',
});
