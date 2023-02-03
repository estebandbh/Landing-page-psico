let iconMenu = document.querySelector(".icon__bar");
let listaMenu = document.querySelector(".lista__menu");

iconMenu.addEventListener("click", () => {
  listaMenu.classList.toggle("disable");
});
 


window.addEventListener('scroll', ()=>{
  let header = document.querySelector('.header')
  header.classList.toggle('sticky', window.scrollY > 100)
  header.classList.toggle('change', window.scrollY > 500)
  header.classList.toggle('changeCol', window.scrollY > 1000)
}
)

