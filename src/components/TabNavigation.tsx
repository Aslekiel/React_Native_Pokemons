import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen/HomeScreen';
import UserProfile from './UserProfile/UserProfile';
import StackNavigation from './StackNavigation';

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
        component={StackNavigation}
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
        component={UserProfile}
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
