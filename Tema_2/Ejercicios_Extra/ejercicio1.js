/*
Se te da un arreglo de enteros nums y un entero target. Debes encontrar
dos números distintos en nums cuya suma sea igual a target. Devuelve sus
índices como un arreglo [i, j]. Se asume que existe exactamente una
solución.
*/

function encontrarTarget(numeros, target) {
    let devolverArray = []; //Array del resultado

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i; j < numeros.length; j++) { //2 for para hacer 2 comprobacione de posiciones diferentes
            if (numeros[i] + numeros[j] == target) {  //Se encuentra el target
                devolverArray.push(numeros[i]); //Se añade al array
                devolverArray.push(numeros[j]);
                return devolverArray;
            }
        }
    }
    return -1; //En caso de no encontrar nada, devuelve -1
}