import React from 'react';
import {Image, Text, View} from 'react-native';
import PokemonImagesStyles from './PokemonImages.styles';

type Props = {
  title: string;
  frontImage: string | undefined;
  backImage: string | undefined;
};

const PokemonImages: React.FC<Props> = props => {
  return (
    <View style={PokemonImagesStyles.wrapper}>
      <Text style={PokemonImagesStyles.text}>{props.title}</Text>
      <View style={PokemonImagesStyles.imageContainer}>
        <Image
          source={{uri: props.frontImage}}
          style={PokemonImagesStyles.logo}
        />
        <Image
          source={{uri: props.backImage}}
          style={PokemonImagesStyles.logo}
        />
      </View>
    </View>
  );
};

export default PokemonImages;
