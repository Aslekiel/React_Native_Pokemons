import {StyleSheet} from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  contentContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  logo: {
    maxWidth: 150,
    maxHeight: 80,
  },
  text: {
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: 15,
    color: 'black',
    textAlign: 'justify',
    textShadowColor: 'grey',
  },
  pokemonWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#E2E9E9',

    width: 200,
    height: 200,

    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    padding: 20,

    marginVertical: 10,
  },
  pokemonImage: {
    width: 120,
    height: 120,
  },
  pokemonName: {
    fontFamily: 'PTSans-Regular',
    fontSize: 20,
    color: 'black',
  },
});

export default HomeScreenStyles;
