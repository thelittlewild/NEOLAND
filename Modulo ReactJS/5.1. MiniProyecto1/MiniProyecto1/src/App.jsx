import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <div className="Template">
      {characterList
        .filter((character) => (character.status = "Alive"))
        .map((character) => (
          <div key={character.id}>
            <h2>name: {character.name}</h2>
            <img src={character.image} />
            <h2>origin: {character.origin.name}</h2>
          </div>
        ))}
    </div>
  );
};

export default App;
