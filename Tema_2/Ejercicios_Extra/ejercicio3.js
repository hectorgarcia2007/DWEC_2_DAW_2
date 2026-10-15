/*
Se te da un arreglo de enteros no negativos donde cada valor representa la
altura de una línea vertical sobre el eje X. El objetivo es encontrar dos líneas
que, junto con el eje X, formen un contenedor que pueda contener la mayor
cantidad posible de agua.
*/

function buscarContenedor(numeros) {
  let izq = 0;
  let der = numeros.length - 1;
  let contenedorDevolver = Number.MIN_VALUE;

  while (izq < der) {
    let alturaComprobar = Math.min(numeros[izq], numeros[der]);
    let ejeX = der - izq;
    if (contenedorDevolver < ejeX * alturaComprobar) {
      contenedorDevolver = ejeX * alturaComprobar;
    }
    if (numeros[izq] > numeros[der]) {
      der--;
    } else {
      izq++;
    }
  }
  return contenedorDevolver;
}