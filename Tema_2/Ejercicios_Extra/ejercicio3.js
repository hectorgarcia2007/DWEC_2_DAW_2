/*
Se te da un arreglo de enteros no negativos donde cada valor representa la
altura de una línea vertical sobre el eje X. El objetivo es encontrar dos líneas
que, junto con el eje X, formen un contenedor que pueda contener la mayor
cantidad posible de agua.
*/

function buscarContenedor(numeros) {
  let izq = 0; //Index de la posicon de la izquierda.
  let der = numeros.length - 1; //Index de la posicion de la derecha
  let contenedorDevolver = Number.MIN_VALUE; //Numero a devolver.

  while (izq < der) { //Hacer mientras el index de izquierda sea menor.
    let alturaComprobar = Math.min(numeros[izq], numeros[der]); //Sacar el numero de entre 2 posiciones.
    let ejeX = der - izq; //Sacar la longitud del ejeX
    if (contenedorDevolver < ejeX * alturaComprobar) { //Comprobacion de si es mas grande el contenedor
      contenedorDevolver = ejeX * alturaComprobar; //Reemplazo del contenedor.
    }
    if (numeros[izq] > numeros[der]) { //Si el numero en izq es mayor, se baja el derecho, si no, se sube el izquierdo.
      der--;
    } else {
      izq++;
    }
  }
  return contenedorDevolver;
}