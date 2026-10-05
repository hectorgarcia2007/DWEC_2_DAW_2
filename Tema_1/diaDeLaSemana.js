function comprobarDia() {
  const inputDia = Number.parseInt(document.getElementById("idDia").value);
  const inputMes = Number.parseInt(document.getElementById("idMes").value);
  const inputAno = Number.parseInt(document.getElementById("idAno").value);

  const contenedor = document.getElementById("idContenedor");

  contenedor.innerHTML =
    "<p>El dia es: " + devolverDia(inputDia, inputMes, inputAno);
  ("</p>");
}

function devolverDia(dia, mes, ano) {
  if (ano < 1971 || ano > 2100) {
    return NaN;
  }
  let fecha = new Date(ano, mes, dia);
  let diaNum = fecha.getDay();
  let diaDevolver = NaN;
  switch (diaNum) {
    case 0:
      diaDevolver = "Domingo";
      break;
    case 1:
      diaDevolver = "Lunes";
      break;
    case 2:
      diaDevolver = "Martes";
      break;
    case 3:
      diaDevolver = "Miercoles";
      break;
    case 4:
      diaDevolver = "Jueves";
      break;
    case 5:
      diaDevolver = "Viernes";
      break;
    case 6:
      diaDevolver = "Sabado";
      break;
  }
  return diaDevolver;
}
