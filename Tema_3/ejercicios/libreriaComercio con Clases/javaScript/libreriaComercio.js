import { Libro } from "./libro.js";

const form = document.getElementById("formulario");

form.addEventListener("submit", rellenarLibro);

function rellenarLibro(event) {
  event.preventDefault();
  const nombre = document.getElementById("idNombre").value;
  const paginas = document.getElementById("idPaginas").value;
  const prestado = document.getElementById("idPrestado").checked;

  const nuevoLibro = new Libro(nombre, paginas, prestado);

  let arrayLibros = [];
  let arrayIntroducir = JSON.parse(
    sessionStorage.getItem("arrayLibrosAlmacen"),
  );
  if (arrayIntroducir === null) {
  } else {
    arrayLibros = arrayIntroducir;
  }

  arrayLibros.push(nuevoLibro);

  sessionStorage.setItem("arrayLibrosAlmacen", JSON.stringify(arrayLibros));

  const almacen = document.getElementById("resultado");
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `Se introdujo correctamente el libro ${nuevoLibro.nombre}`;
  almacen.appendChild(nuevoDiv);
}
