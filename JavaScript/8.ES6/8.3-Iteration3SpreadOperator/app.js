//3.1 Dado el siguiente array, crea una copia usando spread operators.
console.log("ejercicio 3.1");
const pointsList0 = [32, 54, 21, 64, 75, 43];

const copyPointsList0 = [...pointsList0];

console.log(copyPointsList0);

/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
console.log("ejercicio 3.2");
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copyToy = { ...toy };
console.log(copyToy);

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
console.log("ejercicio 3.3");
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const finalPointsList = [...pointsList, ...pointsList2];
console.log(finalPointsList);

// aquí abajo la primera forma que tuve de hacerlo antes de que un amigo me dijera que con las comas también funcionaba y quedase como 🤡
const finalPointsList2 = [...pointsList];
finalPointsList2.push(...pointsList2);
console.log(finalPointsList2);

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
console.log("ejercicio 3.4");
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

toyFinalList = { ...toy2, ...toyUpdate };
console.log(toyFinalList);

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
console.log("ejercicio 3.5");
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copyColors = colors;
copyColors.splice(1, 1);

console.log(copyColors);
