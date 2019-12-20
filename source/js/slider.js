var exampleSlider = document.querySelector(".example-slider");

var sliderImageBefore = exampleSlider.querySelector(".example-slider__image--before");
var sliderImageAfter = exampleSlider.querySelector(".example-slider__image--after");

var buttonBefore = exampleSlider.querySelector(".example-slider__button--before");
var buttonAfter = exampleSlider.querySelector(".example-slider__button--after");

document.addEventListener("DOMContentLoaded", function (event) {
  buttonBefore.addEventListener("click", function (event) {
    event.preventDefault();

    sliderImageBefore.classList.remove("example-slider__image--close");
    sliderImageAfter.classList.add("example-slider__image--close");
    sliderImageBefore.classList.add("example-slider__image--show");
  });

  buttonAfter.addEventListener("click", function (event) {
    event.preventDefault();

    sliderImageAfter.classList.remove("example-slider__image--close");
    sliderImageBefore.classList.add("example-slider__image--close");
    sliderImageAfter.classList.add("example-slider__image--show");
  });
});
