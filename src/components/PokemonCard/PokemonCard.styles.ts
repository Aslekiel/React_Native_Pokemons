import { StyleSheet } from 'react-native';

const PokemonCardStyles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E2E9E9',

    position: 'relative',

    margin: 10,
    borderColor: 'grey',
    borderRadius: 20,
    borderWidth: 2,

    width: 140,
    maxHeight: 180,
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 12,
  },
});

export default PokemonCardStyles;
