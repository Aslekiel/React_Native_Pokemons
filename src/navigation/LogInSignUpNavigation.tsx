import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { StackParamsType } from '../types';

import SignUp from '../screens/SignUp/SignUp';
import LogIn from '../screens/LogIn/LogIn';

const Stack = createNativeStackNavigator<StackParamsType>();

const LogInSignUpNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Login"
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

export default LogInSignUpNavigation;
