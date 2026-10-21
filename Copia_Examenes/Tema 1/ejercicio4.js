"use strict";

function mayorSinRepetir(numeros) {
  // Escribe aquí tu solución
  let devolver = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (Number(numeros[i]) == devolver) {
      return null;
    }
    if (Number(numeros[i]) > devolver) {
      devolver = numeros[i];
    }
  }
  return devolver;
}

let resultado=mayorSinRepetir([10, 3, 10, 8, 8, 7]);
console.log(resultado);

module.exports = { mayorSinRepetir };
