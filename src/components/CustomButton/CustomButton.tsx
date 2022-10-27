import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {CustomButtonType} from '../../types';
import ButtonStyles from './CustomButton.styles';

const CustomButton: React.FC<CustomButtonType> = props => {
  return (
    <TouchableOpacity style={ButtonStyles.container} onPress={props.onPress}>
      <Text style={ButtonStyles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
