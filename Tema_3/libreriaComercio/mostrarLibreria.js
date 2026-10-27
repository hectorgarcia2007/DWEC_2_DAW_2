let arrayAlmacenado = JSON.parse(sessionStorage.getItem("arrayPersonaAlmacen"));
const almacen = document.getElementById("almacen");
for (let index = 0; index < arrayAlmacenado.length; index++) {
  const objetoAlmacenado = arrayAlmacenado[index];
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `<div>
          <h3>${objetoAlmacenado.nombre}</h3>
          <p>${objetoAlmacenado.paginas}</p>
          <p>${objetoAlmacenado.prestado}</p>
        </div>`;
  almacen.appendChild(nuevoDiv);
}
