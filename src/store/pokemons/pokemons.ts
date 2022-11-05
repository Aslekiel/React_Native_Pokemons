import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type {
  PokemonsApiType,
  SinglePokemonType,
} from '../../types';

const initialState: PokemonsApiType = {
  pokemons: [],
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons(state, action: PayloadAction<SinglePokemonType[]>) {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemons.actions;

export default pokemons.reducer;
