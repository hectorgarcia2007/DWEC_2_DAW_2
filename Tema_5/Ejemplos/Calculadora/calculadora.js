const arrayBtn = document.getElementsByClassName("btn");
const pResultado = document.getElementById("resultado");

for (let index = 0; index < arrayBtn.length; index++) {
  arrayBtn[index].addEventListener("click", clickEvent);
}

let numUno = 0;
let numDos = 0;
let numIntroducir = 0;
let operadorPulsado = false;
let resultadoDado = false;
let operador = null;
let resultado = 0;

function clickEvent(event) {
  let nombreClase = event.target.className;
  if (resultadoDado) {
    pResultado.textContent = "";
    resultadoDado = false;
  }
  if (nombreClase === "btn btnNumero") {
    numIntroducir = Number.parseInt(event.target.textContent);
    numUno = numUno * 10 + numIntroducir;
    pResultado.textContent += numIntroducir;
  } else if (nombreClase === "btn btnOperador") {
    if (!operadorPulsado) {
      numDos = numUno;
      numUno = 0;
      operadorPulsado = true;
      operador = event.target.id;
      let operadorMostrar = "";
      switch (operador) {
        case "suma":
          operadorMostrar = "+";
          break;
        case "menos":
          operadorMostrar = "-";
          break;
        case "sqrt":
          resultado = Math.sqrt(numDos);
          mostrarResultado();
          break;
        case "multiplicar":
          operadorMostrar = "*";
          break;
        case "division":
          operadorMostrar = "/";
          break;
      }
      pResultado.textContent += operadorMostrar;
    }
  }
  if (nombreClase === "btn btnResultado") {
    switch (operador) {
      case "suma":
        resultado = numDos + numUno;
        break;
      case "menos":
        resultado = numDos - numUno;
        break;
      case "multiplicar":
        resultado = numDos * numUno;
        break;
      case "division":
        resultado = numDos / numUno;
        break;
    }
    mostrarResultado();
  }

  function mostrarResultado() {
    pResultado.textContent = resultado;
    numUno = 0;
    numDos = 0;
    operadorPulsado = false;
    resultadoDado = true;
  }
}
