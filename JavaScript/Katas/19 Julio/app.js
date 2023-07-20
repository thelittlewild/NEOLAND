/*Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

*/

const spellingWords = (string, letter) => {
  let contador = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == letter) {
      console.log(string[index]);
      contador++;
    }
  }
  return contador;
};

console.log(spellingWords("Hello", "e"));

/*(Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0 */
