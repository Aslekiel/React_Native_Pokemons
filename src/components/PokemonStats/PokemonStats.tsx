import React from 'react';
import { View } from 'react-native';

import type { PokemonStatsType } from 'src/types';

import CustomText from 'src/components/CustomText';

import PokemonStatsStyles from './PokemonStats.styles';

type PropsType = {
  stats: PokemonStatsType[];
};

const PokemonStats: React.FC<PropsType> = ({ stats }) => {
  return (
    <View style={PokemonStatsStyles.wrapper}>
      {stats.map((stat, index) => {
        return (
          <CustomText key={index}>{`${
            stat.stat.name[0].toLocaleUpperCase() + stat.stat.name.slice(1)
          }: ${stat.base_stat}`}
          </CustomText>
        );
      })}
    </View>
  );
};

export default PokemonStats;
