import React from "react";
import "./ItemList.css";

const ItemList = ({ name, image, status, origin }) => {
  return (
    <li className="ItemList">
      <p>{name}</p>
      <img src={image} />
      <p>{status}</p>
      <p>{origin}</p>
    </li>
  );
};

export default ItemList;
