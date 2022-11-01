import React, { useEffect } from 'react';

import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import requestUserPermission from 'src/utils/requestUserPermission';
import Navigation from 'src/navigation/Navigation';

const Core = () => {
  requestUserPermission();

  useEffect(() => {
    AsyncStorage.getItem('user').finally(() => {
      return RNBootSplash.hide({ fade: true });
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const defaultTitle = 'New message';
      const messageTitle = remoteMessage.notification?.title;
      Alert.alert(messageTitle || defaultTitle, remoteMessage.notification?.body);
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer onReady={RNBootSplash.hide}>
      <Navigation />

      <Toast />
    </NavigationContainer>
  );
};

export default Core;
