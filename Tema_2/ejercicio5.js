/*
Implementar la función que toma como argumento una array de
enteros o string, pueden ser híbrido, y devuelve una array de
elementos sin ningún elemento repetido y preservando el orden
original de los elementos.
*/

function devolverArraySinRepetir(array) {
  let arrayDevolver = []; //Array donde se devolvera los elementos sin repetir
  for (let i = 0; i < array.length; i++) {
    if (comprobarEsPrimero(array, i)) { //Llamada a funcion que comprobara si esa posicion del array ya aparecio o no.
      arrayDevolver.push(array[i]);
    }
  }
  return arrayDevolver; //Devuelve ese array con los elementos sin repetir.
}

function comprobarEsPrimero(arrayComprobar, posicion) {
  for (let j = posicion-1; j >= 0; j--) { //Comprobando desde la posicion hacia atras para ver si ya estaba dicho elemento.
    if (arrayComprobar[posicion] == arrayComprobar[j]) {
      return false;
    }
  }
  return true; //Retorna true en caso de no encontrar nada.
}
