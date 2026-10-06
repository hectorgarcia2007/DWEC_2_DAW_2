/*
Haz una función que devuelva un array con los cuatro números naturales
que cumplan el teorema dado un número natural pasado como argumento.
*/

function sacarTeorema(numero) {
  let arrayNumeros = [];
  Math.floor(Math.sqrt);

  let numeroCopia = numero;
  for (i = 0; i < 4; i++) {
    arrayNumeros.push(Math.floor(Math.sqrt(numeroCopia)));
    numeroCopia = Math.floor(Math.sqrt(numeroCopia));
    if (comprobarTeoremaCompletado(numero, arrayNumeros)) {
      break;
    }
  }

  return arrayNumeros;
}

function comprobarTeoremaCompletado(numero, array) {
  let numeroComprobar = 0;
  for (let j = 0; j < array.length; j++) {
    numeroComprobar *= array[j];
  }
  return numero == numeroComprobar;
}
