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

  let indexComa = numero.toString().indexOf(".");

  let numeroCopia = numero;

  if (indexComa >= 0) {
    for (let i = 0; i < numero.toString().length - indexComa - 1; i++) {
      numeroCopia *= 10;
    }
  }

  let numeroCopiaBinario = numeroCopia;
  let numeroBinario = 0;
  do {
    numeroBinario = numeroBinario * 10 + (Math.ceil(numeroCopiaBinario % 2));
    numeroCopiaBinario = Math.floor(numeroCopiaBinario / 2);
  } while (numeroCopiaBinario > 0)

  let numeroDevolver = 0;
  for (let j = 0; j < numeroBinario.toString().length; j++) {
    if (numeroBinario.toString()[j] == 1) {
      numeroDevolver++;
    }
  }
  return numeroDevolver;
}
