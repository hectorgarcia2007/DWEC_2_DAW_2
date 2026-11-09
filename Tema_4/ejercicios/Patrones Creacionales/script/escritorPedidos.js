function generateHTMLCard() {
  const arrayObjectCard = JSON.parse(localStorage.getItem(keyLocalStorage));
  const contenedorCards = document.getElementById("mostrarPedidos");
  const nuevoDiv = document.createElement("div");
  arrayObjectCard.forEach((valueObjectCard) => {
    try {
      nuevoDiv.innerHTML = `
       <p>${valueObjectCard.nombreSolicitante}</p>
       <p>${valueObjectCard.tipoProducto}</p>
       <p>${valueObjectCard.nombreProducto}</p>
       <p>${valueObjectCard.precio}</p>
       <p>${valueObjectCard.propiedadEspecifica}</p>
       <p>${valueObjectCard.cantidad == null ? "a" : "b"}</p>
       <p>${valueObjectCard.prioridad == null ? "a" : "b"}</p>
       <p>${valueObjectCard.observaciones == null ? "a" : "b"}</p>
       
   `;
      nuevoDiv.classList.add("card");
      contenedorCards.appendChild(nuevoDiv);
    } catch (error) {
      console.log(error);
    }
  });
}
export { generateHTMLCard };
