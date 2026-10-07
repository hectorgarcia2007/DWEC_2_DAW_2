/*
Dada un array de enteros, encuentra todo los números que aparecen
un número impar de veces.
*/

function devolverNumeros(numeros) {
  if (comprobarCumpleRequisito(numeros)) {
    return null;
  }

  let arraySinRepetir = []; //Array de los numeros sin repetir.
  for (let i = 0; i < numeros.length; i++) {
    if (!arraySinRepetir.includes(numeros[i])) {
      //Comprobacion de si cada apartado del array esta ya en el sin repetir.
      arraySinRepetir.push(numeros[i]);
    }
  }
  let arrayCantidades = []; //Array donde se almacenaran las cantidades de los numeros, el index esta basado en el sin repetir.
  for (let j = 0; j < arraySinRepetir.length; j++) {
    let cantidadRepetidas = 0; //Contador de cuantas veces se ha contado cada numero.
    for (let k = 0; k < numeros.length; k++) {
      if (arraySinRepetir[j] == numeros[k]) {
        cantidadRepetidas++;
      }
    }
    arrayCantidades.push(cantidadRepetidas);
  }
  let arrayAparecenImpares = []; //Array donde se almacenaran los que aparecieron de forma impar.
  for (let l = 0; l < arrayCantidades.length; l++) {
    if (!(arrayCantidades[l] % 2 == 0)) {
      //Comprobando si la cantidad es impar o no.
      arrayAparecenImpares.push(arraySinRepetir[l]);
    }
  }
  return arrayAparecenImpares; //Se devuelve el array con los que aparecen de forma impar.
}

function comprobarCumpleRequisito(comprobar) {
  if (typeof comprobar != "object") {
    return true;
  }

  for (let i = 0; i < comprobar.length; i++) {
    if (typeof comprobar[i] != "number") {
      return true;
    }
  }
  return false;
}
