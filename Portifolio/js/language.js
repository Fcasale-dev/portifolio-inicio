const typedTexts = {
  en: ["front-end development", "java development", "react native development"],
  pt: [
    "desenvolvedor front-end",
    "desenvolvedor java",
    "desevolvedor react native",
  ],
};

let typed;

// Função que carrega as traduções e atualiza os elementos
async function loadLanguage(lang) {
  try {
    const response = await fetch("json/language.json");
    const translations = await response.json();

    // Atualiza os elementos com os dados de tradução
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-key");
      const translation = translations[lang][key];

      if (translation) {
        // Verifica se o elemento contém um <span> dentro dele
        if (el.querySelector("span")) {
          const span = el.querySelector("span[data-key]");
          if (span) {
            span.innerText = translation; // Substitui o texto do <span> sem afetar o resto
          }
        } else if (el.querySelector("i")) {
          const icon = el.querySelector("i");
          const text = el.innerText.replace(icon.outerHTML, "").trim();
          el.innerHTML = `${icon.outerHTML} ${translation}`;
        } else if (el.querySelector("a")) {
          const link = el.querySelector("a");
          el.innerHTML = `${translation} <a href="">${link.innerHTML}</a>`;
        } else {
          el.innerText = translation;
        }
      }
    });

    // Reinicia a animação de digitação com o idioma selecionado
    startTyped(lang);
  } catch (error) {}
}

// Função para iniciar a animação de digitação com o idioma selecionado
function startTyped(lang = "en") {
  if (typed) typed.destroy(); // Destroi a instância anterior do Typed
  typed = new Typed(".typing-text", {
    strings: typedTexts[lang],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
}

// Detecta mudança no select
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = document.getElementById("lang").value || "pt"; // Definindo o idioma padrão como português
  startTyped(currentLang); // Inicia a animação com o idioma atual

  // Inicializa a tradução com o idioma atual
  loadLanguage(currentLang);

  // Detecta mudança no select de idioma
  document.getElementById("lang").addEventListener("change", function () {
    const selectedLang = this.value;

    if (selectedLang === "pt") {
      location.reload(); // Volta ao HTML original e recarrega a página
    } else {
      loadLanguage(selectedLang); // Carrega as traduções e reinicia a animação
    }
  });
});
