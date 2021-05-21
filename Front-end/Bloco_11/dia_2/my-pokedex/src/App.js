import './App.css';
import Pokemons from './data'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <header>
    <h1>Pokedex</h1>
    <div className = 'Pokemons-div'>
    <Pokedex pokemons = {Pokemons} />
    </div>
    </header>
  );
}

export default App;
