window.addEventListener("scroll", () => {
	const nav = document.querySelector("nav");
	if (window.scrollY > 20) {
		nav.classList.add("navbar-scrolled");
	} else {
		nav.classList.remove("navbar-scrolled");
	}
});
