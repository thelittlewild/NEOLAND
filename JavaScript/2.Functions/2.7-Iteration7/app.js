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

const findName = (name, array) => {
  if (array.includes(name)) {
    return `true: El nombre ${name}, está en la posición ${array.indexOf(
      name
    )}`;
  } else {
    return false;
  }
};
console.log(findName("Logan", nameFinder));
console.log(findName("Jungkook", nameFinder));
