import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AbilitiesType} from '../../../types';

type PropsType = {
  abilities: AbilitiesType[];
};

const PokemonAbilities: React.FC<PropsType> = ({abilities}) => {
  return (
    <View style={styles.wrapper}>
      {abilities.map((ability, index) => {
        return (
          <Text key={index} style={styles.text}>
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

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,
    padding: 10,
  },
  text: {
    fontFamily: 'PTSans-Regular',
    fontSize: 20,
    color: 'black',
  },
});

export default PokemonAbilities;
