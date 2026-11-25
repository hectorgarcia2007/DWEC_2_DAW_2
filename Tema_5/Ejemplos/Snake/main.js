const escenario = document.getElementById("escenario");
const snake = document.getElementById("snake");

let fruta = document.createElement("img");

fruta.id = "fruta";
fruta.alt = "fruta";

escenario.appendChild(fruta);

document.addEventListener("keydown", moverSnake);

let currentHeight = 50;
let currentWidth = 50;
function moverSnake(event) {
  switch (event.key) {
    case "ArrowLeft":
      currentWidth -= 1;
      break;
    case "ArrowRight":
      currentWidth += 1;
      break;
    case "ArrowUp":
      currentHeight -= 1;
      break;
    case "ArrowDown":
      currentHeight += 1;
      break;
  }
  snake.style = `TOP:${currentHeight}vh;LEFT:${currentWidth}vw;`;
}
