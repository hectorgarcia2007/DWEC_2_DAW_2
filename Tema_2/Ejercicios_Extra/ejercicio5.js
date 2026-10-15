/*
Se te da un arreglo de intervalos, donde cada intervalo es [inicio, fin].
Debes fusionar todos los intervalos que se superponen y devolver el
resultado como un nuevo arreglo.
*/

function combinarIntervalos(array) {
  let arrayOrdenado = array.sort((a, b) => a - b);
  for (let i = 0; i < arrayOrdenado.length - 1; i++) {
    if (hayIntervalo(arrayOrdenado[i], arrayOrdenado[i + 1])) {
      arrayOrdenado[i] = arrayFusionado(arrayOrdenado[i], arrayOrdenado[i + 1]);
      arrayOrdenado.splice(i + 1, 1);
      i--;
      continue;
    } else {
      continue;
    }
  }
  return arrayOrdenado;
}

function hayIntervalo(arrayUno, arrayDos) {
  arrayUno = arrayUno.sort((a, b) => a - b);
  arrayDos = arrayDos.sort((a, b) => a - b);

  if (arrayDos[0] <= arrayUno[1]) {
    return true;
  }
  return false;
}

function arrayFusionado(arrayUno, arrayDos) {
  let arrayDevolver = [];
  let minimo = Math.min(arrayUno, arrayDos);
  let maximo = Math.max(arrayUno, arrayDos);
  arrayDevolver.push(minimo);
  arrayDevolver.push(maximo);
  return arrayDevolver;
}
