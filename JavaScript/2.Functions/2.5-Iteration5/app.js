// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
// Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let sum = 0;
  for (let index = 0; index < param.length; index++)
    if (typeof param[index] == "string") sum += param[index].length;
    else sum += param[index];

  return sum;
}

console.log(averageWord(mixedElements));
