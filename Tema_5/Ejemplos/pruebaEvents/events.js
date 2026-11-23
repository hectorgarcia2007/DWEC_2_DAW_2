import { ID_BTN_RESTAR, ID_BTN_SUMAR } from "./constantes.js";

document.getElementById("btnSumar").addEventListener("click", clickEvent);
document.getElementById("btnRestar").addEventListener("click", clickEvent);
document
  .getElementById("btnRestar")
  .addEventListener("contextmenu", clickEvent);

function clickEvent(event) {
  console.log("xd");
  const spanResultado = document.getElementById("resultado");
  let resultado = Number.parseInt(spanResultado.textContent);
  if (event.target.id === ID_BTN_SUMAR) {
    resultado++;
    spanResultado.textContent = resultado;
  } else if (event.target.id === ID_BTN_RESTAR) {
    resultado--;
    spanResultado.textContent = resultado;
  }
}
