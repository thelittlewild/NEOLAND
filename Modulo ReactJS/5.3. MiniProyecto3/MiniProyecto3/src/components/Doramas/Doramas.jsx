import React from "react";
import "./Doramas.css";

const Doramas = ({ doramas }) => {
  return (
    <div>
      {doramas.map((dorama) => {
        return (
          <div key={dorama.name}>
            <h3>{dorama.name}</h3>
            <p>
              Type: {dorama.type} Genre: {dorama.genre}
            </p>
            <h4>Calification: {dorama.vote}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Doramas;
