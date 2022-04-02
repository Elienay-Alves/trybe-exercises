import './App.css';
import PokemonList from './components/PokemonLIst';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <PokemonList cards={ pokemons }/>
    </div>
  );
  
}

export default App;
