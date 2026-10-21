"use strict";

function recorrerRobot(instrucciones) {
  // Escribe aquí tu solución
  let x = 0;
  let y = 0;
  let distanciaMaxima = Number.MIN_VALUE;
  let matrizRepetidas = [];
  matrizRepetidas.push([0, 0]);
  let primeraRepetida = null;
  let seHaIntroducido = false;

  for (let i = 0; i < instrucciones.length; i++) {
    let arrayIntroducir = [];
    switch (instrucciones[i][0]) {
      case "N":
        y += Number(instrucciones[i].substring(1));
        break;
      case "E":
        x += Number(instrucciones[i].substring(1));
        break;
      case "S":
        y -= Number(instrucciones[i].substring(1));
        break;
      case "O":
        x -= Number(instrucciones[i].substring(1));
        break;
    }
    if (x + y > distanciaMaxima) {
      distanciaMaxima = x + y;
    }
    arrayIntroducir.push(x);
    arrayIntroducir.push(y);
    if (includesMatriz(matrizRepetidas, arrayIntroducir) && !seHaIntroducido) {
      primeraRepetida = arrayIntroducir;
      seHaIntroducido = true;
    }
    matrizRepetidas.push(arrayIntroducir);
  }
  let objetoDevolver = new Object();
  objetoDevolver.x = x;
  objetoDevolver.y = y;
  objetoDevolver.distanciaMaxima = distanciaMaxima;
  objetoDevolver.primeraRepetida = primeraRepetida;
  return objetoDevolver;
}

function includesMatriz(matriz, array) {
  for (let i = 0; i < matriz.length; i++) {
    let arrayComprobar = matriz[i];
    let numeroComprobar = 0;
    for (let j = 0; j < arrayComprobar.length; j++) {
      if (!(arrayComprobar[j] == array[j])) {
        break;
      } else {
        numeroComprobar++;
      }
      if (numeroComprobar == arrayComprobar.length) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { recorrerRobot };
