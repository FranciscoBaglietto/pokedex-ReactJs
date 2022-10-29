import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Searchbar from "./components/Searchbar/Searchbar";
import Pokedex from "./components/Pokedex/Pokedex";
import { useState, useEffect } from "react";
import { getPokemons, getPokemonsData } from "./api";

function App() {
  const [pokemones, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons( 25, 25* page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25))
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Navbar />
      <div>
        <Searchbar />
        
          <Pokedex  pokemones={pokemones} page={page} setPage={setPage} total={total} loading={loading} />
        
      </div>
    </div>
  );
}

export default App;
