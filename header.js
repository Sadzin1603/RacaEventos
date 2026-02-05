const header = document.querySelector("header");
let ultimoScroll = 0;

window.addEventListener("scroll", () => {
  const scrollAtual = window.pageYOffset;

  if (scrollAtual > ultimoScroll) {
    // descendo
    header.classList.add("hide");
  } else {
    // subindo
    header.classList.remove("hide");
  }

  ultimoScroll = scrollAtual;
});