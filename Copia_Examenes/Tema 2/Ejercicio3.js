"use strict";

function eliminarBloques(texto, cantidad) {
  // Escribe aquí tu solución
  let noSeRepiten = true;
  let textoCopia = texto;
  do {
    noSeRepiten = false;
    if (noSeRepitenCantidad(textoCopia, cantidad)) {
      noSeRepiten = true;
      let indexRepetido = sacarIndex(textoCopia, cantidad);
      textoCopia =
        textoCopia.substring(0, indexRepetido) +
        textoCopia.substring(indexRepetido + cantidad);
    }
  } while (noSeRepiten);
  return textoCopia;
}

function noSeRepitenCantidad(texto, cantidad) {
  let contadorRepetidos = 1;
  for (let i = 0; i < texto.length - 1; i++) {
    if (texto[i] == texto[i + 1]) {
      contadorRepetidos++;
    } else {
      contadorRepetidos = 1;
      continue;
    }
    if (contadorRepetidos >= cantidad) {
      return true;
    }
  }
  return false;
}

function sacarIndex(texto, cantidad) {
  let contadorRepetidos = 1;
  let primerIndex = 0;
  for (let i = 0; i < texto.length - 1; i++) {
    if (texto[i] == texto[i + 1]) {
      contadorRepetidos++;
    } else {
      contadorRepetidos = 1;
      primerIndex = i + 1;
      continue;
    }
    if (contadorRepetidos >= cantidad) {
      return primerIndex;
    }
  }
  return null;
}

module.exports = { eliminarBloques };
