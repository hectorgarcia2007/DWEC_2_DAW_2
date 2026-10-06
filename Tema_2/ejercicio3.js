/*
Haz una función que como parámetro reciba un array de números y
obtenga el número que menos repeticiones haya tenido. En caso de
empate devuelve el número más pequeño.
*/

function devolverRepeticiones(numeros) {
  if (typeof numeros != "object") {
    return null;
  }

  let arraySinRepetir = [];
  for (let i = 0; i < numeros.length; i++) {
    if (!arraySinRepetir.includes(numeros[i])) {
      arraySinRepetir.push(numeros[i]);
    }
  }
  let arrayCantidades = [];
  for (let j = 0; j < arraySinRepetir.length; j++) {
    let cantidadRepetidas = 0;
    for (let k = 0; k < numeros.length; k++) {
      if (arraySinRepetir[j] == numeros[k]) {
        cantidadRepetidas++;
      }
    }
    arrayCantidades.push(cantidadRepetidas);
  }
  let repetidoMenor = Number.MAX_VALUE;
  let indexMenor = 0;
  for (let l = 0; l < arrayCantidades.length; l++) {
    if (arrayCantidades[l] <= repetidoMenor) {
      if (arrayCantidades[l] == repetidoMenor) {
        if (arraySinRepetir[l] < arraySinRepetir[indexMenor]) {
          indexMenor = l;
          repetidoMenor = arrayCantidades[l];
        }
      } else {
        indexMenor = l;
      }
      repetidoMenor = arrayCantidades[l];
    }
  }

  return arraySinRepetir[indexMenor];
}


