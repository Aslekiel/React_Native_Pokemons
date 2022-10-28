import { StyleSheet } from 'react-native';

const SinglePokemonPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  imageWrapper: {
    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    backgroundColor: '#E2E9E9',

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    marginHorizontal: 20,
    marginVertical: 5,

    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    alignSelf: 'center',
  },
  buttonWrapper: {
    width: 200,
    paddingVertical: 10,
    alignSelf: 'center',
  },
});

export default SinglePokemonPageStyles;
