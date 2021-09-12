$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" alt="1" src="./images/icons/Arrowleft.svg">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" alt="1" src="./images/icons/Arrowright.svg">',
            responsive: [
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  dots: true
                }
              }
            ]
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('active')
    });

});