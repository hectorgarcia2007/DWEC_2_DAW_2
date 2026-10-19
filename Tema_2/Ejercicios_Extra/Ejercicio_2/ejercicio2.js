/*
Dada una cadena s, encuentra la longitud de la subcadena más larga que
no tenga caracteres repetidos.
*/

function encontrarLognitud(cadena) {
    let longitudMaxima = Number.MIN_VALUE; //Longitud que se devolvera.

    for (let i = 0; i < cadena.length; i++) {
        let longitudComprobar = buscarLongitud(cadena, i) //Comprobador de longitud por posicion.
        if (longitudComprobar > longitudMaxima) { //Si es mayor se reemplaza.
            longitudMaxima = longitudComprobar;
        }
    }
    return longitudMaxima;
}

function buscarLongitud(cadena, pos) {
    for (let j = pos+1; j < cadena.length; j++) {
        if (cadena[pos] == cadena[j]) { //Encuentra donde se repite.
            return j - pos;
        }
    }
    return -1; //En caso de no encontrar devuelve -1, asi al comprobarla luego nunca sera mas que la maxima ya almacenada.
}