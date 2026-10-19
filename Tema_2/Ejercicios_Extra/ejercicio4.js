/*
Dado un arreglo de enteros nums, devuelve todos los tríos únicos [a, b,
c] tales que a + b + c == 0.
*/

function devolverTrios(numeros) {
  let numerosDevolver = [];
  let numerosIntroducir = [];

  for (let i = 0; i < numeros.length; i++) {
    numerosIntroducir = [];
    for (let j = i + 1; j < numeros.length; j++) {
      for (let k = j + 1; k < numeros.length; k++) {
        if (numeros[i] + numeros[j] + numeros[k] == 0) {
          numerosIntroducir = [];
          numerosIntroducir.push(numeros[i]);
          numerosIntroducir.push(numeros[j]);
          numerosIntroducir.push(numeros[k]);
          numerosIntroducir = numerosIntroducir.sort((a, b) => a - b);
          if (!numerosDevolver.includes(numerosIntroducir)) {
            numerosDevolver.push(numerosIntroducir);
          }
        }
      }
    }
  }
  return numerosDevolver;
}
