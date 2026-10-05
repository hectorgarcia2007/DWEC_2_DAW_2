function comprobarPiedras() {
  const inputJoya = document.getElementById("idJoya").value;
  const inputPiedra = document.getElementById("idPiedra").value;

  const contenedor = document.getElementById("idContenedor");

  contenedor.innerHTML =
    "<p>Comparacion es: " + devolverPiedra(inputJoya, inputPiedra);
  ("</p>");
}

function devolverPiedra(joya, piedra) {
  if (joya.length < 0 || piedra.length < 0) {
    return 0;
  }
  let numeroDevolver = 0;
  for (let i = 0; i < piedra.length; i++) {
    if (joya.includes(piedra.charAt(i))) {
      numeroDevolver++;
    }
  }

  return numeroDevolver;
}
