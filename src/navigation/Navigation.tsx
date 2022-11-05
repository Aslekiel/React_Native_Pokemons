import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';

import useCurrentUser from 'src/hooks/useCurrentUser';

import type { StackNavigationType } from 'src/types';

import TabNavigation from './TabNavigation';
import AuthNavigation from './AuthNavigation';

const Stack = createNativeStackNavigator<StackNavigationType>();

const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [token, setToken] = useState('');
  const { checkUser, getTokenFromStorage } = useCurrentUser(null);

  useEffect(() => {
    const init = async () => {
      const userToken = await getTokenFromStorage();

      setToken(userToken);

      if (!userToken) {
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
        {isSignedIn || token ? (
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
