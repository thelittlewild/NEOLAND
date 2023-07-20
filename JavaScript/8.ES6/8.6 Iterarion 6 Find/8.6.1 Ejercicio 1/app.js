/*6.1 Dado el siguiente array, usa .find() para econtrar el número 100.*/

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findHundred = numbers.find((number) => number === 100);

console.log(findHundred);
