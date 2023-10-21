const nav = document.querySelector("#navbarId");
const abrir = document.querySelector("#abrirId");
const cerrar = document.querySelector("#cerrarId");

abrir.addEventListener("click",()=>{
  nav.classList.add("visible");
});

cerrar.addEventListener("click",()=>{
  nav.classList.remove("visible");
});

