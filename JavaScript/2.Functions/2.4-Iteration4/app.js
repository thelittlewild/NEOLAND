//Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const moreNumbers = [12, 21, 38, 5, 45, 37, 6];
function sumAllTwo(param) {
  let arrayNumbers = 0;
  for (let index = 0; index < param.length; index++) {
    arrayNumbers += param[index];
  }
  return arrayNumbers;
}

const anotherSuma = sumAllTwo(moreNumbers);

console.log(anotherSuma / moreNumbers.length);
