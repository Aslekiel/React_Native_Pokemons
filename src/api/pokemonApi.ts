import type { SinglePokemonType } from 'src/types';
import instance from './index';

const getPokemonData = (id: number) => {
  return instance.get<SinglePokemonType>(`pokemon/${id}`);
};

export default {
  getPokemonData,
};
