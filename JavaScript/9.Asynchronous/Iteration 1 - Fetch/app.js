const baseUrl = "https://api.nationalize.io";

const tengoSueño = () => {
  const inPut = document.querySelector("input");
  const url = `${baseUrl}/?name=${inPut.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

/*const X =
const Y =
const Z = */
