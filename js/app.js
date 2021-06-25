$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        autoplaySpeed: 6000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1
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

$(document).ready(function(){
    $('.price-slider').slick({
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 6000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1
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

