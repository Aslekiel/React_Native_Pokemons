import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {pokemonApi} from '../../api/pokemonApi';
import CustomButton from '../../components/Button';
import {SinglePokemonType} from '../../types';

const HomeScreen = () => {
  const [pokemon, setPokemon] = useState<SinglePokemonType>();
  const [pokemonId, setPokemonId] = useState<number>();

  useEffect(() => {
    (async () => {
      try {
        if (pokemonId) {
          const res = await pokemonApi.getPokemonData(pokemonId);
          setPokemon(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pokemonId]);

  const onPressRandom = () => {
    setPokemonId(Math.floor(Math.random() * 905) + 1);
  };

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
      {pokemon ? (
        <View style={styles.pokemonWrapper}>
          <Image
            style={styles.pokemonImage}
            source={{
              uri: pokemon?.sprites.other['official-artwork'].front_default,
            }}
          />
          <Text style={styles.pokemonName}>
            {pokemon?.name[0].toLocaleUpperCase() + pokemon?.name.slice(1)}
          </Text>
        </View>
      ) : (
        <View style={styles.pokemonWrapper}>
          <Image
            style={styles.pokemonImage}
            source={require('../../assets/pokeball.png')}
          />
        </View>
      )}
      <CustomButton title="Random pokemon for me!" onPress={onPressRandom} />
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
    fontSize: 14,
    color: 'black',
    textAlign: 'justify',
    textShadowColor: 'grey',
  },
  pokemonWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    padding: 20,

    marginVertical: 10,
  },
  pokemonImage: {
    width: 120,
    height: 120,
  },
  pokemonName: {
    fontSize: 20,
    color: 'black',
  },
});

export default HomeScreen;
