"use strict";

function sumarPares(numeros) {
  // Escribe aquí tu solución
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      total += Number(numeros[i]);
    }
  }
  return total;
}

module.exports = { sumarPares };
