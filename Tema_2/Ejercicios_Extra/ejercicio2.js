/*
Dada una cadena s, encuentra la longitud de la subcadena más larga que
no tenga caracteres repetidos.
*/

function encontrarLognitud(cadena) {
    let longitudMaxima = Number.MIN_VALUE;

    for (let i = 0; i < cadena.length; i++) {
        let longitudComprobar = buscarLongitud(cadena, i)
        if (longitudComprobar > longitudMaxima) {
            longitudMaxima = longitudComprobar;
        }
    }
    return longitudMaxima;
}

function buscarLongitud(cadena, pos) {
    for (let j = pos; j < cadena.length; j++) {
        if (cadena[pos] == cadena[j]) {
            return j - pos;
        }
    }
    return -1;
}