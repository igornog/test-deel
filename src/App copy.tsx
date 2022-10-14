import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPokemon } from './api/services/PokemonAPI';

interface PokemonPropsTypes {
  name: string;
}

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getPokemon().then((res) => {
      setPokemons(res.data.results)
    })
  }, [])

  const searchPokemon = (inputText: string) => {
    setInputValue(inputText);

    if (inputText) {
      pokemons.filter((pokemon: PokemonPropsTypes) => {
        if (pokemon.name.includes(inputText)) {
          setInputValue(pokemon.name)
        }
      })
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' value={inputValue} onChange={event => searchPokemon(event.target.value)}></input>
      </header>
    </div>
  );
}

export default App;
