import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  frontImage: string | undefined;
  backImage: string | undefined;
};

const PokemonImages: React.FC<Props> = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.frontImage}} style={styles.logo} />
        <Image source={{uri: props.backImage}} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default PokemonImages;
