let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

setInterval(() => {
	if (isMobile.any()) {
		document.querySelector(".header__profile").classList.add("touch");
		document.querySelector(".header__profile").classList.remove("mouse");

		document.querySelector(".categories").classList.add("touch");
		document.querySelector(".categories").classList.remove("mouse");
	} else {
		document.querySelector(".header__profile").classList.add("mouse");
		document.querySelector(".header__profile").classList.remove("touch");

		document.querySelector(".categories").classList.add("mouse");
		document.querySelector(".categories").classList.remove("touch");
	}
}, 100);

document.querySelector(".icon-profile__arrows").addEventListener("click", () => {
	if (document.querySelector(".header__profile").classList.contains("touch")) {
		document.querySelector(".icon-profile__arrows").classList.toggle("active");
		document.querySelector(".profile__menu").classList.toggle("active");
	}
});

document.body.addEventListener("click", (event) => {
	if (!event.target.closest(".header__profile")) {
		document.querySelector(".icon-profile__arrows").classList.remove("active");
		document.querySelector(".profile__menu").classList.remove("active");
	}
});

document.querySelector(".header__burger").addEventListener("click", () => {
	document.querySelector(".header__burger").classList.toggle("active");
	document.querySelector(".header__navigation").classList.toggle("active");
	document.body.classList.toggle("block");
});

let quotesButton = document.querySelector(".quotes__button-button");
quotesButton.addEventListener("click", function randomQuote() {
	let quotes = document.querySelectorAll(".quotes__row");
	let quotesLength = quotes.length;
	let randomInteger = Math.floor(Math.random() * quotesLength);
	if (!quotes[randomInteger].classList.contains("display-quote")) {
		quotes.forEach(quote => {
			quote.classList.remove("display-quote");
		})
		quotes[randomInteger].classList.add("display-quote");
	} else {
		quotes.forEach(quote => {
			quote.classList.remove("display-quote");
		})
		quotes[randomInteger + 1 === quotesLength ? randomInteger - 1 : randomInteger + 1].classList.add("display-quote");
	}
});

let input = document.querySelector(".form__email>input");
input.placeholder = "Ваш e-mail";
input.addEventListener("focus", () => {
	input.placeholder = "";
});
input.addEventListener("blur", () => {
	if (!input.value) {
		input.placeholder = "Ваш e-mail";
	}
});
input.addEventListener("input", () => {
	if (input.value) {
		document.querySelector(".form__button").classList.add("focus");
		document.querySelector(".form__button>button").removeAttribute("disabled");
	} else {
		document.querySelector(".form__button").classList.remove("focus");
		document.querySelector(".form__button>button").setAttribute("disabled", "true");
	}
});
