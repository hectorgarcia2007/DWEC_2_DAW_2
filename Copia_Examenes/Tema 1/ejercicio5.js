"use strict";

function comprobarContrasena(contrasena) {
  // Escribe aquí tu solución
  if (typeof contrasena == "string") {
    if (contrasena.length == 8) {
      for (let i = 0; i < contrasena.length; i++) {
        if (
          contrasena[i] == contrasena[i].toUpperCase() &&
          contrasena[i] !== contrasena[i].toLowerCase()
        ) {
          for (let j = 0; j < contrasena.length; j++) {
            if (
              contrasena[j] == contrasena[j].toLowerCase() &&
              contrasena[j] !== contrasena[j].toUpperCase()
            ) {
              for (let k = 0; k < contrasena.length; k++) {
                switch (Number(contrasena[k])) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                  case 8:
                  case 9:
                    return true;
                    break;
                }
              }
            }
          }
        }
      }
    }
  }

  return false;
}

module.exports = { comprobarContrasena };
