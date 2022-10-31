import React from 'react';
import { Image, View } from 'react-native';

import CustomText from 'src/components/CustomText';

import PokemonImagesStyles from './PokemonImages.styles';

type PropsType = {
  title: string;
  frontImage: string | undefined;
  backImage: string | undefined;
};

const PokemonImages: React.FC<PropsType> = (props) => {
  return (
    <View style={PokemonImagesStyles.wrapper}>
      <CustomText>{props.title}</CustomText>
      <View style={PokemonImagesStyles.imageContainer}>
        <Image
          source={{ uri: props.frontImage }}
          style={PokemonImagesStyles.logo}
        />
        <Image
          source={{ uri: props.backImage }}
          style={PokemonImagesStyles.logo}
        />
      </View>
    </View>
  );
};

export default PokemonImages;
