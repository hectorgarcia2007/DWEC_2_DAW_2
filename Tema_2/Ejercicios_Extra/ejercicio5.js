/*
Se te da un arreglo de intervalos, donde cada intervalo es [inicio, fin].
Debes fusionar todos los intervalos que se superponen y devolver el
resultado como un nuevo arreglo.
*/

function combinarIntervalos(array) {
  let arrayCopia = array.toSorted(function (a, b) {
    return a[0] - b[0];
  }); //Ordena la matriz por el inicio y lo almacena en otro.
  for (let i = 0; i < arrayCopia.length - 1; i++) {
    if (hayIntervalo(arrayCopia[i], arrayCopia[i + 1])) {
      //Comprueba si estan en el mismo intervalo.
      arrayCopia[i] = arrayFusionado(arrayCopia[i], arrayCopia[i + 1]); //Fusiona 2 arrays.
      arrayCopia.splice(i + 1, 1); //Borra la parte que se habria fusionado.
      i--;
      continue;
    } else {
      continue;
    }
  }
  return arrayCopia;
}

function hayIntervalo(arrayUno, arrayDos) {
  arrayUno = arrayUno.toSorted(); //Ordena cada array.
  arrayDos = arrayDos.toSorted();

  if (arrayDos[0] <= arrayUno[1]) {
    //Comprueba si el inicio del dos esta antes que el final del 1.
    return true;
  }
  return false;
}

function arrayFusionado(arrayUno, arrayDos) {
  let arrayDevolver = [];
  let minimo = Math.min(arrayUno[0], arrayUno[1], arrayDos[0], arrayDos[1]); //Pone el numero menor para introducirlo
  let maximo = Math.max(arrayUno[0], arrayUno[1], arrayDos[0], arrayDos[1]); //Pone el numero mayor para introducirlo
  arrayDevolver.push(minimo);
  arrayDevolver.push(maximo);
  return arrayDevolver;
}
