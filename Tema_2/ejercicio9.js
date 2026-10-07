/*
Haz una función que pueda tomar cualquier número entero no
negativo como argumento y devolverlo con sus dígitos en orden
descendente. Esencialmente, reordenar los dígitos para crear el
mayor número posible.
*/

function devolverDigitosOrdenados(numero) {
  if (numero < 0) {
    return null;
  }

  let arrayNumeros = [];
  for (let i = 0; i < numero.toString().length; i++) {
    arrayNumeros.push(numero.toString()[i]);
  }
  arrayNumeros.sort().reverse();;
  let numeroDevolver = 0;
  for (let j = 0; j < arrayNumeros.length; j++) {
    numeroDevolver = Number(numeroDevolver) * 10 + Number(arrayNumeros[j]);
  }
  return numeroDevolver;
}
