import { useState } from 'react';
import pokemonApi from 'src/api/pokemonApi';
import type { SinglePokemonType } from 'src/types';

const usePokemons = () => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();

  const getPokemon = async (id: number) => {
    const res = await pokemonApi.getPokemonData(id);
    setPokemonData(res.data);
  };

  return { pokemonData, getPokemon };
};

export default usePokemons;
