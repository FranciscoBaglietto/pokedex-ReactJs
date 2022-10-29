import React from "react";
import Paginas from "../Paginas/Paginas";
import Pokemon from "../Pokemon/Pokemon";
import "./Pokedex.css";

const Pokedex = ({ pokemones, page, setPage, total, loading }) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };
  const nextPage = () => {
    const nextPage = Math.max(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Paginas
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
      {loading ? (
        <div>Cargando Pokemones...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemones.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
