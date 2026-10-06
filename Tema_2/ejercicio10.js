/*
Escriba una función que tome un número decimal como entrada, y
devuelva el número de bits que son iguales a uno en la
representación binaria de ese número. Comprueba que la entrada no
sea negativa.
*/

function numeroDeUnos(numero) {
  if (numero < 0) {
    return null;
  }

  let indexComa = numero.index(".");

  let numeroCopia = numero;

  if (indexComa >= 0) {
    for (let i = 0; i < numero.length - indexComa; i++) {
      numeroCopia *= 10;
    }
  }

  let numeroCopiaBinario = numero;
  let numeroBinario = 0;
  while (numeroCopiaBinario <= 1) {
    numeroBinario = numeroBinario * 10 + (numeroCopiaBinario % 2);
    numeroCopiaBinario /= 2;
  }

  let numeroDevolver = 0;
  for (let j = 0; j < numeroBinario.length; j++) {
    if (numeroBinario.charAt[j] == 1) {
      numeroDevolver++;
    }
  }
  return numeroDevolver;
}
