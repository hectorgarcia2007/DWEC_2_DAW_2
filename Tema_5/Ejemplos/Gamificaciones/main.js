const btnGame = document.getElementById("btnGame");
moverBtnRandom(btnGame);

btnGame.addEventListener("mouseover", frickYou);
document.addEventListener("click", aumentarContador);

let button = document.createElement("button");
button.classList.add("boton");
button.setAttribute("id", "botonX2");
button.textContent = "Click X2";
moverBtnRandom(button);
document.getElementsByTagName("main")[0].appendChild(button);

setInterval(() => {
  moverBtnRandom(button);
}, 500);

function moverBtnRandom(btnMover) {
  let width = Math.round(Math.random() * 90);
  let height = Math.round(Math.random() * 90);

  btnMover.style = `top:${height}vh;left:${width}vw;`;
}

function frickYou(event) {
  setTimeout(() => {
    moverBtnRandom(btnGame);
  }, 200);
}

function aumentarContador(event) {
  let contador = null;
  if (event.target.className === "boton") {
    contador = document.getElementById("numeroClicks");
  } else {
    contador = document.getElementById("numeroClicksFallar");
  }
  aumentarNumContador(contador, event);
}

function aumentarNumContador(contador, event) {
  let numContador = Number.parseInt(contador.textContent);
  if (!(event.target.id === "botonX2")) {
    numContador++;
  } else {
    numContador += 2;
  }

  contador.textContent = numContador;
}
