// -------------CONTROLADOR DE LO QUE SE RENDERIZA EN CADA MOMENTO --------------------

// qué componente quiere renderizar (pagesRender):
export const initControler = (pagesRender) => {
  // va a renderizar el Login:
  switch (pagesRender) {
    case undefined:
      return localStorage.getItem("user") ? "Deashboard()" : "Login()"; // si tienes usuario te carga dashboard, si no, te pide que te loguees
      break;
    case "Pokemon": // el usuario nos dice que quiere renderizar la página de Pokemon
      "Pokemon()";
      break;
    case "Dashboard":
      "Dashboard()";
      break;
    case "MemoryGame":
      "MemoryGame()";
      break;
    case "Quiz":
      "Quiz()";
      break;
    case "Login":
      "Login()";
  }
};
