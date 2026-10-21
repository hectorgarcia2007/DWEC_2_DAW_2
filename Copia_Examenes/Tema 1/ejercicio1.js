"use strict";

function clasificarTemperatura(temperatura) {
  // Escribe aquí tu solución
  if (temperatura < 0) {
    return "Helada";
  }
  if (temperatura >= 0 && temperatura <= 14) {
    return "Frío";
  }
  if (temperatura >= 15 && temperatura <= 24) {
    return "Templado";
  }
  if (temperatura >= 25 && temperatura < 100) {
    return "Calor";
  }
  return "Dato incorrecto";
}

let resultado = clasificarTemperatura(18);
console.log(resultado);

module.exports = { clasificarTemperatura };
