//Comprobar el tipo de triangulo
function calcularTriangulo(ladoUno, ladoDos, ladoTres) {
  if (
    ladoUno * ladoUno + ladoDos * ladoDos == ladoTres * ladoTres ||
    ladoUno * ladoUno + ladoTres * ladoTres == ladoDos * ladoDos ||
    ladoTres * ladoTres + ladoDos * ladoDos == ladoUno * ladoUno
  ) {
    return "cuadrado";
  }
  //Si son lado Uno y Dos o Uno y Tres iguales devuelve equilatero.
  if (ladoUno == ladoDos && ladoUno == ladoTres) {
    return "equilatero: Todos los lados iguales";
  }
  //Si Dos lados son iguales devuelve iscosceles.
  if (ladoUno == ladoDos || ladoUno == ladoTres || ladoDos == ladoTres) {
    return "isosceles: Dos lados iguales";
  }

  //Si ninguno coincide devuelve escaleno.
  return "escaleno: Ninguno igual";
}

function comprobarTipoTriangulo() {
  //Cojo el valor de los inputs.
  const inputValueUno = Number.parseInt(
    document.getElementById("ladoUno").value,
  );
  const inputValueDos = Number.parseInt(
    document.getElementById("ladoDos").value,
  );
  const inputValueTres = Number.parseInt(
    document.getElementById("ladoTres").value,
  );
  //Cojo el elemento div donde guardaremos el resultado.
  const contenedor = document.getElementById("idContenedor");

  //Rellena el texto con el resultado.
  textoResultado =
    "<p>El triangulo es " +
    calcularTriangulo(inputValueUno, inputValueDos, inputValueTres);

  //Insertamos el nuevo párrafo en el contenedor.
  contenedor.innerHTML = textoResultado;
}
