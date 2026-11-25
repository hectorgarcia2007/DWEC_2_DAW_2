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
    moverBtnRandom(event.target);
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

let arrayAllIntervalsKefirs = [];

let velocidadMovimiento = 1000;
setInterval(() => {
  velocidadMovimiento = Math.abs(velocidadMovimiento - 200);
  arrayAllIntervalsKefirs.forEach((element) => {
    clearInterval(element);
  });
}, 1000);

const numKefirDef = Math.round(Math.random() * 10);
createKefir(numKefirDef);
let contadorKefir = document.getElementById("numeroKefir");
contadorKefir.textContent = numKefirDef;

function createKefir(num) {
  for (let index = 0; index < num; index++) {
    let imgKefir = document.createElement("img");
    imgKefir.classList.add("boton");
    imgKefir.classList.add("imgKefir");
    imgKefir.src = "kefir.png";
    document.getElementsByTagName("main")[0].appendChild(imgKefir);
    moverBtnRandom(imgKefir);
    arrayAllIntervalsKefirs.push(
      setInterval(() => {
        moverBtnRandom(imgKefir);
      }, velocidadMovimiento),
    );
    imgKefir.addEventListener("click", duplicateKefir);
  }
}

function duplicateKefir(event) {
  event.target.remove();
  createKefir(2);

  aumentarNumContador(contadorKefir, event);
  aumentarNumContador(document.getElementById("numeroClicks"), event);
}
