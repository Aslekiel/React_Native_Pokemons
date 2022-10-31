/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';

import type {
  NavigationProp,
  RouteProp } from '@react-navigation/native';
import {
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import CustomButton from 'src/components/CustomButton';
import CustomText from 'src/components/CustomText';
import PokemonAbilities from 'src/components/PokemonAbilities';
import PokemonImages from 'src/components/PokemonImages';
import PokemonStats from 'src/components/PokemonStats';

import type { RootParamsType, SinglePokemonType } from 'src/types';

import pokemonApi from 'src/api/pokemonApi';

import SinglePokemonPageStyles from './SinglePokemonPage.styles';

type ParamListType = {
  SinglePokemonPage: {
    id: string;
  };
};

const SinglePokemonPage = () => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();
  const route = useRoute<RouteProp<ParamListType, 'SinglePokemonPage'>>();

  const navigation = useNavigation<NavigationProp<RootParamsType>>();
  const { id } = route.params;

  const pokemonName = useMemo(() => {
    if (pokemonData) {
      return (
        pokemonData?.name[0].toLocaleUpperCase() + pokemonData?.name.slice(1)
      );
    }
  }, [pokemonData]);

  useEffect(() => {
    (async () => {
      try {
        const res = await pokemonApi.getPokemonData(Number(id));
        setPokemonData(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <SafeAreaView style={SinglePokemonPageStyles.container}>
      <ScrollView style={SinglePokemonPageStyles.wrapper}>
        <View style={SinglePokemonPageStyles.imageWrapper}>
          <PokemonImages
            title="Adult pokemon"
            frontImage={pokemonData?.sprites.front_default}
            backImage={pokemonData?.sprites.back_default}
          />
          <PokemonImages
            title="Tiny pokemon"
            frontImage={pokemonData?.sprites.front_shiny}
            backImage={pokemonData?.sprites.back_shiny}
          />
        </View>
        <View style={SinglePokemonPageStyles.info}>
          <CustomText>{`Name: ${pokemonName}`}</CustomText>
          <CustomText>{`Weight: ${pokemonData?.weight}`}</CustomText>
          <CustomText>{`Height: ${pokemonData?.height}`}</CustomText>
          <CustomText>
            {`Base experience: ${pokemonData?.base_experience}`}
          </CustomText>
        </View>
        <CustomText style={SinglePokemonPageStyles.text}>Stats</CustomText>
        {pokemonData?.stats && <PokemonStats stats={pokemonData.stats} />}
        <CustomText style={SinglePokemonPageStyles.text}>Abilities</CustomText>
        {pokemonData?.abilities && (
          <PokemonAbilities abilities={pokemonData?.abilities} />
        )}
        <View style={SinglePokemonPageStyles.buttonWrapper}>
          <CustomButton
            title="More Pokemon Images"
            onPress={() => {
              navigation.navigate('PokemonImages', {
                images: pokemonData?.sprites,
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SinglePokemonPage;
