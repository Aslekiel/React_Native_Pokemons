import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PokemonStatsType} from '../../../types';

type PropsType = {
  stats: PokemonStatsType[];
};

const PokemonStats: React.FC<PropsType> = ({stats}) => {
  return (
    <View style={styles.wrapper}>
      {stats.map((stat, index) => {
        return (
          <Text key={index} style={styles.text}>{`${
            stat.stat.name[0].toLocaleUpperCase() + stat.stat.name.slice(1)
          }: ${stat.base_stat}`}</Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,

    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default PokemonStats;
