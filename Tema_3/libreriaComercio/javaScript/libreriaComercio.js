document.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("idNombre").value;
  const paginas = document.getElementById("idPaginas").value;
  const prestado = document.getElementById("idPrestado").value;

  const libro = {
    nombre: nombre,
    paginas: paginas,
    prestado: prestado,
  };
  let arrayLibros = [];
  let arrayIntroducir = JSON.parse(
    sessionStorage.getItem("arrayLibrosAlmacen"),
  );
  if (arrayIntroducir === null) {
  } else {
    arrayLibros = arrayIntroducir;
  }

  arrayLibros.push(libro);

  sessionStorage.setItem("arrayLibrosAlmacen", JSON.stringify(arrayLibros));
  
  const almacen = document.getElementById("resultado");
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `Se introdujo correctamente el libro ${libro.nombre}`;
  almacen.appendChild(nuevoDiv);
});
