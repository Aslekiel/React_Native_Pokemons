import {combineReducers} from '@reduxjs/toolkit';
import pokemons from './pokemons/pokemons';
import user from './user/user';

const rootReducer = combineReducers({
  pokemons,
  user,
});

export default rootReducer;
