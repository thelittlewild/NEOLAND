import "./Memory.css";
import JSConfetti from "js-confetti";

const template = () => `

<div id="containerCards">
<div id="time"></div>  
<section class="memory-game">
  
    <div class="memory-card" id="Cat1" data-framework="Cat1">
      <img
        class="front-face"
        src="https://i.imgur.com/i5qiIsD.png"
        alt="Cat1"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
    <div class="memory-card" id="Cat1" data-framework="Cat1">
      <img
        class="front-face"
        src="https://i.imgur.com/i5qiIsD.png"
        alt="Cat1"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>

    <div class="memory-card" id="Cat2" data-framework="Cat2">
      <img
        class="front-face"
        src="https://i.imgur.com/3tw7Giu.png"
        alt="Cat2"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
    <div class="memory-card" id="Cat2" data-framework="Cat2">
      <img
        class="front-face"
        src="https://i.imgur.com/3tw7Giu.png"
        alt="Cat2"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>

    <div class="memory-card" id="Cat3" data-framework="Cat3">
      <img
        class="front-face"
        src="https://i.imgur.com/gMqhEwb.png"
        alt="Cat3"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
    <div class="memory-card" id="Cat3" data-framework="Cat3">
      <img
        class="front-face"
        src="https://i.imgur.com/gMqhEwb.png"
        alt="Cat3"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>

    <div class="memory-card" id="Cat4" data-framework="Cat4">
      <img
        class="front-face"
        src="https://i.imgur.com/4Zl3nmz.png"
        alt="Cat4"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
    <div class="memory-card" id="Cat4" data-framework="Cat4">
      <img
        class="front-face"
        src="https://i.imgur.com/4Zl3nmz.png"
        alt="Cat4"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>

    <div class="memory-card" id="Cat5" data-framework="Cat5">
      <img
        class="front-face"
        src="https://i.imgur.com/v70gnPx.png"
        alt="Cat5"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
    <div class="memory-card" id="Cat5" data-framework="Cat5">
      <img
        class="front-face"
        src="https://i.imgur.com/v70gnPx.png"
        alt="Cat5"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>

    <div class="memory-card" id="Cat6" data-framework="Cat6">
      <img
        class="front-face"
        src="https://i.imgur.com/rx3JRve.png"
        alt="Cat6"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
    <div class="memory-card" id="Cat6" data-framework="Cat6">
      <img
        class="front-face"
        src="https://i.imgur.com/rx3JRve.png"
        alt="Cat6"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="Reverso Carta"
      />
    </div>
  </section>
  
  </div>
`;
//--------------------

let lockBoard = false;
let firstCard, secondCard;
let contador = 0;
let ok = 0;
let segundos;
let intervalo;
//! -------------------------------------------------------la logica DEL JUEGO -----------
const flipCard = (e, card) => {
  if (!lockBoard) {
    card.classList.add("flip");
    const numberFlip = document.querySelectorAll(".flip");
    if (numberFlip.length === 2) {
      lockBoard = true;
      checkForMatch(numberFlip);
    }
  }
};

const checkForMatch = (numberFlip) => {
  contador++;
  let isMatch = numberFlip[0].id === numberFlip[1].id;
  isMatch ? disableCards(numberFlip) : unflipCards(numberFlip);
};

const disableCards = (numberFlip) => {
  ok++;
  numberFlip[0].removeEventListener("click", flipCard);
  numberFlip[1].removeEventListener("click", flipCard);
  numberFlip[0].classList.add("flipOk");
  numberFlip[1].classList.add("flipOk");
  numberFlip[0].classList.remove("flip");
  numberFlip[1].classList.remove("flip");

  resetBoard();
  if (ok === 6) segundos = 1;
  // ok === 6 && (segundos = 1);
};

function unflipCards(numberFlip) {
  lockBoard = true;

  setTimeout(() => {
    numberFlip[0].classList.remove("flip");
    numberFlip[1].classList.remove("flip");

    resetBoard();
  }, 1500);
}

const resetBoard = () => {
  lockBoard = false;
};

//! -------------------------------------- LA LOGICA DEL PINTADO DEL JUEGO --------------------------------
const shuffle = () => {
  const cards = document.querySelectorAll(".memory-card");
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
  addListeners(cards);
  segundos = 10;
  intervalo = setInterval(time, 1000);
};

const addListeners = (cards) => {
  cards.forEach((card) =>
    card.addEventListener("click", (e) => flipCard(e, card))
  );
};

const time = () => {
  segundos--;
  const containerTime = document.getElementById("time");
  const segundosTime = `<h4>${segundos}</h4>`;
  containerTime.innerHTML = segundosTime;
  checkInterval();
};

const checkInterval = () => {
  if (segundos === 0) {
    clearInterval(intervalo);
    const timer = document.getElementById("time");
    timer.innerHTML = "";
    const memory = document.querySelector(".memory-game");
    const templateEnd = `<div class="containerEnd"><h2> Has finalizado el juego</h2>
    <h4>${ok === 6 ? "🌸Has ganado🌸" : "Has perdido 💥"}</h4>
    <h6>Movimientos: ${contador}</h6>
    <button id="resetButton">RESET</button></div>`;
    //! --------------------confeti -----------------------
    if (ok === 6) {
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: ["🌸"],
      });
    } else {
      const jsConfetti = new JSConfetti();

      jsConfetti.addConfetti({
        emojis: ["😪"],
      });
    }
    //!---------------------------------------------------------------------
    memory.innerHTML = "";
    memory.innerHTML = templateEnd;
    const reset = document.querySelector("#resetButton");
    reset.addEventListener("click", () => {
      contador = 0;
      ok = 0;
      segundos = 60;
      document.querySelector("main").innerHTML = template();
      shuffle();
    });
  }
};

export const PrintMemoryGame = () => {
  document.querySelector("main").innerHTML = template();
  shuffle();
};
