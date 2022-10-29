import React from "react";
import "./Paginas.css";

const Paginas = ({onLeftClick, onRightClick, page, totalPages}) => {

  return (
    <div className="paginas">
      <button onClick={onLeftClick}>
        <div>⬅</div>
      </button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRightClick}>
        <div>▶</div>
      </button>
    </div>
  );
};

export default Paginas;
