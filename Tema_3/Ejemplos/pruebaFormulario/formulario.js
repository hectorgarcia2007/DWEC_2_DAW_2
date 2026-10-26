document.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("idNombre").value;
  const apellido = document.getElementById("idApellido").value;
  const nacimiento = document.getElementById("idNacimiento").value;
  const calle = document.getElementById("idCalle").value;
  const correo = document.getElementById("idCorreo").value;

  const persona = {
    nombre: nombre,
    apellido: apellido,
    nacimiento: nacimiento,
    calle: calle,
    correo: correo,
  };
  sessionStorage.setItem("UsuarioAnterior", JSON.stringify(persona));
});
