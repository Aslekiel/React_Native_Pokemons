import React, { useEffect } from 'react';

import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TabNavigation from 'src/navigation/TabNavigation';

const Core = () => {
  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      // eslint-disable-next-line no-console
      console.log(fcmToken);
    }
  };

  checkToken();

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // eslint-disable-next-line no-console
      console.log('Authorization status:', authStatus);
    }
  }

  requestUserPermission();

  useEffect(() => {
    AsyncStorage.getItem('token').finally(() => {
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
      <TabNavigation />

      <Toast />
    </NavigationContainer>
  );
};

export default Core;
