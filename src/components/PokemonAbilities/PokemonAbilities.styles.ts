import {StyleSheet} from 'react-native';

const PokemonAbilitiesStyles = StyleSheet.create({
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

export default PokemonAbilitiesStyles;
