import axios from 'axios';

let baseUrl = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = () => {
  let response = axios.get(`${baseUrl}`, {
    headers: {
      Accept: `*/*`,
    },
    maxRedirects: 0,
  });
  
  return response;
};