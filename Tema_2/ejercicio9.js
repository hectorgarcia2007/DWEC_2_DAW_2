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
  for (let i = 0; i < numero.length; i++) {
    arrayNumeros.push(numero.chatAt(i));
  }
  arrayNumeros.sort(b - a);
  let numeroDevolver = 0;
  for (let j = 0; j < arrayNumeros.length; j++) {
    numeroDevolver = numeroDevolver * 10 + arrayNumeros[j];
  }
  return numeroDevolver;
}
