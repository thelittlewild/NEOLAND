import "./style.css";
/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

const button = document.getElementById("btnToClick");
button.addEventListener("click", (evento) => {
  console.log(evento);
});

const focus = document.getElementsByClassName("focus");
const focusInput = focus.item(0);
focusInput.addEventListener("focus", () => {
  console.log(focusInput.value);
});

const value = document.getElementsByClassName("value");
const valueInput = value.item(0);
valueInput.addEventListener("input", () => {
  console.log(valueInput.value);
});
