const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 4000);


emailjs.init("7LEW-gXEQ5ExKx9_9"); 

const form = document.getElementById("form-agendamento");
const mensagem = document.getElementById("mensagem-confirmacao");
const oculosAnimado = document.querySelector(".oculos-animado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    nome: document.getElementById("nome").value,
    whatsapp: document.getElementById("whatsapp").value,
    tipo: document.getElementById("tipo").value,
    mensagem: document.getElementById("mensagem").value,
  };

  const serviceID = "service_9nh4xjp";
  const templateID = "template_4xh5epg";

  emailjs.send(serviceID, templateID, formData)
    .then(() => {
      form.reset();
      mensagem.style.display = "block";
      oculosAnimado.style.animation = "none"; 
      void oculosAnimado.offsetWidth; 
      oculosAnimado.style.animation = "flutuar 1.5s ease-out forwards";
    })
    .catch((error) => {
      console.error("Erro no envio:", error);
      alert("Erro ao enviar. Verifique os dados ou tente novamente.");
    });

  console.log("Formulário enviado:", formData);
});