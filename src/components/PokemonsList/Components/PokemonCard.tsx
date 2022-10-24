import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {pokemonApi} from '../../../api/pokemonApi';
import {RootParamsType, SinglePokemonType} from '../../../types';

type PropsType = {
  id: string;
};

const PokemonCard: React.FC<PropsType> = ({id}) => {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType>();

  const navigation = useNavigation<NavigationProp<RootParamsType>>();

  useEffect(() => {
    (async () => {
      try {
        const res = await pokemonApi.getPokemonData(+id);
        setPokemonData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const pokemonName = useMemo(() => {
    if (pokemonData) {
      return (
        pokemonData?.name[0].toLocaleUpperCase() + pokemonData?.name.slice(1)
      );
    }
  }, [pokemonData]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('SinglePokemonPage', {
            id: id,
          });
        }}>
        <View>
          <Image
            source={{
              uri: pokemonData?.sprites.front_default,
            }}
            style={styles.logo}
          />
          <View>
            <Text style={styles.text}>{`Name: ${pokemonName}`}</Text>
            <Text style={styles.text}>{`Weight: ${pokemonData?.weight}`}</Text>
            <Text style={styles.text}>{`Height: ${pokemonData?.height}`}</Text>
            <Text style={styles.text}>
              {`Base experience: ${pokemonData?.base_experience}`}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E2E9E9',

    position: 'relative',

    margin: 10,
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    width: 140,
    maxHeight: 180,
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 12,
    color: 'black',
  },
});

export default memo(PokemonCard);
