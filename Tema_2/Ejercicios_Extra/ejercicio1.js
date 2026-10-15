/*
Se te da un arreglo de enteros nums y un entero target. Debes encontrar
dos números distintos en nums cuya suma sea igual a target. Devuelve sus
índices como un arreglo [i, j]. Se asume que existe exactamente una
solución.
*/

function encontrarTarget(numeros, target) {
    let devolverArray = [];

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i; j < numeros.length; j++) {
            if (numeros[i] + numeros[j] == target) {
                devolverArray.push(numeros[i]);
                devolverArray.push(numeros[j]);
                return devolverArray;
            }
        }
    }
    return -1;
}