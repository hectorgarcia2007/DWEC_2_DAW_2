import { ARRAY_DIVISAS } from "./constantes.js";
function exchangeDivisa(importe, valorOrigen, valorDestino) {
  let divisaOrigen = 0;
  let divisaDestino = 0;

  if (valorOrigen === valorDestino) {
    return importe;
  }

  divisaOrigen = devolverDivisa(valorOrigen);
  divisaDestino = devolverDivisa(valorDestino);

  let divisaCambiada = importe * (divisaOrigen / divisaDestino);
  return divisaCambiada;
}

function devolverDivisa(divisa) {
  let devolver = NaN;
  ARRAY_DIVISAS.forEach((element) => {
    if (divisa === element[0]) {
      devolver = element[1];
    }
  });
  return devolver;
}

export { exchangeDivisa };
