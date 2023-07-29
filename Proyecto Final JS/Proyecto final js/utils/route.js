import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintMemoryGame,
  PrintPokemonPage,
  printTemplateDashboard,
  PrintQuiz,
  PrintTresEnRaya,
} from "../pages";

// -------------CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO --------------------

// qué componente quiere renderizar (pagesRender):
export const initControler = (pagesRender) => {
  // va a renderizar el Login:
  switch (pagesRender) {
    case undefined:
      return localStorage.getItem(getUser().name)
        ? printTemplateDashboard()
        : Login(); // si tienes usuario te carga dashboard, si no, te pide que te loguees
      break;
    case "Pokemon": // el usuario nos dice que quiere renderizar la página de Pokemon
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "MemoryGame":
      PrintMemoryGame();
      break;
    case "Quiz":
      PrintQuiz();
      break;
    case "TresEnRaya":
      PrintTresEnRaya();
      break;
    case "Login":
      Login();
  }
};
