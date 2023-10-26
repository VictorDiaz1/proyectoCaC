const nav = document.querySelector("#navbarId");
const abrir = document.querySelector("#abrirId");
const cerrar = document.querySelector("#cerrarId");
const btn = document.querySelector("#btn");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

fetch("./assets/lugares.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    traerJson(data);
  });
function traerJson(data) {
  data.forEach((elemento) => {
    let card = document.createElement("div");
    card.classList.add("card", elemento.provincia, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    let image = document.createElement("img");
    image.setAttribute("src", elemento.imagen);
    image.setAttribute("class", "img");
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let containerButtons = document.createElement("div");
    containerButtons.classList.add("container-buttons");
    let nombre = document.createElement("h3");
    nombre.classList.add("nombre");
    nombre.innerText = elemento.nombre.toUpperCase();
    containerButtons.appendChild(nombre);
    card.appendChild(containerButtons);
    document.getElementById("excursiones").appendChild(card);
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      card.classList.toggle("hide");
    });
  });
}
