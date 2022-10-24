import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamsType} from '../types';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createNativeStackNavigator<StackParamsType>();

const UserProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default UserProfileNavigation;
