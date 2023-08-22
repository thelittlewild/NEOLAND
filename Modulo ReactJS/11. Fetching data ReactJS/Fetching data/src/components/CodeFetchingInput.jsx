import { useState, useEffect } from "react";

export const CodeFetchingInput = () => {
  const [filter, setFilter] = useState("ditto");
  const [pokemonCollection, setPokemonCollection] = useState([]);

  useEffect(() => {
    const getPokemonFiltered = async () => {
      const pokemonList = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${filter}`
      );

      const pokemonListToJson = await pokemonList.json();

      return {
        ...pokemonListToJson,
        name: pokemonListToJson.name,
        image: pokemonListToJson.sprites.front_shiny,
      };
    };

    getPokemonFiltered().then((pokemon) => setPokemonCollection([pokemon]));
  }, [filter]);

  return (
    <>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />

      <ul>
        {pokemonCollection.map((pokemon) => (
          <li key={pokemon.name}>
            <h1> {pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </>
  );
};
