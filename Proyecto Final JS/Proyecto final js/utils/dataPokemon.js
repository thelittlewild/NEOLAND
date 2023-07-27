import { pokemonCards } from "../components";
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
    height: pokemon.height,
    weight: pokemon.weight,
  }));
  const types = pokemonType(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };
  return dataGlobal;
};

export const filterPokemon = (filterDataInputButton, donde) => {
  // para filtrar los Pokemon por tipo
  //filterDataInputButton: palabra para filtrar
  // donde: si queremos hacerlo por tipo en los botones o por nombre en el input

  switch (donde) {
    case "type":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.type[0].type.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );

        if (filterData.length === 0) {
          const filterData = dataGlobal.pokemonData.filter((pokemon) =>
            pokemon.type[1]?.type.name
              .toLowerCase()
              .includes(filterDataInputButton.toLowerCase())
          ); // si tienen la segunda posición de type me meto, si no, no

          pokemonCards(filterData);
        } else {
          pokemonCards(filterData);
        }
      }
      break;

    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );
        pokemonCards(filterData);
      }

      break;
  }
};
