import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './src/store/store';
import Toast from 'react-native-toast-message';
import TabNavigation from './src/navigation/TabNavigation';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    const init = async () => {
      await AsyncStorage.getItem('token');
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
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
