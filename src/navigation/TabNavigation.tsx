import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PokemonsListNavigation from './PokemonsListNavigation';
import UserProfileNavigation from './UserProfileNavigation';
import UserProfile from '../screens/UserProfile/UserProfile';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {userApi} from '../api/userApi';
import {setUser} from '../store/user/user';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const {token} = useAppSelector(state => state.user);

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
        console.log(error);
      } finally {
        setIsSignedIn(true);
      }
    })();
  }, [dispatch, token]);

  if (!isSignedIn) {
    return <UserProfileNavigation />;
  }

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
              color="rgba(175, 47, 47, 0.55)"
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
              color="rgba(175, 47, 47, 0.55)"
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
              color="rgba(175, 47, 47, 0.55)"
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
