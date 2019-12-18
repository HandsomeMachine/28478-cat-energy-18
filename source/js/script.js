var navMenu = document.querySelector(".main-nav");
var navMenuToggle = document.querySelector(".page-header__toggle");

/*закрытие блока с навигацией в мобильной версии*/

navMenuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navMenu.classList.toggle("main-nav--close");
  navMenuToggle.classList.toggle("page-header__toggle--open");
});
