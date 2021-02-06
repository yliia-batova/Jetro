$(function () {
  $('.slider__inner').slick({
    arrows: true,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prew"><img src="images/previous.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg"></button>',
  });

  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,          
  }); 

  $('.header__menu-btn').on('click', function(){
    $('.header__menu .menu').slideToggle();
  });

});

