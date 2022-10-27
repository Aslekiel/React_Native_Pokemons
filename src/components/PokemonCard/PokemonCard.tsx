import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useMemo, useState} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {pokemonApi} from '../../api/pokemonApi';
import {RootParamsType, SinglePokemonType} from '../../types';
import CustomText from '../CustomText/CustomText';
import PokemonCardStyles from './PokemonCard.styles';

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
    <SafeAreaView style={PokemonCardStyles.container}>
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
            style={PokemonCardStyles.logo}
          />
          <View>
            <CustomText
              style={
                PokemonCardStyles.text
              }>{`Name: ${pokemonName}`}</CustomText>
            <CustomText
              style={
                PokemonCardStyles.text
              }>{`Weight: ${pokemonData?.weight}`}</CustomText>
            <CustomText style={PokemonCardStyles.text}>
              {`Height: ${pokemonData?.height}`}
            </CustomText>
            <CustomText style={PokemonCardStyles.text}>
              {`Base experience: ${pokemonData?.base_experience}`}
            </CustomText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default memo(PokemonCard);
