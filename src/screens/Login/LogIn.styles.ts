import {StyleSheet} from 'react-native';

const LogInStyles = StyleSheet.create({
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
  buttonsWrapper: {
    flex: 1,
    justifyContent: 'space-between',
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

export default LogInStyles;
