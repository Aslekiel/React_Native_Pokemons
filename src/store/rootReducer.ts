import { combineReducers } from '@reduxjs/toolkit';
import pokemons from './pokemons';
import user from './user';

const rootReducer = combineReducers({
  user,
  pokemons,
});

export default rootReducer;
