import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Image, View } from 'react-native';

import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import type { RootParamsType } from 'src/types';

import CustomButton from 'src/components/CustomButton';
import CustomInput from 'src/components/CustomInput';
import CustomText from 'src/components/CustomText';

import images from 'src/constants/images';

import useCurrentUser from 'src/hooks/useCurrentUser';

import errorsHandler from 'src/utils/errorsHandler';

import LogInStyles from './LogIn.styles';

const LogIn = () => {
  const [logInState, setLogInState] = useState({
    username: '',
    password: '',
  });

  const { logIn } = useCurrentUser(logInState);

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  const onChangeText = (key: string, value: string) => {
    setLogInState({ ...logInState, [key]: value });
  };

  const onSubmit = async () => {
    try {
      const isWithoutErrors = await errorsHandler({
        username: logInState.username,
        password: logInState.password,
      });

      if (!isWithoutErrors) return;

      await logIn();

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
          source={images.pokemonLogoImage}
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
