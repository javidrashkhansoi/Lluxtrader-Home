$(document).ready(function () {
	$(".exclusive__slider").slick({
		adaptiveHeight: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 60000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchMove: true,
		waitForAnimate: true,
		appendArrows: $(".exclusive__buttons>div"),
	});
	$(".popular__slider").slick({
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchMove: true,
		waitForAnimate: true,
		appendArrows: $(".popular__buttons"),
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
})
