$(document).ready(function () {
  // Ao clicar no ícone do menu, alterna o ícone e o menu de navegação
  $("#menu").click(function () {
    $(this).toggleClass("fa-times"); // Alterna o ícone
    $(".navbar").toggleClass("nav-toggle"); // Alterna a visibilidade do menu
  });

  // Evento de rolagem ou carregamento da página
  $(window).on("scroll load", function () {
    // Remove as classes do menu, caso o usuário role a página
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Exibe ou esconde o botão de rolar para o topo dependendo da posição da rolagem
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active"); // Mostra o botão
    } else {
      document.querySelector("#scroll-top").classList.remove("active"); // Esconde o botão
    }

    // Verifica se as seções estão visíveis e marca o link ativo na navbar
    $("section").each(function () {
      let height = $(this).height(); // Altura da seção
      let offset = $(this).offset().top - 200; // Posição da seção no topo da página
      let top = $(window).scrollTop(); // Posição atual da rolagem
      let id = $(this).attr("id"); // ID da seção

      // Se a seção está visível, marca o link correspondente como ativo
      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active"); // Remove a classe ativa de todos os links
        $(".navbar").find(`[href="#${id}"]`).addClass("active"); // Adiciona a classe ativa ao link da seção visível
      }
    });
  });

  // Animação de rolagem suave ao clicar nos links da navbar
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault(); // Previne o comportamento padrão de navegação
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top, // Rola até a posição da seção correspondente
      },
      500,
      "linear"
    ); // Tempo de animação de 500ms e tipo linear
  });
});

// Evento para alterar o título e o favicon da página quando o usuário alterna a visibilidade da página
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "visible") {
    // Quando a página se torna visível, atualiza o título e o favicon
    document.title = "Portifólio Felipe";
    $("#favicon").attr("href", "assets/images/favhand.png"); // Muda o favicon para o ícone de portfólio
  } else {
    // Quando a página perde foco, altera o título e o favicon para indicar que o usuário saiu
    document.title = "Volte para o portifólio";
    $("#favicon").attr("href", "caminho para o icone"); // Muda o favicon para outro ícone
  }
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 16,
});



const srtop = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 1000,
    reset: true,
  });


  /* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */


/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });
