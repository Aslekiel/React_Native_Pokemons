import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SingleUserType } from 'src/types';

export const getSingleUserFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');

    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const getUsersFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const saveUserToStorage = async (userData: SingleUserType) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const saveTokenToStorage = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const saveNewUserToUsersData = async (usersData: SingleUserType[]) => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(usersData));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const clearUserDataFromStorage = async (clearData: string) => {
  try {
    await AsyncStorage.setItem('user', clearData);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const getTokenFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token');

    return jsonValue !== null ? jsonValue : null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
