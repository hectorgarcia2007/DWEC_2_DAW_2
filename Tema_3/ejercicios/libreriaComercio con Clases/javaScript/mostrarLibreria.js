import { Libro } from "./libro.js";

let arrayAlmacenado = JSON.parse(sessionStorage.getItem("arrayLibrosAlmacen"));
const almacen = document.getElementById("almacen");
for (let index = 0; index < arrayAlmacenado.length; index++) {
  const objetoAlmacenado = new Libro(
    arrayAlmacenado[index].nombre,
    arrayAlmacenado[index].paginas,
    arrayAlmacenado[index].prestado,
  );
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = objetoAlmacenado.pasarAHtml();
  almacen.appendChild(nuevoDiv);
}
