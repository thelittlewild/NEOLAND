import React from "react";
import Heroe from "../components/Heroe";

const ListadoHeroeDetail = ({ heroe }) => {
  console.log("hola");
  return (
    <>
      <h1>name: {heroe.name}</h1>
      <p>alias: {heroe.alias}</p>
      <p>age: {heroe.age}</p>
    </>
  );
};

export default ListadoHeroeDetail;
