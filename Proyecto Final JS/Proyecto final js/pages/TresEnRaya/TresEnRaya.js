import { randomNumber } from "../../utils";
import "./TresEnRaya.css";

const template = () => `
  <div id="tresEnRaya">
    <div id="winnerIMG"></div>
    <div id="containerTresEnRaya">
      <div>
        <button id="inputCasilla1" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla1" /></button>
        <button id="inputCasilla2" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla2" /></button>
        <button id="inputCasilla3" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla3" /></button>
      </div>
      <div>
        <button id="inputCasilla4" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla4" /></button>
        <button id="inputCasilla5" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla5" /></button>
        <button id="inputCasilla6" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla6" /></button>
      </div>
      <div>
        <button id="inputCasilla7" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla7" /></button>
        <button id="inputCasilla8" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla8" /></button>
        <button id="inputCasilla9" class="tresRaya"><img src="https://i.imgur.com/pu6BPiv.png" id="imgCasilla9" /></button>
      </div>

      <button id="reset" class="reset">RESET</button>
    </div>
  </div>
`;

const addListeners = () => {
  const reset = document.getElementById("reset");
  reset.addEventListener("click", (e) => {
    resetGame();
  });
  const inputCasilla1 = document.getElementById("inputCasilla1");
  inputCasilla1.addEventListener("click", (e) => {
    turn(1);
  });

  const inputCasilla2 = document.getElementById("inputCasilla2");
  inputCasilla2.addEventListener("click", (e) => {
    turn(2);
  });

  const inputCasilla3 = document.getElementById("inputCasilla3");
  inputCasilla3.addEventListener("click", (e) => {
    turn(3);
  });

  const inputCasilla4 = document.getElementById("inputCasilla4");
  inputCasilla4.addEventListener("click", (e) => {
    turn(4);
  });

  const inputCasilla5 = document.getElementById("inputCasilla5");
  inputCasilla5.addEventListener("click", (e) => {
    turn(5);
  });

  const inputCasilla6 = document.getElementById("inputCasilla6");
  inputCasilla6.addEventListener("click", (e) => {
    turn(6);
  });

  const inputCasilla7 = document.getElementById("inputCasilla7");
  inputCasilla7.addEventListener("click", (e) => {
    turn(7);
  });

  const inputCasilla8 = document.getElementById("inputCasilla8");
  inputCasilla8.addEventListener("click", (e) => {
    turn(8);
  });

  const inputCasilla9 = document.getElementById("inputCasilla9");
  inputCasilla9.addEventListener("click", (e) => {
    turn(9);
  });
};

var validPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // array que va a ir "tachando" posiciones ocupadas
var winnerCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const turn = (position) => {
  const validMovement = player1Turn(position); //solo cuenta el turno si es válido
  if (validMovement) {
    let winner = whoWins(); //comprueba si alguien ha ganado
    if (winner === "Nadie") {
      //si nadie ha ganado
      IAsTurn(); //mueve la máquina
      winner = whoWins(); //volvemos a comprobar
    }
  }
};

//juega el usuario:
const player1Turn = (position) => {
  if (validPositions.includes(position)) {
    const imgCasilla = document.getElementById("imgCasilla" + position); //cambia la imagen de la casilla
    imgCasilla.src = "https://i.imgur.com/FvYXwXZ.png"; // imagen que representa al usuario
    validPositions = validPositions.filter(
      (vPosition) => vPosition != position
    ); //tachamos la posición que acabamos de ocupar
    winnerCheck[position - 1] = 1;
    return true;
  } else return false;
};

// juega la máquina:
const IAsTurn = () => {
  const randomPosition = randomNumber(0, validPositions.length - 1); //length porque ya no serán siempre 9
  const randomCasilla = validPositions[randomPosition];
  const chosenIMG = document.getElementById("imgCasilla" + randomCasilla);
  chosenIMG.src = "https://i.imgur.com/VLOgstg.png"; // imagen que representa a la máquina
  validPositions = validPositions.filter(
    (vPosition) => vPosition != randomCasilla
  ); //tachamos la posición que acabamos de ocupar
  winnerCheck[randomCasilla - 1] = -1;
};

const resetGame = () => {
  const winnerIMG = document.getElementById("winnerIMG");
  winnerIMG.style.zIndex = -1;
  winnerIMG.innerHTML = "";

  const imgCasilla1 = document.getElementById("imgCasilla1");
  imgCasilla1.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla2 = document.getElementById("imgCasilla2");
  imgCasilla2.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla3 = document.getElementById("imgCasilla3");
  imgCasilla3.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla4 = document.getElementById("imgCasilla4");
  imgCasilla4.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla5 = document.getElementById("imgCasilla5");
  imgCasilla5.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla6 = document.getElementById("imgCasilla6");
  imgCasilla6.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla7 = document.getElementById("imgCasilla7");
  imgCasilla7.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla8 = document.getElementById("imgCasilla8");
  imgCasilla8.src = "https://i.imgur.com/pu6BPiv.png";
  const imgCasilla9 = document.getElementById("imgCasilla9");
  imgCasilla9.src = "https://i.imgur.com/pu6BPiv.png";
  validPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  winnerCheck = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

const whoWins = () => {
  const filaSuperior = winnerCheck[0] + winnerCheck[1] + winnerCheck[2];
  const filaCentral = winnerCheck[3] + winnerCheck[4] + winnerCheck[5];
  const filaInferior = winnerCheck[6] + winnerCheck[7] + winnerCheck[8];
  const columnaSuperior = winnerCheck[0] + winnerCheck[3] + winnerCheck[6];
  const columnaCentral = winnerCheck[1] + winnerCheck[4] + winnerCheck[7];
  const columnaInferior = winnerCheck[2] + winnerCheck[5] + winnerCheck[8];
  const primeraDiagonal = winnerCheck[0] + winnerCheck[4] + winnerCheck[8];
  const segundaDiagonal = winnerCheck[2] + winnerCheck[4] + winnerCheck[6];
  const winnerIMG = document.getElementById("winnerIMG");
  if (
    filaSuperior === -3 ||
    filaCentral === -3 ||
    filaInferior === -3 ||
    columnaSuperior === -3 ||
    columnaCentral === -3 ||
    columnaInferior === -3 ||
    primeraDiagonal === -3 ||
    segundaDiagonal === -3
  ) {
    winnerIMG.style.zIndex = 10;

    winnerIMG.innerHTML =
      '<img src="https://thumbs.gfycat.com/BelatedFreshBetafish-size_restricted.gif"/>';
    return "IA";
  }
  if (
    filaSuperior === 3 ||
    filaCentral === 3 ||
    filaInferior === 3 ||
    columnaSuperior === 3 ||
    columnaCentral === 3 ||
    columnaInferior === 3 ||
    primeraDiagonal === 3 ||
    segundaDiagonal === 3
  ) {
    winnerIMG.style.zIndex = 10;
    winnerIMG.innerHTML =
      '<img src="https://gifdb.com/images/high/anime-cardcaptor-sakura-blushing-phccynajy3yf5u9o.gif"/>';
    return "P1";
  }
  if (validPositions.length === 0) {
    winnerIMG.style.zIndex = 10;
    winnerIMG.innerHTML = '<img src="https://i.gifer.com/2uyx.gif"/>';
    return "Empate";
  }
  return "Nadie";
};

const dataService = () => {
  addListeners();
};

export const PrintTresEnRaya = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};
