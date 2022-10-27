import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {useAppDispatch} from '../../store/hooks/hooks';
import {RootParamsType} from '../../types';
import {userApi} from '../../api/userApi';
import {setUser} from '../../store/user/user';
import CustomButton from '../../components/Button';

const Login = () => {
  const [logInState, setLogInState] = useState({
    username: '',
    password: '',
  });

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  const dispatch = useAppDispatch();

  const onChangeText = (key: string, value: string) => {
    setLogInState({...logInState, [key]: value});
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
            value={logInState.username}
            onChangeText={value => onChangeText('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={logInState.password}
            onChangeText={value => onChangeText('password', value)}
          />
        </View>
        <View style={styles.buttonsWrapper}>
          <CustomButton title="Submit" onPress={onSubmit} />
          <View>
            <Text style={styles.title}>Not registered yet?</Text>
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
    justifyContent: 'space-between',
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

export default Login;
