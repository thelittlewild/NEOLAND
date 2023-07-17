/*In this little assignment you are given a string of space separated numbers,
 and have to return the highest and lowest number.*/

highAndLow("1 2 3 4 5"); // return "5 1"

const numeros = { ...highAndLow };
const mayoryMenor = [];

for (let comprobador = 0; index < numeros.length; index++) {
  if (numbers[index] <= numbers[index]) return mayoryMenor(index++);
}
console.log(mayoryMenor);

highAndLow("1 2 -3 4 5"); // return "5 -3"

highAndLow("1 9 3 4 -5"); // return "9 -5"
