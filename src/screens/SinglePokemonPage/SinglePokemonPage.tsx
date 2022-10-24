import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {pokemonApi} from '../../api/pokemonApi';
import {SinglePokemonType} from '../../types';
import PokemonAbilities from './components/PokemonAbilities';
import PokemonImages from './components/PokemonImages';
import PokemonStats from './components/PokemonStats';

type ParamList = {
  SinglePokemonPage: {
    id: string;
  };
};

const SinglePokemonPage = () => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();
  const route = useRoute<RouteProp<ParamList, 'SinglePokemonPage'>>();

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.imageWrapper}>
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
        <View style={styles.info}>
          <Text style={styles.infoText}>{`Name: ${pokemonName}`}</Text>
          <Text
            style={styles.infoText}>{`Weight: ${pokemonData?.weight}`}</Text>
          <Text
            style={styles.infoText}>{`Height: ${pokemonData?.height}`}</Text>
          <Text style={styles.infoText}>
            {`Base experience: ${pokemonData?.base_experience}`}
          </Text>
        </View>
        <Text style={styles.text}>Stats</Text>
        {pokemonData?.stats && <PokemonStats stats={pokemonData.stats} />}
        <Text style={styles.text}>Abilities</Text>
        {pokemonData?.abilities && (
          <PokemonAbilities abilities={pokemonData?.abilities} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  imageWrapper: {
    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,

    padding: 10,
  },
  infoText: {
    fontSize: 20,
    color: 'black',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
});

export default SinglePokemonPage;
