import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, View, ScrollView} from 'react-native';
import {SvgUri} from 'react-native-svg';
import CustomText from '../../components/CustomText/CustomText';
import {SpritesType} from '../../types';
import AllPokemonImagesStyles from './AllPokemonImages.styles';

type ParamList = {
  PokemonImages: {
    images: SpritesType;
  };
};

const AllPokemonImages = () => {
  const route = useRoute<RouteProp<ParamList, 'PokemonImages'>>();

  const {images} = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={AllPokemonImagesStyles.imagesContainer}>
          <View style={AllPokemonImagesStyles.imageWrapper}>
            <CustomText>Dream World</CustomText>
            <SvgUri
              width="110"
              height="110"
              uri={images.other.dream_world.front_default}
            />
          </View>
          <View style={AllPokemonImagesStyles.imageWrapper}>
            <CustomText>Artwork</CustomText>
            <Image
              style={AllPokemonImagesStyles.image}
              source={{uri: images.other['official-artwork'].front_default}}
            />
          </View>
        </View>
        <View style={AllPokemonImagesStyles.imagesContainer}>
          <View style={AllPokemonImagesStyles.imageWrapper}>
            <CustomText>3D Adult</CustomText>
            <Image
              style={AllPokemonImagesStyles.image}
              source={{uri: images.other.home.front_default}}
            />
          </View>
          <View style={AllPokemonImagesStyles.imageWrapper}>
            <CustomText>3D Tiny</CustomText>
            <Image
              style={AllPokemonImagesStyles.image}
              source={{uri: images.other.home.front_shiny}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllPokemonImages;
