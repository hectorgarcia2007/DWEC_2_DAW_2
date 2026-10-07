/*
Haz una función que devuelva un array con los cuatro números naturales
que cumplan el teorema dado un número natural pasado como argumento.
*/

function sacarTeorema(numero) {
  let arrayNumeros = [];
  Math.floor(Math.sqrt);

  let numeroCopia = numero; //Copia del numero original para no alterar este numero.
  for (i = 0; i < 4; i++) { //For de las 4 comprobaciones de cada numero.
    arrayNumeros.push(Math.floor(Math.sqrt(numeroCopia))); //Metiendo en el array la raiz cuadrada de el numeroCopia.
    numeroCopia = Math.floor(Math.sqrt(numeroCopia)); //Cambio del numeroCopia con su raiz cuadrada.
    if (comprobarTeoremaCompletado(numero, arrayNumeros)) { //Funcion que se encargara de ver si la suma de los elementos del array ya cumplen el numero objetivo sin ser 4.
      break;
    }
  }

  while (arrayNumeros.length<4){ //En caso de que se encontrara el teorema antes de ser 4, añadirle 0 para asi completarlo siendo 4.
    arrayNumeros.push(0);
  }

  return arrayNumeros;
}

function comprobarTeoremaCompletado(numero, array) {
  let numeroComprobar = 0; //Numero que se ira sumando cada parte del array para luego comparar si ya se completo el teorema.
  for (let j = 0; j < array.length; j++) {
    numeroComprobar += array[j];
  }
  return numero == numeroComprobar;
}