/* eslint-disable global-require */
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { SafeAreaView, ScrollView, Image, View } from 'react-native';
import type { RootParamsType } from '../../types';
import { userApi } from '../../api/userApi';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setUser } from '../../store/user/user';
import CustomButton from '../../components/CustomButton/CustomButton';
import SignUpStyles from './SignUp.styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomText from '../../components/CustomText/CustomText';

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    username: '',
    password: '',
    repeatedPassword: '',
  });

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  const dispatch = useAppDispatch();

  const onChangeText = (key: string, value: string) => {
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
          source={require('../../assets/pokemon-logo.png')}
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
