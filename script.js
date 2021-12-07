const linksInternos = document.querySelectorAll(".header-menu a[href^='#']");

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollPara);
});

function scrollPara(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const section = document.querySelector(id).offsetTop;

  window.scrollTo({
    top: section,
    behavior: "smooth",
  });
}

// ANIMAÇÃO

const target = document.querySelectorAll("[data-anima]");

function animeScroll() {
  const topo = window.pageYOffset - 1000;

  target.forEach(function (elemento) {
    console.log(elemento.offsetTop);
    if (topo > elemento.offsetTop) {
      elemento.classList.add("anima");
    }
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});

// maquina de escrever

const textoModificado = document.querySelector(".experiencia-texto");

const novoTexto = textoModificado.textContent.split("");

novoTexto.forEach((letra, index) => {
  textoModificado.innerHTML = " ";
  setTimeout(function () {
    textoModificado.innerHTML += letra;
  }, 30 * index);
});

// MENU MOBILE

const botao = document.querySelector(".botao-menu");
const menu = document.querySelector(".header-menu");

botao.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});
