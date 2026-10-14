/*
Dado un arreglo de enteros nums, devuelve todos los tríos únicos [a, b,
c] tales que a + b + c == 0.
*/

function devolverTrios(numeros) {
    let numerosDevolver = [];
    let numerosIntroducir = [];

    for (let i = 0; i < numeros.length; i++) {
        numerosIntroducir = [];
        for (let j = i; j < numeros.length; j++) {
            for (let k = j; k < numeros.length; k++) {
                if (numeros[i] + numeros[j] + numeros[k] == 0) {
                    numerosIntroducir.push(numeros[i]);
                    numerosIntroducir.push(numeros[j]);
                    numerosIntroducir.push(numeros[k]);
                    numerosDevolver.push(numerosIntroducir);
                }
            }
        }
    }
    return numerosDevolver;
}