/*
Implementar la función que toma como argumento una array de
enteros o string, pueden ser híbrido, y devuelve una array de
elementos sin ningún elemento repetido y preservando el orden
original de los elementos.
*/

function devolverArraySinRepetir(array) {
  let arrayDevolver = [];
  for (let i = 0; i <= array.length; i++) {
    if (comprobarEsPrimero(array, i)) {
      arrayDevolver.push(array[l]);
    }
  }
  return arrayDevolver;
}

function comprobarEsPrimero(arrayComprobar, posicion) {
  for (let j = posicion; j >= 0; j--) {
    if (arrayComprobar[posicion] == arrayComprobar[j]) {
      return false;
    }
  }
  return true;
}
