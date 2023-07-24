import { getPokemonById } from "../service/pokemon.service";
import { pokemonType } from "./pokemonType";

let dataGlobal;
export const dataPokemon = async () => {
  const rawData = [];

  for (let i = 1; i < 151; i++) {
    rawData.push(await getPokemonById(i));
  }

  return dataMap(rawData); // recibimos la data en bruto ya mapeada
};

//recorremos la data y nos quedamos con la información que nos interesa en concreto:
const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types, // tipo del pokemon
    // --4
    // --5
  }));
  const types = pokemonType(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };
  return dataGlobal;
};
