import PokemonCard from './components/PokemonCard'
import './App.css'
import { useState } from 'react';


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
 
  const PokemonPrecedent = () => setPokemonIndex(pokemonIndex - 1);
  const PokemonSuivant = () => setPokemonIndex(pokemonIndex + 1);

  return(
    <div>
       <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
       <nav>
        {pokemonIndex > 0 && (
       <button type='button' onClick={PokemonPrecedent}>Précédent</button>
       )}
       
       {pokemonIndex < pokemonList.length - 1 && (
       <button type='button' onClick={PokemonSuivant}>Suivant</button>
       )}
       </nav>
    </div>
  )
}

export default App
