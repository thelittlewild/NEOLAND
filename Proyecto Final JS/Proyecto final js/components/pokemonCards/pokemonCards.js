import "./pokemonCards.css";

export const pokemonCards = (data) => {
  document.getElementById("pokemonGallery").innerHTML = "";
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const figureTemplate = `
     <figure class=${classCustomType}>
    <img src=${pokemon.image} alt=${pokemon.name} /> 
    <h2 id="pokemonName">${pokemon.name}</h2>
    <h1 id="pokemonSize">Alt ${pokemon.height} || ${pokemon.weight} Peso</h1>
    </figure>`;
    document.getElementById("pokemonGallery").innerHTML += figureTemplate;
  });
};
