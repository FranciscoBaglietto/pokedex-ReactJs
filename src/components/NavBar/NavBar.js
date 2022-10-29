import React from "react";
import "./NavBar.css";

const Navbar = () => {
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="navBar">
      <div />
      <div>
        <img src={imgUrl} alt="Pokeapi" className="navbar-image" />
      </div>
      <div>♥</div>
    </nav>
  );
};

export default Navbar;
