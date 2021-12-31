$(document).ready(function () {
	$(".exclusive__slider").slick({
		arrows: true,
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
	})
})
