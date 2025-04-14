function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider__input");
    const image = document.querySelector(".slider__image");
  
    const updateImageSize = debounce((value) => {

      image.style.width = `${value * 3}px`; 
      image.style.height = "auto";
    }, 100);

    slider.addEventListener("input", (event) => {
      updateImageSize(event.target.value);
    });
  });


const box = document.getElementById("box");

box.addEventListener("mousemove", _.debounce((event) => {
box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
}, 100))


