import { pokemonCards, printButton } from "../../components";
import { getPokemonById } from "../../service/pokemon.service";
import { Pagination, dataPokemon, filterPokemon } from "../../utils";
import "./Pokemon.css";

const template = () => `
<div id="pokemon">
<div id="containerFilter">
  <div id="spinnerButtonFilter"></div>
  <div id="filterButton"></div>
  <input type="text"
   id="inputPokemon" 
   placeholder="Search your favorite Pokemon"
   />
</div>
<div id="Pagination"></div>
<div id="pokemonGallery"></div>

</div>
`;

const dataService = async () => {
  const getData = await dataPokemon();

  const { pokemonData, type } = getData; //destructuring

  pokemonCards(pokemonData);
  //(spiner1)
  printButton(type);
  //(spiner2)
  addListeners();
  Pagination(pokemonData, 25);
};

const addListeners = () => {
  // EVENT TO INPUT

  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
};
