/*
Haz una función que calcule y devuelva el número de vocales en la
cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de
entrada sólo consta de letras minúsculas y/o espacios.
*/

function devolverVocales(palabra) {
  let stringVocales = "aeiouáéíóú"; //String con todas las vocales para leer.
  let devolver = 0; //Contador de vocales que se va a devolver.
  for (let i = 0; i < palabra.length; i++) {
    if (stringVocales.includes(palabra[i].toLowerCase())) { //Comprobacion de si cada letra de la palabra esta en el String de vocales.
      devolver++; //Añade 1 cuando lee una vocal.
    }
  }
  return devolver;
}