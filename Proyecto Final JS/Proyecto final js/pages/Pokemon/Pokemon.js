import { pokemonCards } from "../../components";
import { getPokemonById } from "../../service/pokemon.service";
import { dataPokemon } from "../../utils";
import "./Pokemon.css";

const template = () => `
<div id="pokemon">
<div id="containerFilter"></div>
<div id="pokemonGallery"></div>

</div>
`;

const dataService = async () => {
  const getData = await dataPokemon();
  const { pokemonData, type } = getData; //destructuring
  pokemonCards(pokemonData);
};

const addListeners = () => {};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};
