/*
Dado un arreglo de enteros nums, devuelve todos los tríos únicos [a, b,
c] tales que a + b + c == 0.
*/

function devolverTrios(numeros) {
  let numerosDevolver = []; //Matriz que se devolvera.
  let numerosIntroducir = []; //Array que se ira introduciendo para luego introducirse en la matriz

  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      for (let k = j + 1; k < numeros.length; k++) {
        if (numeros[i] + numeros[j] + numeros[k] == 0) {
          //Comprobacion de las 3 posiciones.
          numerosIntroducir = []; //Reseteo del array de numeros que se introduciran o no.
          numerosIntroducir.push(numeros[i]); //Introduccion de los 3 numeros.
          numerosIntroducir.push(numeros[j]);
          numerosIntroducir.push(numeros[k]);
          numerosIntroducir = numerosIntroducir.toSorted(function(a, b){return a - b}); //Orden de los 3 numeros.
          if (!includesMatriz(numerosDevolver, numerosIntroducir)) {
            //Comprobacion de si ya esta el array en la matriz.
            numerosDevolver.push(numerosIntroducir); //Introduccion en la matriz tras haberla comprobado.
          }
        }
      }
    }
  }
  return numerosDevolver;
}

function includesMatriz(matriz, array) {
  for (let i = 0; i < matriz.length; i++) {
    let arrayComprobar = matriz[i]; //Introducir un array de la matriz para comprobarlo.
    let numeroComprobar = 0; //Numero que almacena si se repite X veces los elementos del array.
    for (let j = 0; j < arrayComprobar.length; j++) {
      if (!(arrayComprobar[j] == array[j])) {
        //Si encuentra una distinta, hace break, el resto ya no importa.
        break;
      } else {
        numeroComprobar++; //Suma 1 si encuentra que coinciden los elementos.
      }
      if (numeroComprobar == arrayComprobar.length) {
        return true; //Devuelve true si lo incluye.
      }
    }
  }
  return false; //Devuelve false si no lo incluye.
}
