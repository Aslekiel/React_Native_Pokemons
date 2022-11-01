/* eslint-disable no-async-promise-executor */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { nanoid } from '@reduxjs/toolkit';
import type { SingleUserType, UserType } from 'src/types';

import getUsersFromStorage from 'src/utils/getUsersFromStorege';

type UserDataType = {
  username: string;
  password: string;
};

const logIn = async (userData: UserDataType) => {
  const user: UserType = await new Promise(async (res) => {
    const users = await AsyncStorage.getItem('users');
    const currentUser = users &&
    JSON.parse(users).filter((user: SingleUserType) => user.username === userData.username);

    const findedUser = currentUser
      ? {
        id: currentUser[0].id,
        username: currentUser[0].username,
        password: currentUser[0].password,
      }
      : null;

    const registeredUser: SingleUserType = {
      id: findedUser?.id,
      username: userData.username,
    };
    setTimeout(() => res({ user: registeredUser, token: currentUser[0].token }), 500);
  });

  return user;
};

const signUp = async (userData: UserDataType) => {
  const user: UserType = await new Promise(async (res) => {
    const userForDB = {
      id: nanoid(),
      username: userData.username,
      password: userData.password,
      token: nanoid(),
    };

    await AsyncStorage.setItem('user', JSON.stringify(userForDB));

    const usersFromDB = await getUsersFromStorage();

    if (!usersFromDB) {
      const newUsers = [];
      newUsers.push(userForDB);
      await AsyncStorage.setItem('users', JSON.stringify(newUsers));
    } else {
      usersFromDB.push(userForDB);
      await AsyncStorage.setItem('users', JSON.stringify(usersFromDB));
    }

    const users = await AsyncStorage.getItem('users');
    const currentUser = users &&
    JSON.parse(users).filter((user: SingleUserType) => user.username === userData.username);

    const newUser: SingleUserType = {
      id: currentUser[0].id,
      username: currentUser[0].username,
    };

    setTimeout(() => res({ user: newUser, token: currentUser[0].token }), 500);
  });
  return user;
};

const checkUser = async () => {
  const user: UserType = await new Promise(async (res) => {
    const currentUser = await AsyncStorage.getItem('user');

    if (currentUser) {
      const userData = {
        id: JSON.parse(currentUser).id,
        username: JSON.parse(currentUser).username,
      };
      setTimeout(() => res({ user: userData, token: JSON.parse(currentUser).token }), 500);
    }
  });

  return user;
};

export const userApi = {
  logIn,
  signUp,
  checkUser,
};
