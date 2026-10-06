/*
Escribe una función que tome un parámetro positivo num y devuelva
su persistencia multiplicativa, que es el número de veces que debes
multiplicar los dígitos de num hasta llegar a un solo dígito.
*/

function devolverPersistencia(numero) {
  if (numero < 0) {
    return null;
  }
  numeroCopia = numero;
  numeroMultiplicado = 1;
  while (numeroCopia.length > 1) {
    for (i = 0; i < numeroCopia.length; i++) {
      numeroMultiplicado *= numeroCopia.chatAt(i);
    }
    numeroCopia = numeroMultiplicado;
  }
  return numeroCopia;
}
