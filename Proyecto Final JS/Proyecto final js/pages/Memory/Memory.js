import "./Memory.css";

const template = () => `
  
<div id="containerMemoryGame">

<section class="memoryGame">
    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/i5qiIsD.png"
        alt="Gato1"
      />
    </div>

    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/i5qiIsD.png"
        alt="Gato1"
      />
    </div>



    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/3tw7Giu.png"
        alt="Gato2"
      />
    </div>

    <div id="memoryCard">
    <img
      class="front-face"
      src="https://i.imgur.com/wKaqQ4G.png"
      alt="reverso"
    />
    <img
      class="back-face"
      src="https://i.imgur.com/3tw7Giu.png"
      alt="Gato2"
    />
  </div>



    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/gMqhEwb.png"
        alt="Gato3"
      />
    </div>

    <div id="memoryCard">
    <img
      class="front-face"
      src="https://i.imgur.com/wKaqQ4G.png"
      alt="reverso"
    />
    <img
      class="back-face"
      src="https://i.imgur.com/gMqhEwb.png"
      alt="Gato3"
    />
  </div>



    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/4Zl3nmz.png"
        alt="Gato4"
      />
    </div>

    <div id="memoryCard">
    <img
      class="front-face"
      src="https://i.imgur.com/wKaqQ4G.png"
      alt="reverso"
    />
    <img
      class="back-face"
      src="https://i.imgur.com/4Zl3nmz.png"
      alt="Gato4"
    />
  </div>

  

    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/v70gnPx.png"
        alt="Gato5"
      />
    </div>

    <div id="memoryCard">
    <img
      class="front-face"
      src="https://i.imgur.com/wKaqQ4G.png"
      alt="reverso"
    />
    <img
      class="back-face"
      src="https://i.imgur.com/v70gnPx.png"
      alt="Gato5"
    />
  </div>
 


    <div id="memoryCard">
      <img
        class="front-face"
        src="https://i.imgur.com/wKaqQ4G.png"
        alt="reverso"
      />
      <img
        class="back-face"
        src="https://i.imgur.com/rx3JRve.png"
        alt="Gato6"
      />
    </div>

    

    <div id="memoryCard">
    <img
      class="front-face"
      src="https://i.imgur.com/wKaqQ4G.png"
      alt="reverso"
    />
    <img
      class="back-face"
      src="https://i.imgur.com/rx3JRve.png"
      alt="Gato6"
    />
  </div>
  </section>

  </div>
`;

const addListeners = () => {};

export const PrintMemoryGame = () => {
  document.querySelector("main").innerHTML = template();
};

//-----------------------FLIP--------------

const cards = document.querySelectorAll(".memoryCard");

function flipCard() {
  console.log("I was clicked");
  console.log(this);
}

cards.forEach((card) => card.addEventListener("click", flipCard));
