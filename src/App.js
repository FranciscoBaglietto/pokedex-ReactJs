import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Searchbar from "./components/Searchbar/Searchbar";
import Pokedex from "./components/Pokedex/Pokedex";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonsData } from "./api";

function App() {
  const [pokemones, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonsData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)

    } catch (err) {

    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Searchbar />
        <Pokedex pokemones={pokemones}/>
      </div>
    </div>
  );
}

export default App;
