import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';

import useCurrentUser from 'src/hooks/useCurrentUser';

import LogInSignUpNavigation from './LogInSignUpNavigation';
import TabNavigation from './TabNavigation';

const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { checkUser } = useCurrentUser(null);

  useEffect(() => {
    const init = async () => {
      const userFromStorage = await AsyncStorage.getItem('user') || '';

      if (!JSON.parse(userFromStorage).token) {
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
      return RNBootSplash.hide({ fade: true });
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
      {
        isSignedIn ? (
          <TabNavigation />
        ) : (
          <LogInSignUpNavigation />
        )
      }
    </NavigationContainer>
  );
};

export default Navigation;
