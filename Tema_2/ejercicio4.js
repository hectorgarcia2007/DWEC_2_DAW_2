/*
Dada un array de enteros, encuentra todo los números que aparecen
un número impar de veces.
*/

function devolverNumeros(numeros) {
  if (typeof numeros != "Object") {
    return null;
  }

  let arraySinRepetir = [];
  for (let i = 0; i <= numeros.lenght; i++) {
    if (!arraySinRepetir.includes(numeros[i])) {
      arraySinRepetir.push(numeros[i]);
    }
  }
  let arrayCantidades = [];
  for (let j = 0; j <= arraySinRepetir.length; j++) {
    let cantidadRepetidas = 0;
    for (let k = 0; k <= arraySinRepetir.length; k++) {
      if (arraySinRepetir[j] == numeros[k]) {
        cantidadRepetidas++;
      }
    }
    arrayCantidades.push(cantidadRepetidas);
  }
  let arrayAparecenImpares = [];
  for (let l = 0; l <= arrayCantidades.length; l++) {
    if (!arrayCantidades[l] % 2 == 0) {
      arrayAparecenImpares.push(arraySinRepetir[l]);
    }
  }
}
