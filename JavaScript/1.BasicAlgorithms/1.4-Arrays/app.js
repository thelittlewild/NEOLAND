// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengersTwo = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const result = avengersTwo.splice(0, 1, "IRONMAN");
console.log(result);
console.log(avengersTwo);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengersThree = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengersThree.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharactersTwo = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharactersTwo.pop();
console.log(rickAndMortyCharactersTwo[0]);
console.log(rickAndMortyCharactersTwo[rickAndMortyCharacters.length - 1]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharactersThree = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharactersThree.splice(1, 2);
console.log(rickAndMortyCharactersThree);

//
