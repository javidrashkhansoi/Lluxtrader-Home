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
	} else {
		document.querySelector(".header__profile").classList.add("mouse");
		document.querySelector(".header__profile").classList.remove("touch");
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
