import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './src/store/store';
import Toast from 'react-native-toast-message';
import TabNavigation from './src/navigation/TabNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
