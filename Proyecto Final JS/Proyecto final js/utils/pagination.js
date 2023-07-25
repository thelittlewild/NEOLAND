import { pokemonCards } from "../components";

export const Pagination = (data, numberElement) => {
  const longitud = data.length;
  const numberDigitOfPage = longitud / numberElement;

  for (let i = 0; i < numberDigitOfPage; i++) {
    const buttonNumber = document.createElement("button");
    buttonNumber.setAttribute("class", `${i + 1} buttonPagination`);
    buttonNumber.innerHTML = i + 1;
    document.getElementById("Pagination").appendChild(buttonNumber);
    addListeners(buttonNumber, data, numberElement, i, numberDigitOfPage);
  }
};

const addListeners = (
  buttonNumber,
  data,
  numberElement,
  i,
  numberDigitOfPage
) => {
  buttonNumber.addEventListener("click", () => {
    const allButtonPag = document.querySelectorAll(".buttonPagination");

    allButtonPag.forEach((pag) => {
      pag.style.border = "solid 1px #0000006d"; // lleva el borde del botón negro
    });

    buttonNumber.style.border = "solid 1px #e1749e";
    const end = (i + 1) * numberElement;
    const start = end - numberElement < 0 ? 0 : end - numberElement;
    pokemonCards(data.slice(start, end));
  });
};
