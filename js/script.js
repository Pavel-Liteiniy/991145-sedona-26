var search_form = document.querySelector(".search-form");
var access_button = document.querySelector(".access-button");

access_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	search_form.classList.toggle("hide-search-form");
	search_form.classList.toggle("show-search-form");
});