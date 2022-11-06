import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';

import useCurrentUser from 'src/hooks/useCurrentUser';

import type { StackNavigationType } from 'src/types';

import { getTokenFromStorage } from 'src/utils/storage';

import TabNavigation from './TabNavigation';
import AuthNavigation from './AuthNavigation';

const Stack = createNativeStackNavigator<StackNavigationType>();

const Navigation = () => {
  const [token, setToken] = useState('');
  const { user, checkUser } = useCurrentUser(null);

  useEffect(() => {
    const init = async () => {
      try {
        const userToken = await getTokenFromStorage();

        if (!userToken) {
          return;
        }

        setToken(userToken);

        await checkUser();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    init().finally(() => {
      RNBootSplash.hide({ fade: true });
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const defaultTitle = 'New message';
      const messageTitle = remoteMessage.notification?.title;
      Alert.alert(messageTitle || defaultTitle, remoteMessage.notification?.body);
    });

    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token || user ? (
        <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
        />
        ) : (
          <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{ headerShown: false }}
          />
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
