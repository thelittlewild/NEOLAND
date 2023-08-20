import React from "react";
import "./CharacterList.css";
import ItemList from "../ItemList/ItemList";

const CharacterList = ({ list }) => {
  return (
    <ul>
      {list.map((character) => {
        return (
          <ItemList
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            origin={character.origin.name}
          />
        );
      })}
    </ul>
  );
};

export default CharacterList;
