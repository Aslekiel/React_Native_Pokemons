import React from 'react';
import {Text, View} from 'react-native';
import {PokemonStatsType} from '../../types';
import PokemonStatsStyles from './PokemonStats.styles';

type PropsType = {
  stats: PokemonStatsType[];
};

const PokemonStats: React.FC<PropsType> = ({stats}) => {
  return (
    <View style={PokemonStatsStyles.wrapper}>
      {stats.map((stat, index) => {
        return (
          <Text key={index} style={PokemonStatsStyles.text}>{`${
            stat.stat.name[0].toLocaleUpperCase() + stat.stat.name.slice(1)
          }: ${stat.base_stat}`}</Text>
        );
      })}
    </View>
  );
};

export default PokemonStats;
