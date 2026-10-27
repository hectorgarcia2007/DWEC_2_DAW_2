let arrayAlmacenado = JSON.parse(sessionStorage.getItem("arrayLibrosAlmacen"));
const almacen = document.getElementById("almacen");
for (let index = 0; index < arrayAlmacenado.length; index++) {
  const objetoAlmacenado = arrayAlmacenado[index];
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `<div class="tarjeta">
          <h3 class="tituloTarjeta">Nombre: ${objetoAlmacenado.nombre}</h3>
          <p>Paginas: ${objetoAlmacenado.paginas}</p>
          <p>Prestado: ${objetoAlmacenado.prestado==="on"?"Si":"No"}</p>
        </div>`;
  almacen.appendChild(nuevoDiv);
}
