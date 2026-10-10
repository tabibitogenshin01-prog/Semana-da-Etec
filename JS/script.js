document.addEventListener("DOMContentLoaded", () => {

  /* ==============================
     ELEMENTOS
     ============================== */

  const navbar = document.querySelector(".navbar");
  const topButton = document.querySelector(".top-button");
  const galleryItems = document.querySelectorAll(".gallery-item");


  /* ==============================
     NAVBAR + BOTÃO TOPO
     ============================== */

  const updateScrollUI = () => {

    const scrollY = window.scrollY;

    navbar?.classList.toggle(
      "navbar-scrolled",
      scrollY > 35
    );

    topButton?.classList.toggle(
      "visivel",
      scrollY > 450
    );
  };


  updateScrollUI();

  window.addEventListener(
    "scroll",
    updateScrollUI,
    { passive: true }
  );


  /* ==============================
     FADE DA GALERIA
     ============================== */

  if (galleryItems.length) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add("in-view");

          observer.unobserve(entry.target);
        });

      },
      {
        threshold: 0.15
      }
    );


    galleryItems.forEach((item, index) => {

      item.style.transitionDelay =
        `${(index % 4) * 80}ms`;

      observer.observe(item);
    });

  } else {

    console.warn(
      "Nenhum elemento .gallery-item foi encontrado."
    );
  }


  /* ==============================
     VOLTAR AO TOPO
     ============================== */

  topButton?.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});

const galeria = document.querySelector("#galeria");

galeria?.addEventListener("mousemove", (e) => {

    const rect = galeria.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    galeria.style.setProperty("--mouse-x", `${x}px`);
    galeria.style.setProperty("--mouse-y", `${y}px`);

    galeria.classList.add("mouse-active");
});

galeria?.addEventListener("mouseleave", () => {
    galeria.classList.remove("mouse-active");
});

// NavBar

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("heropage");

  // Onde a animação começa
  const inicio = hero.offsetTop + hero.offsetHeight - 400;

  // Quantos pixels de scroll a animação vai durar
  const distanciaAnimacao = 200;

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    // Calcula o progresso entre 0 e 1
    const progresso = Math.min(
      Math.max((scroll - inicio) / distanciaAnimacao, 0),
      1
    );

    if (scroll >= inicio) {
      navbar.classList.add("navbar-fixa");

      navbar.style.opacity = progresso;
      navbar.style.transform = `translateY(${(1 - progresso) * -100}%)`;
    } else {
      navbar.classList.remove("navbar-fixa");

      navbar.style.opacity = "";
      navbar.style.transform = "";
    }
  });
});

// Imagem Original Modal
const botoes = document.querySelectorAll('.btn-modal');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const imagemUrl = botao.getAttribute('data-imagem');
    const imageURLbig = botao.getAttribute('data-imageBig');
    
    Swal.fire({
      // Injeta a imagem ocupando 100% do bloco
      html: `<img src="${imagemUrl}" style="width: 100%; display: block; height: auto;  border-radius: 10px;   border-bottom: 0.5px #3c7d73 solid;
    border-right: 0.5px #3c7d73 solid;">`,
      
      width: '800px',            // Define a largura máxima desejada para a imagem
      padding: 0,                // Remove o espaçamento interno padrão
      background: 'transparent', // Torna o fundo do modal transparente para sumir com as bordas brancas
      showConfirmButton: false,  // Remove o botão de confirmação
      showCloseButton: false,     // Mantém o "X" para fechar
      
      // Remove sombras e estilos extras do container que geram bordas sutis
      customClass: {
        popup: 'modal-imagem-limpa'
      }
    });
    if (imageURLbig){
    Swal.fire({
      // Injeta a imagem ocupando 100% do bloco
      html: `<img src="${imageURLbig}" style="width: 100%; display: block; height: auto;  border-radius: 10px;   border-bottom: 0.5px #3c7d73 solid;
    border-right: 0.5px #3c7d73 solid;">`,
      
      width: '600px',            // Define a largura máxima desejada para a imagem
      padding: 0,                // Remove o espaçamento interno padrão
      background: 'transparent', // Torna o fundo do modal transparente para sumir com as bordas brancas
      showConfirmButton: false,  // Remove o botão de confirmação
      showCloseButton: false,     // Mantém o "X" para fechar
      
      // Remove sombras e estilos extras do container que geram bordas sutis
      customClass: {
        popup: 'modal-imagem-limpa'
      }
    });
  }
  });
});

    const themeToggle = document.getElementById('themeToggle');
    const galeria1 = document.getElementById('galeria');
    const animais = document.getElementById('animais');

    themeToggle.addEventListener('change', function () {
        galeria1.classList.toggle('d-none', this.checked);
        animais.classList.toggle('d-none', !this.checked);
    });