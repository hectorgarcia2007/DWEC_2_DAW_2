/*
Escribe una función que tome un parámetro positivo num y devuelva
su persistencia multiplicativa, que es el número de veces que debes
multiplicar los dígitos de num hasta llegar a un solo dígito.
*/

function devolverPersistencia(numero) {
  if (numero < 0) {
    return null;
  }
  let numeroCopia = numero;
  let numeroMultiplicado = 1;
  let numeroVeces=0;
  while (numeroCopia.toString().length > 1) {
    numeroMultiplicado = 1;
    for (i = 0; i < numeroCopia.toString().length; i++) {
      numeroMultiplicado *= Number(numeroCopia.toString()[i]);
    }
    numeroCopia = numeroMultiplicado;
    numeroVeces++;
  }
  return numeroVeces;
}