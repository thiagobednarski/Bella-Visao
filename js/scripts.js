const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// MENU 768PX

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel .slide");

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 4000);



 const video = document.getElementById('video-loja');

  
  video.addEventListener('pause', () => {
    video.play();
  });

  video.addEventListener('click', (e) => {
    e.preventDefault();
    video.play();
  });

  // video 