// Iteración #7: Buscador de nombres
// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento,
// en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param) {
  let consultingName = [];
  for (let index = 0; index < nameFinder.length; index++) {
    const nameList = finderName[index];
    if (consultingName.indexOf(nameList)) return ["true"];
    else return ["false"];
  }
}
console.log(finderName("Jungkook"(nameFinder)));
