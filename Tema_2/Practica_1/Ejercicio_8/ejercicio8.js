/*
Implementa una función de diferencia, que devuelva un array que
tenga todos los valores de la lista pasada como primer parámetro
que no están presentes en la lista b manteniendo su orden. Si un
valor está presente en b, todas sus apariciones deben ser eliminadas
de la otra:
*/

function arrayDiff(arrayUno, arrayDos) {
  if (comprobarCumpleRequisito(arrayUno, arrayDos)) {
    return null;
  }
  arrayDevolver = []; //Array en el cual se devolvera el arrayUno sin añadir lo elementos del arrayDos.

  for (let i = 0; i < arrayUno.length; i++) {
    if (!arrayDos.includes(arrayUno[i])) {
      //Comprobando si existe ese elemento de arrayUno en el Dos.
      arrayDevolver.push(arrayUno[i]);
    }
  }
  return arrayDevolver;
}

function comprobarCumpleRequisito(comprobar1, comprobar2) {
  if (typeof comprobar1 != "object" && typeof comprobar2 != "object") {
    //Comprueba si ambas variables es un array.
    return true;
  }
  return false;
}
