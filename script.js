// Captura o formulário de cadastro
const form = document.querySelector("form");

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", (event) => {
  // Previne o comportamento padrão de submit do formulário
  event.preventDefault();

  // Captura os dados do formulário
  const formData = new FormData(form);

  // Converte os dados do formulário para um objeto JavaScript
  const data = Object.fromEntries(formData);

  // Envia os dados do formulário para o seu backend
  fetch("https://seusite.com/cadastro", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro ao enviar dados:", error);
    });
});