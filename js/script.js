let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

var currentSlide = 0;
var slides = document.getElementById("slideshow").getElementsByTagName("img");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

function showSlide(n) {
  // Приховуємо всі слайди
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Відображаємо обраний слайд
  slides[n].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Переключення слайдів при натисканні кнопок
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Показати перший слайд при завантаженні сторінки
showSlide(currentSlide);
