import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { BottomTabParamListType } from 'src/types';

import HomeScreen from 'src/screens/HomeScreen/HomeScreen';
import UserProfile from 'src/screens/UserProfile/UserProfile';

import images from 'src/constants/images';

import PokemonsListNavigation from './PokemonsListNavigation';

const Tab = createBottomTabNavigator<BottomTabParamListType>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <images.homeIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Pokemons"
        component={PokemonsListNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => <images.pokeballIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => <images.profileIcon width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
