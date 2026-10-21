"use strict";

function esCasiEscalonado(numero) {
  // Escribe aquí tu solución
  let arrayNumeros = introducirArray(numero);
  let contadorEliminados = 0;
  for (let i = 0; i < arrayNumeros.length - 1; i++) {
    if (arrayNumeros[i] < arrayNumeros[i + 1]) {
      continue;
    } else {
      if (contadorEliminados >= 1) {
        return false;
      }
      arrayNumeros.splice(i + 1, 1);
      contadorEliminados++;
    }
  }
  return true;
}

function introducirArray(numero) {
  let arrayDevolver = [];
  let numeroTexto = numero.toString();
  for (let j = 0; j < numeroTexto.length; j++) {
    arrayDevolver.push(Number(numeroTexto[j]));
  }
  return arrayDevolver;
}

module.exports = { esCasiEscalonado };
