/*2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/

const body = document.querySelector("body");
body.appendChild(document.createElement("div"));

const p = document.createElement("div");
p.appendChild(document.createElement("p"));
body.appendChild(p);

const seisp = document.createElement("div");
for (let index = 0; index < 6; index++) {
  seisp.appendChild(document.createElement("p"));
}
body.appendChild(seisp);

const dinamico = document.createElement("p");
dinamico.innerText = "soy dinámico!";
body.appendChild(dinamico);

const h2 = document.querySelector("h2.fn-insert-here");
const wubba = document.createElement("p");
wubba.innerText = "Wubba Lubba dub dub";
h2.appendChild(wubba);

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const socialMedia = document.createElement("ul");
for (let index = 0; index < apps.length; index++) {
  const element = apps[index];
  const li = document.createElement("li");
  li.innerText = element;
  socialMedia.appendChild(li);
}
body.appendChild(socialMedia);

const remover = document.querySelectorAll(".fn-remove-me");
remover.forEach((target) => {
  target.remove();
});

const insertion = document.querySelectorAll("div.fn-insert-here");
const medio = document.createElement("p");
medio.innerText = "Voy en medio!";
body.insertBefore(medio, insertion[1]);

const dentro = document.querySelectorAll("div.fn-insert-here");
dentro.forEach((target) => {
  const voyDentro = document.createElement("p");
  voyDentro.innerText = "Voy dentro!";
  target.appendChild(voyDentro);
});
