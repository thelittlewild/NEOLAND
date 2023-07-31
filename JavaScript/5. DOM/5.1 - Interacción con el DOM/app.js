/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

const showme = document.querySelector(".showme");

console.log(showme);

const pillado = document.querySelector("h1#pillado");

console.log(pillado);

const allp = document.querySelectorAll("p");

console.log(allp);

const pokemon = document.querySelectorAll(".pokemon");

console.log(pokemon);

const test = document.querySelectorAll('[data-function="testMe"]');

console.log(test);

console.log(test[2].innerHTML);
