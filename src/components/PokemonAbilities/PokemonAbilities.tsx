import React from 'react';
import { View } from 'react-native';
import type { AbilitiesType } from '../../types';
import CustomText from '../CustomText/CustomText';
import PokemonAbilitiesStyles from './PokemonAbilities.styles';

type PropsType = {
  abilities: AbilitiesType[];
};

const PokemonAbilities: React.FC<PropsType> = ({ abilities }) => {
  return (
    <View style={PokemonAbilitiesStyles.wrapper}>
      {abilities.map((ability, index) => {
        return (
          <CustomText key={index}>
            {`Slot ${ability.slot}: ${
              ability.ability.name[0].toLocaleUpperCase() +
              ability.ability.name.slice(1)
            }`}
          </CustomText>
        );
      })}
    </View>
  );
};

export default PokemonAbilities;
