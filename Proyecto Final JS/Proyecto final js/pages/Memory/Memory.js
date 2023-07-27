import "./Memory.css";

const template = () => `
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
`;
//--------------------

export const PrintMemoryGame = () => {
  document.querySelector("main").innerHTML = template();
};
//----------------
const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
