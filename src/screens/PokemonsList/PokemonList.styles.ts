import {StyleSheet} from 'react-native';

const PokemonsListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  firstLoading: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loading: {
    paddingVertical: 20,
  },
});

export default PokemonsListStyles;
