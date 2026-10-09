/*
Haz una función que como parámetro reciba un array de números y
obtenga el número que menos repeticiones haya tenido. En caso de
empate devuelve el número más pequeño.
*/

function devolverRepeticiones(numeros) {
  if (comprobarCumpleRequisito(numeros)) {
    return null;
  }

  let arraySinRepetir = []; //Array donde se almacenaran todos los numeros sin repetir del programa.
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
  let repetidoMenor = Number.MAX_VALUE; //Numero donde se compara si es la cantidad mas pequeña.
  let indexMenor = 0; //Index de la cantidad mas pequeña.
  for (let l = 0; l < arrayCantidades.length; l++) {
    if (arrayCantidades[l] <= repetidoMenor) {
      //Comprobacion de si una cantidad es mas pequeña que la mas pequeña almacenada.
      if (arrayCantidades[l] == repetidoMenor) {
        //En caso de tener la misma cantidad se comprobara si el numero es mas pequeño, si no es mas pequeño, no cambiara.
        if (arraySinRepetir[l] < arraySinRepetir[indexMenor]) {
          indexMenor = l; //Si es mas pequeño se cambia el index y el repetido.
          repetidoMenor = arrayCantidades[l];
        }
      } else {
        indexMenor = l; //Si no es igual, simplemente cambia el index y la cantidad.
        repetidoMenor = arrayCantidades[l];
      }
    }
  }

  return arraySinRepetir[indexMenor]; //Se devuelve el numero.
}

function comprobarCumpleRequisito(comprobar) {
  if (typeof comprobar != "object") {
    //Comprueba si es un array.
    return true;
  }

  for (let i = 0; i < comprobar.length; i++) {
    if (typeof comprobar[i] != "number") {
      //Comprueba que todas las posiciones sean numeros.
      return true;
    }
  }
  return false;
}
