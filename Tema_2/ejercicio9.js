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

  let arrayNumeros = []; //Array para introducir cada digito y asi ordenarlo automaticamente.
  for (let i = 0; i < numero.toString().length; i++) {
    arrayNumeros.push(numero.toString()[i]); //Introduciendo cada digito en el array.
  }
  arrayNumeros.sort().reverse(); //Ordenando el array de forma descendente.
  let numeroDevolver = 0; //Numero final que se devolvera tras el reorden.
  for (let j = 0; j < arrayNumeros.length; j++) {
    numeroDevolver = Number(numeroDevolver) * 10 + Number(arrayNumeros[j]); //Introduciendo cada parte del array ordenado.
  }
  return numeroDevolver;
}
