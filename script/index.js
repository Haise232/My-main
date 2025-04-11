const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("activo");
});

let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (n + slides.length) % slides.length;
  slides[index].classList.add("active");
}

function moverSlide(n) {
  index += n;
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  mostrarSlide(index);
}

mostrarSlide(index);
