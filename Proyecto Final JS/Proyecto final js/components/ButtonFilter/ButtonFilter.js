import { filterPokemon } from "../../utils";
import "./ButtonFilter.css";

export const printButton = (types) => {
  types.forEach((type) => {
    const buttonType = `<button class="buttonFilter ${type}-button ${type}">
      ${type}
    </button>`;
    const containerFilter = document.getElementById("filterButton");
    containerFilter.innerHTML += buttonType;
  });
  addListeners(types);
};

const addListeners = (types) => {
  types.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);
    buttonType.addEventListener("click", (e) => {
      filterPokemon(type, "type");
    });
  });
};
