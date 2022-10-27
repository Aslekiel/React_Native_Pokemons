import {StyleSheet} from 'react-native';

const PokemonImagesStyles = StyleSheet.create({
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
    fontFamily: 'PTSans-Regular',
    fontSize: 20,
    color: 'black',
  },
});

export default PokemonImagesStyles;
