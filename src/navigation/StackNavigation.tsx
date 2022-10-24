import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamsType} from '../types';
import PokemonsList from '../screens/PokemonsList/PokemonsList';
import SinglePokemonPage from '../screens/SinglePokemonPage/SinglePokemonPage';

const Stack = createNativeStackNavigator<StackParamsType>();

const StackNavigation = () => {
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
    </Stack.Navigator>
  );
};

export default StackNavigation;
