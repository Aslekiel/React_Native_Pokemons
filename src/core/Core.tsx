import React from 'react';

import { NotifierWrapper } from 'react-native-notifier';

import requestUserPermission from 'src/utils/requestUserPermission';
import Navigation from 'src/navigation/Navigation';

const Core = () => {
  requestUserPermission();
  return (
    <NotifierWrapper>
      <Navigation />
    </NotifierWrapper>
  );
};

export default Core;
