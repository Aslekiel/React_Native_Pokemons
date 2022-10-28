import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabParamListType } from '../types';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PokemonsListNavigation from './PokemonsListNavigation';
import LogInSignUpNavigation from './LogInSignUpNavigation';
import UserProfile from '../screens/UserProfile/UserProfile';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { userApi } from '../api/userApi';
import { setUser } from '../store/user/user';

import ProfileIcon from '../assets/pokemon_trainer.svg';
import PokeballIcon from '../assets/pokeball_icon.svg';
import HomeIcon from '../assets/home.svg';

const Tab = createBottomTabNavigator<BottomTabParamListType>();

const TabNavigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { token } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (!token) {
        setIsSignedIn(false);
        return;
      }

      try {
        const res = await userApi.checkUser();
        dispatch(setUser(res));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setIsSignedIn(true);
      }
    })();
  }, [dispatch, token]);

  if (!isSignedIn) {
    return <LogInSignUpNavigation />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Pokemons"
        component={PokemonsListNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => <PokeballIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => <ProfileIcon width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
