import React from "react";
import { Link, Outlet } from "react-router-dom";
import ListadoHeroeDetail from "../pages/ListadoPage";
import { getHeroes } from "./data/data";

const Heroes = () => {
  const heroes = getHeroes();
  return (
    <>
      <div>
        <h1>All heroes 🦸‍♂️🦸‍♀️</h1>
        <ul>
          {heroes.map((heroe) => (
            <li key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                <ListadoHeroeDetail heroe={heroe} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Heroes;
