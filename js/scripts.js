const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// MENU 768PX

let slideIndex = 0;


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

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  
  setInterval(nextSlide, 5000);

  
  showSlide(currentSlide);

//  banner 

const form = document.getElementById("form-agendamento");
  const mensagem = document.getElementById("mensagem-confirmacao");
  const oculosAnimado = document.querySelector(".oculos-animado");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      mensagem.style.display = "block";
      oculosAnimado.style.animation = "none"; 
      void oculosAnimado.offsetWidth;         
      oculosAnimado.style.animation = "flutuar 1.5s ease-out forwards";
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  });

  // agendamento