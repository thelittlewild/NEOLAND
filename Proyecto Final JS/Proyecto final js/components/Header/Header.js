import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

//---------------------1) TEMPLATE -----------------------

const template = () => `
  <img src="https://i.imgur.com/8iJWiNu.png" 
  alt="logo" 
  id="logo" />

  <nav>

    <img
      src="https://i.imgur.com/tgd6cyW.png"
      alt="navigate to home app"
      id="buttonDashboard"
    />
    <img
    src="https://i.imgur.com/sWyp4Py.png"
    alt="change to style mode page"
    id="changeColor"
  />
    <img src="https://i.imgur.com/f8WdDFN.png" alt="logout" id="buttonLogout" />
  </nav>
`;

//------------------------------------2) Añadir los eventos con sus escuchadores

const addListeners = () => {
  // evento click del botón cambio de color.
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    const color = changeColorRGB(); // el evento nos da el target, que tiene mucha información
    document.body.style.background = color;
  });

  // evento click del botón que nos lleva a los juegos
  const bottonDashboard = document.getElementById("buttonDashboard");
  bottonDashboard.addEventListener("click", (e) => {
    initControler("Dashboard");
  });

  // evento click del logout
  const bottonLogout = document.getElementById("buttonLogout");
  bottonLogout.addEventListener("click", (e) => {
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};

// ---------------------- 3) La función que se exporta y que pinta

export const printTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
