$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2.02,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: false,
        autoplaySpeed: 4000,
        prevArrow : $(".left-arrow"),
        nextArrow : $(".right-arrow"),
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1.03,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
            breakpoint: 1030,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
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
                slidesToShow: 1,
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



