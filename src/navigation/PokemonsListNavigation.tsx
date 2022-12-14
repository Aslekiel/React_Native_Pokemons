import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import type { StackParamsType } from '../types';
import PokemonsList from '../screens/PokemonsList/PokemonsList';
import SinglePokemonPage from '../screens/SinglePokemonPage/SinglePokemonPage';
import AllPokemonImages from '../screens/AllPokemonImages/AllPokemonImages';

const Stack = createNativeStackNavigator<StackParamsType>();

const PokemonsListNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const tabHiddenRoutes = ['SinglePokemonPage', 'PokemonImages'];
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName) {
      if (tabHiddenRoutes.includes(routeName)) {
        navigation.setOptions({ tabBarStyle: { display: 'none' } });
      } else {
        navigation.setOptions({ tabBarStyle: { display: 'flex' } });
      }
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="PokemonsList"
          component={PokemonsList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SinglePokemonPage"
          component={SinglePokemonPage}
          options={{ title: 'Pokemon Info' }}
        />
        <Stack.Screen
          name="PokemonImages"
          component={AllPokemonImages}
          options={{ title: 'Pokemon Images' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PokemonsListNavigation;
