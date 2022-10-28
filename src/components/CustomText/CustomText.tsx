import React from 'react';

import type { TextProps } from 'react-native';
import { Text, StyleSheet } from 'react-native';

const CustomText: React.FC<TextProps> = (props) => {
  return <Text {...props} style={[styles.root, props.style]} />;
};

const styles = StyleSheet.create({
  root: {
    fontFamily: 'PTSans-Regular',
    fontSize: 20,
    color: 'black',
  },
});

export default CustomText;