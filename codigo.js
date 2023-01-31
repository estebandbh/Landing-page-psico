let iconMenu = document.querySelector(".icon__bar");
let listaMenu = document.querySelector(".lista__menu");

iconMenu.addEventListener("click", () => {
  listaMenu.classList.toggle("disable");
});
 