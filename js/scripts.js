const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// MENU 768PX

let slideIndex = 0;

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 4000);

const video = document.getElementById("video-loja");

video.addEventListener("pause", () => {
  video.play();
});

video.addEventListener("click", (e) => {
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

// const form = document.getElementById("form-agendamento");
// const mensagem = document.getElementById("mensagem-confirmacao");
// const oculosAnimado = document.querySelector(".oculos-animado");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   const response = await fetch(form.action, {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   if (response.ok) {
//     form.reset();
//     mensagem.style.display = "block";
//     oculosAnimado.style.animation = "none";
//     void oculosAnimado.offsetWidth;
//     oculosAnimado.style.animation = "flutuar 1.5s ease-out forwards";
//   } else {
//     alert("Erro ao enviar. Tente novamente.");
//   }
 

// });

// emailjs.init("7LEW-gXEQ5ExKx9_9");

// document.getElementById("form-agendamento").addEventListener("submit", function(evnet){
//   EventTarget.preventDefault();

//   const formData = {
//     name: document.getElementById("nome").value,
//     whatsapp: document.getElementById("whatsapp").value,
//   }

//   const serviceID = "service_9nh4xjp";
//   const templateID = "template_4xh5epg";

//   emailjs.send(serviceID,templateID, formData);

// });
// agendamento
 emailjs.init("7LEW-gXEQ5ExKx9_9"); // ⬅️ Substitua pela sua Public Key

  const form = document.getElementById("form-agendamento");
  const mensagem = document.getElementById("mensagem-confirmacao");
  const oculosAnimado = document.querySelector(".oculos-animado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const formData = {
      nome: document.getElementById("nome").value,
      whatsapp: document.getElementById("whatsapp").value,
      tipo: document.getElementById("tipo").value,
      mensagem: document.getElementById("mensagem").value,
    };

    const serviceID = "service_9nh4xjp";     // ⬅️ Substitua pelo seu
    const templateID = "template_4xh5epg";   // ⬅️ Substitua pelo seu

    emailjs.send(serviceID, templateID, formData)
      .then(() => {
        form.reset();
        mensagem.style.display = "block";
        oculosAnimado.style.animation = "none"; // reseta
        void oculosAnimado.offsetWidth; // reflow
        oculosAnimado.style.animation = "flutuar 1.5s ease-out forwards";
      })
      .catch((error) => {
        console.error("Erro no envio:", error);
        alert("Erro ao enviar. Verifique os dados ou tente novamente.");
      });
  });



