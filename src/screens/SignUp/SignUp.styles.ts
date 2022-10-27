import {StyleSheet} from 'react-native';

const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  wrapper: {
    flex: 1,
    width: '100%',
  },
  inputsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 80,
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
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  title: {
    fontFamily: 'FuzzyBubbles-Regular',
    fontSize: 14,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SignUpStyles;
