import { initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img src="https://i.imgur.com/94d1Los.gif" alt="go to pokemon" />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li><figure id="navigateQuiz">
        <img src="https://i.imgur.com/tWCP3Sg.gif" alt="go to quiz" />
        <h2>QUIZ</h2>
      </figure>
      </li>
      <li>
        <figure id="navigateMemoryGame">
          <img src="https://media2.giphy.com/media/9oa3sE4IdWbqO61WGT/giphy.gif?cid=82a1493betq28l6jebdgmybealj7yiqwazbws62lv70he6ba&ep=v1_gifs_search&rid=giphy.gif" alt="go to memory game" />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img src="https://i.imgur.com/RWlr1KI.gif" alt="go to tres en raya" />
          <h2>3 EN RAYA</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  const navigateMemoryGame = document.getElementById("navigateMemoryGame");
  const navigateTresEnRaya = document.getElementById("navigateTresEnRaya");
  const navigateQuiz = document.getElementById("navigateQuiz");

  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });

  navigateMemoryGame.addEventListener("click", () => {
    initControler("MemoryGame");
  });

  navigateQuiz.addEventListener("click", () => {
    initControler("Quiz");
  });

  navigateTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  addEventListeners();
};
