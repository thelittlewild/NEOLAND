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
      <li><figure>
        <img src="https://i.imgur.com/tWCP3Sg.gif" alt="go to quiz" />
        <h2>QUIZ</h2>
      </figure>
      </li>
      <li>
        <figure>
          <img src="https://i.imgur.com/RWlr1KI.gif" alt="go to memory game" />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  addEventListeners();
};
