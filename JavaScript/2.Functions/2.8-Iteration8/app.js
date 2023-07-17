// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

const contador = (array) => {
  let repeticiones = {};
  array.forEach((element) => {
    if (repeticiones.hasOwnProperty(element)) {
      repeticiones[element] += 1;
    } else {
      repeticiones[element] = 0;
    }
  });
  return repeticiones;
};
console.log(contador(counterWords));
