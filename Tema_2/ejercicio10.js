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

  let indexComa = numero.toString().indexOf("."); //Busqueda de donde esta el index de la coma.

  let numeroCopia = numero; //Copia del numero para no alterar este numero.

  if (indexComa >= 0) { //En caso de que no haya coma, ignorara esto.
    for (let i = 0; i < numero.toString().length - indexComa - 1; i++) {
      numeroCopia *= 10; //Multiplicando por 10 hasta que no haya decimal.
    }
  }

  let numeroCopiaBinario = numeroCopia; //Copia para ir dividiendo entre 2 para sacar el siguiente binario.
  let numeroBinario = 0; //Numero donde ira la conversion total del numero binario.
  do {
    numeroBinario = numeroBinario * 10 + (Math.ceil(numeroCopiaBinario % 2));
    numeroCopiaBinario = Math.floor(numeroCopiaBinario / 2);
  } while (numeroCopiaBinario > 0)

  let numeroDevolver = 0; //Numero donde se devolvera la cantidad de veces que aparece el numero 1.
  for (let j = 0; j < numeroBinario.toString().length; j++) {
    if (numeroBinario.toString()[j] == 1) { //En caso de encontrar 1 aumenta el numeroDevolver en 1.
      numeroDevolver++;
    }
  }
  return numeroDevolver;
}
