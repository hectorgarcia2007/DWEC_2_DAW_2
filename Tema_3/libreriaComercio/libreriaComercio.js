document.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("idNombre").value;
  const paginas = document.getElementById("idPaginas").value;
  const prestado = document.getElementById("idPrestado").value;

  const persona = {
    nombre: nombre,
    paginas: paginas,
    prestado: prestado,
  };
  let arrayPersonas = [];
  let arrayIntroducir = JSON.parse(
    sessionStorage.getItem("arrayPersonaAlmacen"),
  );
  if (arrayIntroducir === null) {
  } else {
    arrayPersonas = arrayIntroducir;
  }

  arrayPersonas.push(persona);

  sessionStorage.setItem("arrayPersonaAlmacen", JSON.stringify(arrayPersonas));
});
