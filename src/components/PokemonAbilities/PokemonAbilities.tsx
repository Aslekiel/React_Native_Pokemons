import React from 'react';
import {Text, View} from 'react-native';
import {AbilitiesType} from '../../types';
import PokemonAbilitiesStyles from './PokemonAbilities.styles';

type PropsType = {
  abilities: AbilitiesType[];
};

const PokemonAbilities: React.FC<PropsType> = ({abilities}) => {
  return (
    <View style={PokemonAbilitiesStyles.wrapper}>
      {abilities.map((ability, index) => {
        return (
          <Text key={index} style={PokemonAbilitiesStyles.text}>
            {`Slot ${ability.slot}: ${
              ability.ability.name[0].toLocaleUpperCase() +
              ability.ability.name.slice(1)
            }`}
          </Text>
        );
      })}
    </View>
  );
};

export default PokemonAbilities;
