import { ARRAY_DIVISAS } from "./constantes.js";
import { exchangeDivisa } from "./exchanger.js";
document.addEventListener("submit", cambioDivisa);

function cambioDivisa(event) {
  event.preventDefault();

  let importe = Number.parseInt(document.getElementById("importe").value);

  let origen = document.getElementById("origen");
  let valorOrigen = origen.options[origen.selectedIndex].value;
  let destino = document.getElementById("destino");
  let valorDestino = destino.options[destino.selectedIndex].value;

  const fechaActual = new Date(Date.now());
  const fechaString = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;

  const historico = document.getElementById("idHistorico");
  let divisaCambiada = exchangeDivisa(importe, valorOrigen, valorDestino);
  const nuevoLi = document.createElement("li");
  nuevoLi.innerHTML = `<li>${fechaString} Importe ${importe} ${valorOrigen} - ${divisaCambiada} ${valorDestino}</li>`;
  historico.appendChild(nuevoLi);
}
