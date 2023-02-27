// const images = document.querySelectorAll('.slider .slider-line img');
// const sliderLine = document.querySelector('.slider .slider-line');
// let count = 0;
// let width;

// function init() {
//   console.log('resize');
//   width = document.querySelector('.slider').offsetWidth;
//   sliderLine.style.width = width * images.length + 'px';
//   images.forEach(item => {
//     item.style.width = width + 'px';
//     item.style.height = 'auto';
//   });
//   rollSlider();
// }

// init();
// window.addEventListener('resize', init);

// document.querySelector('.slider-next').addEventListener('click', function () {
//   count++;
//   if (count >= images.length) {
//     count = 0;
//   }
//   rollSlider();
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//   count--;
//   if (count < 0) {
//     count = images.length - 1;
//   }
//   rollSlider();
// });

// function rollSlider() {
//   sliderLine.style.transform = 'translate(-' + count * 468 + 'px)';
// }


$('.slider-line').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});