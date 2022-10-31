/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, ScrollView } from 'react-native';

import CustomButton from 'src/components/CustomButton';
import CustomText from 'src/components/CustomText';

import pokemonApi from 'src/api/pokemonApi';

import type { SinglePokemonType } from 'src/types';

import pokemonLogoImage from 'src/assets/pokemon-logo.png';
import pokeballImage from 'src/assets/pokeball.png';

import HomeScreenStyles from './HomeScreen.styles';

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
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [pokemonId]);

  const onPressRandom = () => {
    setPokemonId(Math.floor(Math.random() * 905) + 1);
  };

  return (
    <SafeAreaView style={HomeScreenStyles.container}>
      <ScrollView contentContainerStyle={HomeScreenStyles.contentContainer}>
        <Image
          source={pokemonLogoImage}
          style={HomeScreenStyles.logo}
        />
        <CustomText style={HomeScreenStyles.text}>
          Pokémon are creatures of all shapes and sizes who live in the wild or
          alongside their human partners (called “Trainers”). During their
          adventures, Pokémon grow and become more experienced and even, on
          occasion, evolve into stronger Pokémon. Hundreds of known Pokémon
          inhabit the Pokémon universe, with untold numbers waiting to be
          discovered!
        </CustomText>
        {pokemon ? (
          <View style={HomeScreenStyles.pokemonWrapper}>
            <Image
              style={HomeScreenStyles.pokemonImage}
              source={{
                uri: pokemon?.sprites.other['official-artwork'].front_default,
              }}
            />
            <CustomText>
              {pokemon?.name[0].toLocaleUpperCase() + pokemon?.name.slice(1)}
            </CustomText>
          </View>
        ) : (
          <View style={HomeScreenStyles.pokemonWrapper}>
            <Image
              style={HomeScreenStyles.pokemonImage}
              source={pokeballImage}
            />
          </View>
        )}
        <CustomButton title="Random pokemon for me!" onPress={onPressRandom} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
