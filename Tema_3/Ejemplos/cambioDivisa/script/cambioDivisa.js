document.addEventListener("submit", cambioDivisa);

function cambioDivisa(event) {
  event.preventDefault();

  let importe = Number.parseInt(document.getElementById("importe").value);

  let origen = document.getElementById("origen");
  let valorOrigen = origen.options[origen.selectedIndex].value;
  let destino = document.getElementById("destino");
  let valorDestino = destino.options[destino.selectedIndex].value;
}
