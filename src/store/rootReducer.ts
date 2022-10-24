import {combineReducers} from '@reduxjs/toolkit';
import pokemons from './pokemons/pokemons';

const rootReducer = combineReducers({
  pokemons,
});

export default rootReducer;
