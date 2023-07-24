import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard } from "../pages";

// -------------CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO --------------------

// qué componente quiere renderizar (pagesRender):
export const initControler = (pagesRender) => {
  console.log("soy el user", getUser().name); // para mantener el user cuando recargue
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
      "MemoryGame()";
      break;
    case "Quiz":
      "Quiz()";
      break;
    case "Login":
      Login();
  }
};
