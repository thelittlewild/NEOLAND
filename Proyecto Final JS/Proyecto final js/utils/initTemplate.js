import { printTemplateHeader, printTemplateFooter } from "../components";

// Función que nos exporte:

export const initTemplate = () => {
  const app = document.getElementById("app"); //apuntamos a dónde inyectamos las cosas
  // creamos los elementos:
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  // inyectamos los elementos en el contenedor de la aplicación
  console.log(app);

  app.append(header, main, footer);
  printTemplateHeader();
  printTemplateFooter();
};
