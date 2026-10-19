/*
Se te da un arreglo de intervalos, donde cada intervalo es [inicio, fin].
Debes fusionar todos los intervalos que se superponen y devolver el
resultado como un nuevo arreglo.
*/

function combinarIntervalos(array) {
  let arrayCopia = array.toSorted(function(a, b){return a - b});
  for (let i = 0; i < arrayCopia.length - 1; i++) {
    if (hayIntervalo(arrayCopia[i], arrayCopia[i + 1])) {
      arrayCopia[i] = arrayFusionado(arrayCopia[i], arrayCopia[i + 1]);
      arrayCopia.splice(i+1, 1);
      i--;
      continue;
    } else {
      continue;
    }
  }
  return arrayCopia;
}

function hayIntervalo(arrayUno, arrayDos) {
  arrayUno = arrayUno.toSorted();
  arrayDos = arrayDos.toSorted();

  if (arrayDos[0] <= arrayUno[1]) {
    return true;
  }
  return false;
}

function arrayFusionado(arrayUno, arrayDos) {
  let arrayDevolver = [];
  let minimo = Math.min(arrayUno[0],arrayUno[1],arrayDos[0], arrayDos[1]);
  let maximo = Math.max(arrayUno[0],arrayUno[1],arrayDos[0], arrayDos[1]);
  arrayDevolver.push(minimo);
  arrayDevolver.push(maximo);
  return arrayDevolver;
}
