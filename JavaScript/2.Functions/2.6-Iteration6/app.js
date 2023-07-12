// Iteración #6: Valores únicos
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let menu = [];
  for (let index = 0; index < param.length; index++) {
    let comida = param[index];
    if (menu.indexOf(comida) == -1) menu.push(comida);
  }
  return menu;
}
const finalMenu = removeDuplicates(duplicates);

console.log(finalMenu);
