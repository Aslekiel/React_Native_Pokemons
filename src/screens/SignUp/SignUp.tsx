import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Image, View } from 'react-native';

import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import type { RootParamsType } from 'src/types';

import CustomButton from 'src/components/CustomButton';
import CustomInput from 'src/components/CustomInput';
import CustomText from 'src/components/CustomText';

import pokemonLogoImage from 'src/assets/pokemon-logo.png';

import { useAppDispatch } from 'src/store/hooks/hooks';
import { userApi } from 'src/api/userApi';
import { setUser } from 'src/store/user/user';

import SignUpStyles from './SignUp.styles';

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    username: '',
    password: '',
    repeatedPassword: '',
  });

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  const dispatch = useAppDispatch();

  const onChangeText = (key: keyof typeof signUpState, value: string) => {
    setSignUpState({ ...signUpState, [key]: value });
  };

  const onSubmit = async () => {
    try {
      if (
        !signUpState.username.trim() ||
        !signUpState.password.trim() ||
        !signUpState.repeatedPassword.trim()
      ) {
        return Toast.show({
          type: 'error',
          text1: 'Not all registration fields are filled!',
        });
      }

      if (signUpState.password !== signUpState.repeatedPassword) {
        return Toast.show({
          type: 'error',
          text1: 'Passwords do not match!',
        });
      }

      const res = await userApi.signUp(signUpState);
      dispatch(setUser(res));

      setSignUpState({
        username: '',
        password: '',
        repeatedPassword: '',
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={SignUpStyles.container}>
      <ScrollView style={SignUpStyles.wrapper}>
        <Image
          source={pokemonLogoImage}
          style={SignUpStyles.logo}
        />

        <View style={SignUpStyles.inputsWrapper}>
          <CustomInput
            placeholder="Username"
            value={signUpState.username}
            onChangeText={(value) => onChangeText('username', value)}
          />

          <CustomInput
            placeholder="Password"
            secureTextEntry
            value={signUpState.password}
            onChangeText={(value) => onChangeText('password', value)}
          />

          <CustomInput
            placeholder="Repeat password"
            secureTextEntry
            value={signUpState.repeatedPassword}
            onChangeText={(value) => onChangeText('repeatedPassword', value)}
          />
        </View>

        <View style={SignUpStyles.buttonsWrapper}>
          <CustomButton title="Submit" onPress={onSubmit} />

          <CustomText style={SignUpStyles.title}>
            Already registered?
          </CustomText>

          <CustomButton
            title="Log In"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
