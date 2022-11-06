import { useState } from 'react';
import pokemonApi from 'src/api/pokemonApi';
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks';
import { setPokemons } from 'src/store/pokemons';
import type { SinglePokemonType } from 'src/types';

const usePokemons = () => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();
  const [pokemonsList, setPokemonList] = useState<SinglePokemonType[]>([]);

  const pokemonsFromStore = useAppSelector((state) => state.pokemons.pokemons);

  const dispatch = useAppDispatch();

  const getPokemon = async (id: number) => {
    const res = await pokemonApi.getPokemonData(id);
    setPokemonData(res.data);
  };

  const getPokemonsArray = async (limit: number, currentPage: number) => {
    const pokemonsIds = [];
    for (
      let i = limit * (currentPage - 1) + 1;
      i < limit * (currentPage - 1) + limit + 1;
      i++
    ) {
      pokemonsIds.push(i);
    }

    const pokemonOne = pokemonApi.getPokemonData(pokemonsIds[0]);
    const pokemonTwo = pokemonApi.getPokemonData(pokemonsIds[1]);
    const pokemonThree = pokemonApi.getPokemonData(pokemonsIds[2]);
    const pokemonFour = pokemonApi.getPokemonData(pokemonsIds[3]);
    const pokemonFive = pokemonApi.getPokemonData(pokemonsIds[4]);
    const pokemonSix = pokemonApi.getPokemonData(pokemonsIds[5]);
    const pokemonSeven = pokemonApi.getPokemonData(pokemonsIds[6]);
    const pokemonEight = pokemonApi.getPokemonData(pokemonsIds[7]);

    const pokemonsReqArray = await Promise.all([
      pokemonOne,
      pokemonTwo,
      pokemonThree,
      pokemonFour,
      pokemonFive,
      pokemonSix,
      pokemonSeven,
      pokemonEight,
    ]);

    const pokemonsDataArray = pokemonsReqArray.map((pokemonData) => pokemonData.data);

    if (!pokemonsFromStore) {
      dispatch(setPokemons(pokemonsDataArray));
      setPokemonList(pokemonsDataArray);
      return;
    }

    dispatch(setPokemons([...pokemonsFromStore, ...pokemonsDataArray]));
    setPokemonList([...pokemonsFromStore, ...pokemonsDataArray]);
  };

  const getPokemonFromStore = (id: string) => {
    const pokemonFromStore = pokemonsFromStore.find((pokemon) => pokemon.id === id);
    setPokemonData(pokemonFromStore);
  };

  return {
    pokemonData,
    pokemonsList,
    getPokemon,
    getPokemonsArray,
    getPokemonFromStore,
  };
};

export default usePokemons;
