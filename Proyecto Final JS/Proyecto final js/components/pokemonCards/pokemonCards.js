import "./pokemonCards.css";

export const pokemonCards = (data) => {
  document.getElementById("pokemonGallery").innerHTML = "";
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const figureTemplate = `
     <figure class=${classCustomType}>
    <img src=${pokemon.image} alt=${pokemon.name} /> 
    <h2>${pokemon.name}</h2>
    </figure>`;
    document.getElementById("pokemonGallery").innerHTML += figureTemplate;
  });
};
