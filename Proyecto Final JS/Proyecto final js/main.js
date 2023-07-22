import "./style.css";
import { initControler, initTemplate } from "./utils";

initTemplate(); // renderizamos las etiquetas de la estructura inicial
initControler(); //sin parámetros porque así en el Controlador de renderizado se renderiza el switch "undefined", que es donde está cada sección
