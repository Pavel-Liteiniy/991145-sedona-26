var search_form = document.querySelector(".search-form");
var access_button = document.querySelector(".access-button");
var form = search_form.querySelector("form");
var arrival_date = form.querySelector("[id=arrival-date]");
var departure_date = form.querySelector("[id=date-of-departure]");
var adult_guest = form.querySelector("[id=adult-guest]");


access_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	search_form.classList.toggle("hide-search-form");
	search_form.classList.toggle("show-search-form");
	search_form.classList.remove("error-search-form");
});

form.addEventListener("submit", function (evt) {
    if (!arrival_date.value || !departure_date.value || !adult_guest.value) {
      evt.preventDefault();
      search_form.classList.remove("error-search-form");
      search_form.offsetWidth = search_form.offsetWidth;
      search_form.classList.add("error-search-form");
    }
});