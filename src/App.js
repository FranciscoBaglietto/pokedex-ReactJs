import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Searchbar from "./components/Searchbar/Searchbar";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Searchbar />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
