//Iteración #3: Calcular la suma
// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

//Puedes usar este array para probar tu función:

const numbersList = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let arrayNumbers = 0;
  for (let index = 0; index < param.length; index++) {
    arrayNumbers += param[index];
  }
  return arrayNumbers;
}
const sumaNumbers = sumAll(numbersList);

console.log(sumaNumbers);
