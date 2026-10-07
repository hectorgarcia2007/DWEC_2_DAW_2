/*
Escribe una función que tome un parámetro positivo num y devuelva
su persistencia multiplicativa, que es el número de veces que debes
multiplicar los dígitos de num hasta llegar a un solo dígito.
*/

function devolverPersistencia(numero) {
  if (numero < 0) {
    return null;
  }
  let numeroCopia = numero; //Copia del numero hecha para no alterar el numero original.
  let numeroMultiplicado = 1; //Numero que se ira multiplicando para luego introducirlo en numeroCopia.
  let numeroVeces=0; //Contador de las veces que se hizo la persistencia.
  while (numeroCopia.toString().length > 1) {
    numeroMultiplicado = 1; //Reseteo del numero que se ira multiplicando.
    for (i = 0; i < numeroCopia.toString().length; i++) {
      numeroMultiplicado *= Number(numeroCopia.toString()[i]); //Convirtiendo a numero cada digito y multiplicandolos.
    }
    numeroCopia = numeroMultiplicado; //Introduccion del numero multiplicando al final al numeroCopia.
    numeroVeces++;
  }
  return numeroVeces;
}