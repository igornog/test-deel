import React, { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './api/services/PokemonAPI';

interface PokemonPropsTypes {
  [x: string]: any;
  name: string;
  url: string;
}

const Autocomplete = () => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon().then((res) => {
      // getting only key 'name'
      let PokemonNames = res.data.results.map((obj: any) => (obj.name))
      setPokemons(PokemonNames)
    })
  }, [])

  const onChange = (e: any) => {
    const input = e.currentTarget.value;
    // filtering suggestions
    const newFilteredSuggestions = pokemons.filter(
      (suggestion: PokemonPropsTypes) =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    )
    setFiltered(newFilteredSuggestions as []);
    setIsShow(true);
    setInput(e.currentTarget.value)
  };
  const onClick = (e: any) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText)
  };
  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) { // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active])
    }
    else if (e.keyCode === 38) { // up arrow
      return (active === 0) ? null : setActive(active - 1);
    }
    else if (e.keyCode === 40) { // down arrow
      return (active - 1 === filtered.length) ? null : setActive(active + 1);
    }
  };
  
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Pokemon not found</em>
          </div>
        );
      }
    }
    return <></>;
  }
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {renderAutocomplete()}
    </>
  );
}
export default Autocomplete;
