import React from 'react';
import { Provider } from 'react-redux';

import Core from './src/core/Core';

import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Core />
    </Provider>
  );
};

export default App;
