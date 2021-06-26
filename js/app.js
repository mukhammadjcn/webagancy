$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: false,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1.03,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 0.6,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});

$(document).ready(function(){
    $('.price-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});

var navbar = document.querySelector(".navbar")
function showMenu(){
    navbar.style.left = '0px'
}
function hideMenu(){
    navbar.style.left = '-5000px'
}

