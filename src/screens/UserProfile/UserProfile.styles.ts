import { StyleSheet } from 'react-native';

const UserProfilesStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 30,
    marginVertical: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  username: {
    marginVertical: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: 150,
  },
});

export default UserProfilesStyles;
