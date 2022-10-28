/* eslint-disable global-require */
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { SafeAreaView, Image, View, ScrollView } from 'react-native';
import { useAppDispatch } from '../../store/hooks/hooks';
import type { RootParamsType } from '../../types';
import { userApi } from '../../api/userApi';
import { setUser } from '../../store/user/user';
import CustomButton from '../../components/CustomButton/CustomButton';
import LogInStyles from './LogIn.styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomText from '../../components/CustomText/CustomText';

const LogIn = () => {
  const [logInState, setLogInState] = useState({
    username: '',
    password: '',
  });

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  const dispatch = useAppDispatch();

  const onChangeText = (key: string, value: string) => {
    setLogInState({ ...logInState, [key]: value });
  };

  const onSubmit = async () => {
    try {
      if (!logInState.username.trim() || !logInState.password.trim()) {
        return Toast.show({
          type: 'error',
          text1: 'Not all registration fields are filled!',
        });
      }

      const res = await userApi.logIn(logInState);
      dispatch(setUser(res));

      setLogInState({
        username: '',
        password: '',
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={LogInStyles.container}>
      <ScrollView style={LogInStyles.wrapper}>
        <Image
          source={require('../../assets/pokemon-logo.png')}
          style={LogInStyles.logo}
        />
        <View style={LogInStyles.inputsWrapper}>
          <CustomInput
            placeholder="Username"
            value={logInState.username}
            onChangeText={(value) => onChangeText('username', value)}
          />
          <CustomInput
            placeholder="Password"
            secureTextEntry
            value={logInState.password}
            onChangeText={(value) => onChangeText('password', value)}
          />
        </View>
        <View style={LogInStyles.buttonsWrapper}>
          <CustomButton title="Submit" onPress={onSubmit} />
          <View>
            <CustomText style={LogInStyles.title}>
              Not registered yet?
            </CustomText>
            <CustomButton
              title="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
