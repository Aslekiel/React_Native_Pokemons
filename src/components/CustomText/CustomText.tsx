import React from 'react';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';

import CustomTextStyles from './CustomText.styles';

const CustomText: React.FC<TextProps> = (props) => {
  return <Text {...props} style={[CustomTextStyles.root, props.style]} />;
};

export default CustomText;
