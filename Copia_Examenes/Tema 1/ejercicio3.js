"use strict";

function contarVocales(texto) {
  // Escribe aquí tu solución
  let total = 0;
  for (let i = 0; i < texto.length; i++) {
    switch (texto.charAt(i).toLowerCase()) {
      case "a":
        total++;
        break;
      case "e":
        total++;
        break;
      case "i":
        total++;
        break;
      case "o":
        total++;
        break;
      case "u":
        total++;
        break;
      case "á":
        total++;
        break;
      case "é":
        total++;
        break;
      case "í":
        total++;
        break;
      case "ó":
        total++;
        break;
      case "ú":
        total++;
        break;
    }
  }
  return total;
}

module.exports = { contarVocales };
