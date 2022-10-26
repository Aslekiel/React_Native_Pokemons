import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import {RootParamsType} from '../../types';
import {userApi} from '../../api/userApi';
import {useAppDispatch} from '../../store/hooks/hooks';
import {setUser} from '../../store/user/user';
import CustomButton from '../../components/Button';

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <Image
          source={require('../../assets/pokemon-logo.png')}
          style={styles.logo}
        />
        <View style={styles.inputsWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={signUpState.username}
            onChangeText={value => onChangeText('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={signUpState.password}
            onChangeText={value => onChangeText('password', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat password"
            secureTextEntry={true}
            value={signUpState.repeatedPassword}
            onChangeText={value => onChangeText('repeatedPassword', value)}
          />
        </View>
        <View style={styles.buttonsWrapper}>
          <CustomButton title="Submit" onPress={onSubmit} />
          <Text style={styles.title}>Already registered?</Text>
          <CustomButton
            title="Log In"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  inputsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 80,
  },
  input: {
    fontSize: 20,
    color: 'black',
    width: '100%',

    marginVertical: 5,
    padding: 20,

    borderWidth: 2,
    borderColor: 'rgba(175, 47, 47, 0.15)',
    borderRadius: 20,

    backgroundColor: 'rgba(0, 0, 0, 0.003)',
    shadowColor: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
  },
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  title: {
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: 14,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SignUp;
