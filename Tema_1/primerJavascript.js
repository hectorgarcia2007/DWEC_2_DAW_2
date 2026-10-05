for (let contador = 1; contador < 6; contador++) {
    crearParrafo("Parrafo"+ contador);
    
}

function crearParrafo(texto) {
  let parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.body.appendChild(parrafo);
}
