function operar(valorUno, valorDos, operacion) {
  return operacion(valorUno, valorDos);
}

let sumar = (a, b) => a + b;
let resta = (a, b) => a - b;
let multiplicacion = (a, b) => a * b;
let division = (a, b) => a / b;
let maximo = (a, b) => Math.max(a, b);

//Dado el numero de segundos actual dependiendo del resto al dividir 5, ejecutar, sumar, resta, multiplicacion, division.

const fechaActual = new Date(Date.now());
const segundosRestoCinco = fechaActual.getSeconds() % 5;

let resultado = NaN;
switch (segundosRestoCinco) {
  case 0:
    resultado = operar(10, 5, sumar);
    break;
  case 1:
    resultado = operar(10, 5, resta);
    break;
  case 2:
    resultado = operar(10, 5, multiplicacion);
    break;
  case 3:
    resultado = operar(10, 5, division);
    break;
  case 4:
    resultado = operar(10, 5, maximo);
    break;
}
console.log(resultado);
