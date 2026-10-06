/*
Implementa una función de diferencia, que devuelva un array que
tenga todos los valores de la lista pasada como primer parámetro
que no están presentes en la lista b manteniendo su orden. Si un
valor está presente en b, todas sus apariciones deben ser eliminadas
de la otra:
*/

function arrayDiff(arrayUno, arrayDos) {
  arrayDevolver = [];

  for (let i = 0; i < arrayUno; i++) {
    if (!arrayDos.includes(arrayUno[i])) {
      arrayDevolver.push(arrayUno[i]);
    }
  }
  return arrayDevolver;
}
