import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';
import {RootParamsType} from '../../types';

const SignUp = () => {
  const navigation = useNavigation<NavigationProp<RootParamsType>>();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/pokemon-logo.png')}
        style={styles.logo}
      />
      <View style={styles.inputsWrapper}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Repeat password" />
      </View>
      <View style={styles.buttonsWrapper}>
        <Text style={styles.title}>Already registered?</Text>
        <Button title="Log In" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inputsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  logo: {
    width: '50%',
    height: '20%',
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
    fontSize: 14,
    alignSelf: 'center',
    color: 'black',
    marginBottom: 10,
  },
});

export default SignUp;
