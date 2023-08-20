import React from "react";
import "./KpopGroups.css";

const KpopGroups = ({ groups }) => {
  return (
    <div>
      {groups.map((group) => {
        return (
          <div key={group.name}>
            <h3>{group.name}</h3>
            <p>Any album owned: {group.albumsOwned}? "✔💖" : "❌💔" </p>
            <p>Bias: {group.bias}</p>
          </div>
        );
      })}
    </div>
  );
};

export default KpopGroups;
