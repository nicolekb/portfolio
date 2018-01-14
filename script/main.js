//*******//
//*	Template Name: main.js
//* Desc: Website functionaity
//*******//

//***** Slick *****//
$(document).ready(function($) {
	
	$('.work-items').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  fade: true,
	  cssEase: 'linear',
	  responsive: [{
            breakpoint: 600,
            settings: {
                arrows: true,
            }

      }],

	});
});

//***** Scroll *****//
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//***** Animate *****//
$(document).ready(function($) {
 new WOW().init();
});