import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PokemonsListNavigation from './PokemonsListNavigation';
import UserProfileNavigation from './UserProfileNavigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              color={'rgba(175, 47, 47, 0.55)'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pokemons"
        component={PokemonsListNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="pokeball"
              color={'rgba(175, 47, 47, 0.55)'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-circle"
              color={'rgba(175, 47, 47, 0.55)'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
