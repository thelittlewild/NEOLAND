// Iteración #6: Mixed For...of e includes
// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let catFree = [];
for (const juguete of toys) {
  if (!juguete.name.includes("gato")) catFree.push(juguete);
}
console.log(catFree);
