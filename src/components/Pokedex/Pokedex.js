import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./Pokedex.css";

const Pokedex = ({ pokemones }) => {
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <div>Paginas</div>
      </div>
      <div className="pokedex-grid">
        {pokemones.map((pokemon, idx) => {
          return (
            <Pokemon pokemon={pokemon} key={pokemon.name}/>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
