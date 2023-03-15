import axios from 'axios';
import { Pokemon, PokemonList, PokemonDetails } from '../types/pokemon';

const baseUrl = 'https://pokeapi.co/api/v2/';

export const getPokemonList = async (offset = 0): Promise<PokemonList> => {
  const url = `${baseUrl}pokemon?limit=12&offset=${offset}`;
  const response = await axios.get<PokemonList>(url);
  return response.data;
};

export const getPokemonDetails = async (url: string): Promise<Pokemon> => {
  // const url = `${baseUrl}pokemon/${id}`;
  const response = await axios.get<PokemonDetails>(url);

  const pokemon: Pokemon = {
    id: response.data.id,
    name: response.data.name,
    image: response.data.sprites.front_default,
    abilities: response.data.abilities.map((ability) => ability.ability.name),
    types: response.data.types.map((type) => type.type.name),
  };

  return pokemon;
};
