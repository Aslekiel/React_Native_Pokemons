import AsyncStorage from '@react-native-async-storage/async-storage';

const getUsersFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export default getUsersFromStorage;
