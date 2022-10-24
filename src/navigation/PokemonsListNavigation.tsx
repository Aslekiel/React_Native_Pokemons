import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamsType} from '../types';
import PokemonsList from '../screens/PokemonsList/PokemonsList';
import SinglePokemonPage from '../screens/SinglePokemonPage/SinglePokemonPage';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createNativeStackNavigator<StackParamsType>();

const PokemonsListNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="PokemonsList"
          component={PokemonsList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SinglePokemonPage"
          component={SinglePokemonPage}
          options={{title: 'Pokemon Info'}}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PokemonsListNavigation;
