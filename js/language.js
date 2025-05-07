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
  const selectElement = document.getElementById("lang");
  let currentLang = localStorage.getItem("selectedLang") || "pt";

  // Define o valor atual no <select>
  selectElement.value = currentLang;

  // Inicia animação e carrega linguagem
  startTyped(currentLang);
  loadLanguage(currentLang);

  selectElement.addEventListener("change", function () {
    const selectedLang = this.value;

    if (selectedLang === "pt") {
      localStorage.removeItem("selectedLang");
      location.reload(); // Recarrega com padrão (pt)
    } else {
      localStorage.setItem("selectedLang", selectedLang);
      location.reload(); // Recarrega para aplicar a linguagem com o novo valor
    }
  });
});





