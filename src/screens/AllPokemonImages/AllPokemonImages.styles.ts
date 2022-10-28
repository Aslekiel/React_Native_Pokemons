import { StyleSheet } from 'react-native';

const AllPokemonImagesStyles = StyleSheet.create({
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,

    padding: 10,
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
  },
});

export default AllPokemonImagesStyles;
