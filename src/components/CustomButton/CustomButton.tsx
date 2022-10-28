import React from 'react';
import type { ButtonProps } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import ButtonStyles from './CustomButton.styles';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity style={ButtonStyles.container} onPress={props.onPress}>
      <Text style={ButtonStyles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
