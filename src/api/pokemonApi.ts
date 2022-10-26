import type {AxiosResponse} from 'axios';
import instance from '.';

import type {SinglePokemonType} from '../types';

const getPokemonData = async (
  id: number,
): Promise<AxiosResponse<SinglePokemonType>> => {
  const data = await instance.get(`pokemon/${id}`);

  return data;
};

export const pokemonApi = {getPokemonData};
