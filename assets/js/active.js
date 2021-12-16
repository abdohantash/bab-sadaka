(function ($) {
	'use strict';

	/*=========== Silde Active ===========*/
	// Event Slide
	$('.event-slide-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		asNavFor: '.event-filters-active',
	});

	$('.event-filters-active').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		dots: false,
		asNavFor: '.event-slide-active'
	});

	// Activity slider active
	$('.activity-slider-active').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		arrows: true,
		dots: false,
		prevArrow: '<button class="arrow-prev"><span><i class="fa fa-angle-left"></i></span></button>',
		nextArrow: '<button class="arrow-next"><span><i class="fa fa-angle-right"></i></span></button>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	// Banner Slide
	$('.banner-slide-active').slick({
		fade: true,
		speed: 2000,
    	infinite: true,
    	cssEase: 'ease-in-out',
		autoplay: true,
		autoplaySpeed: 23000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true
	});






	/*=========== Mobile Menu ===========*/
	$('.header--style-1 nav.menu').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});

	$('.header--style-2 nav.menu').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});





	/*=========== Wow Active ===========*/
	new WOW().init();





	/*=========== ScrollUp ===========*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slideInRight'
	});


	/*=========== Video Popup ===========*/
	$('a.video--trigger').yu2fvl();


	/*=========== Fakeloader ===========*/
	$('.fakeloader').fakeLoader({
		timeToHide: 1200,
		spinner: 'spinner3'
	});


})(jQuery);