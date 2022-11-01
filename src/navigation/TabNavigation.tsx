import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeIcon from 'src/assets/home.svg';
import ProfileIcon from 'src/assets/pokemon_trainer.svg';
import PokeballIcon from 'src/assets/pokeball_icon.svg';

import type { BottomTabParamListType } from 'src/types';

import HomeScreen from 'src/screens/HomeScreen/HomeScreen';
import UserProfile from 'src/screens/UserProfile/UserProfile';

import { useAppSelector } from 'src/store/hooks';

import useCurrentUser from 'src/hooks/useCurrentUser';
import PokemonsListNavigation from './PokemonsListNavigation';
import LogInSignUpNavigation from './LogInSignUpNavigation';

const Tab = createBottomTabNavigator<BottomTabParamListType>();

const TabNavigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { token } = useAppSelector((state) => state.user);

  const { checkUser } = useCurrentUser(null);

  useEffect(() => {
    (async () => {
      if (!token) {
        setIsSignedIn(false);
        return;
      }

      try {
        await checkUser();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setIsSignedIn(true);
      }
    })();
  }, [checkUser, token]);

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
