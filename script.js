const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = form.querySelector('input[placeholder="Seu nome"]').value;
  const whatsapp = form.querySelector('input[placeholder="WhatsApp"]').value;
  const data = form.querySelector('input[type="date"]').value;
  const tipo = form.querySelector('input[placeholder="Tipo de evento"]').value;
  const msg = form.querySelector("textarea").value;

  const texto = `
        Olá, gostaria de um orçamento\n
        Nome: ${nome}\n
        WhatsApp: ${whatsapp}\n
        Data do evento: ${data}\n
        Tipo de evento: ${tipo}\n
        Detalhes: ${msg}
    `;

  const numero = "5511958033749";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
