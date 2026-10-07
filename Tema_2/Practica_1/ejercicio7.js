/*
Escribe una función que tenga como parámetro un array de números
enteros. Tu trabajo es tomar esa array y encontrar un índice N en el
que la suma de los enteros a la izquierda de N sea igual a la suma de
los enteros a la derecha de N. Si no hay ningún índice que haga que
esto ocurra, devuelve -1. Si se le da un array con múltiples
respuestas, devuelve el menor índice correcto.
*/

function encontrarIndiceN(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (sacarSumaIzquierda(numeros,i) == sacarSumaDerecha(numeros,i)) { //Comprobacion de la suma de cada lado de la posicion del array.
      return i;
    }
  }
  return -1; //En caso de que no se encuentre ningun lado igual, devuelve -1.
}

function sacarSumaIzquierda(numeros, index) {
  let devolver = 0; //Suma total que se devolvera.
  for (let j = index - 1; j >= 0; j--) {
    devolver += numeros[j];
  }
  return devolver;
}

function sacarSumaDerecha(numeros, index) {
  let devolver = 0; //Suma total que se devolvera.
  for (let k = index + 1; k < numeros.length; k++) {
    devolver += numeros[k];
  }
  return devolver;
}
