import { StyleSheet } from 'react-native';

const CustomInputStyles = StyleSheet.create({
  inputsWrapper: {
    width: '100%',
  },
  input: {
    fontSize: 20,
    color: 'black',
    width: '100%',

    marginVertical: 5,
    padding: 20,

    borderWidth: 2,
    borderColor: 'rgba(175, 47, 47, 0.15)',
    borderRadius: 20,

    backgroundColor: 'rgba(0, 0, 0, 0.003)',
    shadowColor: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
  },
});

export default CustomInputStyles;
