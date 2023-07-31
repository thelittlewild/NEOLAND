// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto
//y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
// Haz varios ejemplos y compruebalos.
//Sugerencia de función:

//Ej array:

const bichitos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (bichitos, text) => {
  if (bichitos.includes(text)) {
    bichitos.forEach((bichi, index) => {
      if (bichi == text) {
        console.log(`El bichito ${text} se encuentra en la posición ${index}`);
      }
    });
  } else console.log(`El bichito ${text} no está en este jardín`);
};

findArrayIndex(bichitos, "Caracol");
findArrayIndex(bichitos, "Mariposa");
