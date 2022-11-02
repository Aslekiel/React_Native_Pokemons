import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from 'src/screens/SignUp';
import LogIn from 'src/screens/LogIn';

import type { StackParamsType } from '../types';

const Stack = createNativeStackNavigator<StackParamsType>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
