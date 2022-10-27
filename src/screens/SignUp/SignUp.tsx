import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  View,
  Text,
} from 'react-native';
import {RootParamsType} from '../../types';
import {userApi} from '../../api/userApi';
import {useAppDispatch} from '../../store/hooks/hooks';
import {setUser} from '../../store/user/user';
import CustomButton from '../../components/CustomButton/CustomButton';
import SignUpStyles from './SignUp.styles';

const SignUp = () => {
  const [signUpState, setSignUpState] = useState({
    username: '',
    password: '',
    repeatedPassword: '',
  });

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  const dispatch = useAppDispatch();

  const onChangeText = (key: string, value: string) => {
    setSignUpState({...signUpState, [key]: value});
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
          <TextInput
            style={SignUpStyles.input}
            placeholder="Username"
            value={signUpState.username}
            onChangeText={value => onChangeText('username', value)}
          />
          <TextInput
            style={SignUpStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={signUpState.password}
            onChangeText={value => onChangeText('password', value)}
          />
          <TextInput
            style={SignUpStyles.input}
            placeholder="Repeat password"
            secureTextEntry={true}
            value={signUpState.repeatedPassword}
            onChangeText={value => onChangeText('repeatedPassword', value)}
          />
        </View>
        <View style={SignUpStyles.buttonsWrapper}>
          <CustomButton title="Submit" onPress={onSubmit} />
          <Text style={SignUpStyles.title}>Already registered?</Text>
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
