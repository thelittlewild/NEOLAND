/*Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante. Sugerencia de array:*/

const fifas = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, index1, index2) => {
  let element1;
  let element2;
  array.forEach((element, index) => {
    if (index == index1) {
      element1 = element;
    } //guardamos los elementos como elementos 1 y 2 para identificarlos
    if (index == index2) {
      element2 = element;
    }
  });
  array[index1] = element2;
  array[index2] = element1;
  return array;
};

console.log(swap(fifas, 1, 3));
