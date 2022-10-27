import React from 'react';
import {TextInput, View} from 'react-native';
import CustomInputStyles from './CustomInput.styles';

type PropsType = {
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: ((text: string) => void) | undefined;
};

const CustomInput: React.FC<PropsType> = props => {
  return (
    <View style={CustomInputStyles.inputsWrapper}>
      <TextInput
        style={CustomInputStyles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default CustomInput;
