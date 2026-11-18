document.addEventListener("DOMContentLoaded", () => {
  // TODO: recuperar localStorage o copiar expedicionesIniciales.
  // TODO: registrar los eventos click y actualizar la interfaz.
  let arrayTask = [];
  let arrayIntroducir = JSON.parse(localStorage.getItem("arrayTask"));
  if (arrayIntroducir === null) {
    arrayTask = expedicionesIniciales;
  } else {
    arrayTask = arrayIntroducir;
  }
  sessionStorage.setItem("arrayTask", JSON.stringify(arrayTask));
});
