import AsyncStorage from '@react-native-async-storage/async-storage';
import {nanoid} from '@reduxjs/toolkit';
import {IUser, IUserType} from '../types';

type UserDataType = {
  username: string;
  password: string;
};

const logIn = async (userData: UserDataType) => {
  const user: IUserType = await new Promise(async res => {
    const id = AsyncStorage.getItem('id');
    const username = AsyncStorage.getItem('username');
    const password = AsyncStorage.getItem('password');

    const userValues = await Promise.all([id, username, password]);
    const token = await AsyncStorage.getItem('token');

    const findedUser = userValues
      ? {
          id: userValues[0],
          username: userValues[1],
          password: userValues[2],
        }
      : null;

    if (
      findedUser?.username === userData.username &&
      findedUser?.password === userData.password &&
      findedUser.id &&
      token
    ) {
      const registeredUser: IUser = {
        id: findedUser.id,
        username: userData.username,
      };
      setTimeout(() => res({user: registeredUser, token}), 500);
    }
  });
  return user;
};

const signUp = async (userData: UserDataType) => {
  const user: IUserType = await new Promise(async res => {
    await Promise.all([
      AsyncStorage.setItem('id', nanoid()),
      AsyncStorage.setItem('username', userData.username),
      AsyncStorage.setItem('password', userData.password),
      AsyncStorage.setItem('token', nanoid()),
    ]);

    const id = AsyncStorage.getItem('id');
    const username = AsyncStorage.getItem('username');

    const newUserData = await Promise.all([id, username]);
    const token = await AsyncStorage.getItem('token');

    if (newUserData[0] && newUserData[1] && token) {
      const newUser: IUser = {
        id: newUserData[0],
        username: newUserData[1],
      };
      setTimeout(() => res({user: newUser, token}), 500);
    }
  });
  return user;
};

const checkUser = async () => {
  const user: IUserType = await new Promise(async res => {
    const id = AsyncStorage.getItem('id');
    const username = AsyncStorage.getItem('username');

    const userData = await Promise.all([id, username]);
    const token = await AsyncStorage.getItem('token');

    if (userData[0] && userData[1] && token) {
      const currentUser: IUser = {
        id: userData[0],
        username: userData[1],
      };
      setTimeout(() => res({user: currentUser, token}), 500);
    }
  });

  return user;
};

export const userApi = {
  logIn,
  signUp,
  checkUser,
};
