//Devulve el numero factorial o nan en caso de ser negativo.
function calcularFactorial(numero) {
  if (numero < 0) {
    return NaN;
  }
  let devolver = 1;
  for (let index = numero; index > 1; index--) {
    devolver = devolver * index;
  }
  return devolver;
}

function comprobarFactorial() {
  //Cojo el valor del input.
  const inputValue = Number.parseInt(document.getElementById("idInput").value);
  //Cojo el elemento div donde guardaremos el resultado.
  const contenedor = document.getElementById("idContenedor");
  //Asigno por defecto que sea primo

  //Dado que el número es no primo asigno diferente valor variable
  textoResultado = "<p>¡El factorial es " + calcularFactorial(inputValue);

  //Insertamos el nuevo párrafo en el contenedor.
  contenedor.innerHTML = textoResultado;
}
