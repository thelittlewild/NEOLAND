const fs = require("fs");

fs.readFile("kdramas.json", (err, kdramas) => {
  if (err) {
    // Si recibimos un error en el callback, lo mostraremos en consola
    console.log("There was an error reading the file!");
  } else {
    // Si obtenemos los datos y no un error, habrá que transformar
    // la información con JSON.parse() para poder mostrarla
    const parsedKdramas = JSON.parse(kdramas);
    console.log(parsedKdramas);
  }
});
