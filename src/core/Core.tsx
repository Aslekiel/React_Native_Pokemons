import React from 'react';

import Toast from 'react-native-toast-message';

import requestUserPermission from 'src/utils/requestUserPermission';
import Navigation from 'src/navigation/Navigation';

const Core = () => {
  requestUserPermission();
  return (
    <>
      <Navigation />

      <Toast />
    </>
  );
};

export default Core;
