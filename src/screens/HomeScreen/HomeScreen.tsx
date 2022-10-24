import React from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/pokemon-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Pokémon are creatures of all shapes and sizes who live in the wild or
        alongside their human partners (called “Trainers”). During their
        adventures, Pokémon grow and become more experienced and even, on
        occasion, evolve into stronger Pokémon. Hundreds of known Pokémon
        inhabit the Pokémon universe, with untold numbers waiting to be
        discovered!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    maxWidth: '50%',
    maxHeight: '20%',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'justify',
    textShadowColor: 'grey',
  },
});

export default HomeScreen;
