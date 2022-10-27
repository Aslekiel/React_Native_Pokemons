import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, SafeAreaView, View, Text} from 'react-native';

import {pokemonApi} from '../../api/pokemonApi';
import CustomButton from '../../components/CustomButton/CustomButton';
import {RootParamsType, SinglePokemonType} from '../../types';
import PokemonAbilities from '../../components/PokemonAbilities/PokemonAbilities';
import PokemonImages from '../../components/PokemonImages/PokemonImages';
import PokemonStats from '../../components/PokemonStats/PokemonStats';
import SinglePokemonPageStyles from './SinglePokemonPage.styles';

type ParamList = {
  SinglePokemonPage: {
    id: string;
  };
};

const SinglePokemonPage = () => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();
  const route = useRoute<RouteProp<ParamList, 'SinglePokemonPage'>>();

  const navigation = useNavigation<NavigationProp<RootParamsType>>();
  const {id} = route.params;

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
          <Text
            style={
              SinglePokemonPageStyles.infoText
            }>{`Name: ${pokemonName}`}</Text>
          <Text
            style={
              SinglePokemonPageStyles.infoText
            }>{`Weight: ${pokemonData?.weight}`}</Text>
          <Text
            style={
              SinglePokemonPageStyles.infoText
            }>{`Height: ${pokemonData?.height}`}</Text>
          <Text style={SinglePokemonPageStyles.infoText}>
            {`Base experience: ${pokemonData?.base_experience}`}
          </Text>
        </View>
        <Text style={SinglePokemonPageStyles.text}>Stats</Text>
        {pokemonData?.stats && <PokemonStats stats={pokemonData.stats} />}
        <Text style={SinglePokemonPageStyles.text}>Abilities</Text>
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
