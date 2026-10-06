/*
Haz una función que calcule y devuelva el número de vocales en la
cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de
entrada sólo consta de letras minúsculas y/o espacios.
*/

function devolverVocales(palabra) {
    let devolver = 0;
    for (let i = 0; i < palabra.length; i++) {
        switch (palabra.chatAt(i).toLowerCase()) {
            case a:
            case e:
            case i:
            case o:
            case u:
                devolver++;
                break;
        }
    }
    return devolver;
}