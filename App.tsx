import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

import Toast from 'react-native-toast-message';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './src/navigation/TabNavigation';
import store from './src/store/store';

const App = () => {
  useEffect(() => {
    const init = async () => {
      await AsyncStorage.getItem('token');
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <TabNavigation />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
