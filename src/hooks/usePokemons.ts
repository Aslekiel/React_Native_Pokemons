import { useState } from 'react';
import pokemonApi from 'src/api/pokemonApi';
import type { SinglePokemonType } from 'src/types';

const usePokemons = () => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();
  const [pokemonsList, setPokemonList] = useState<SinglePokemonType[]>([]);

  const getPokemon = async (id: number) => {
    const res = await pokemonApi.getPokemonData(id);
    setPokemonData(res.data);
  };

  const getPokemonsList = async (id: number) => {
    const res = await pokemonApi.getPokemonData(id);
    setPokemonList((prev) => [...prev, res.data]);
  };

  return { pokemonData, getPokemon, pokemonsList, getPokemonsList };
};

export default usePokemons;
