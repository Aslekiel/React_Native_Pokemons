/* eslint-disable no-async-promise-executor */
import { nanoid } from '@reduxjs/toolkit';
import type { SingleUserType, UserType } from 'src/types';

import {
  getSingleUserFromStorage,
  getUsersFromStorage,
  saveNewUserToUsersData,
  saveUserToStorage,
} from 'src/utils/storage';

type UserDataType = {
  username: string;
  password: string;
};

const logIn = async (userData: UserDataType) => {
  const user: UserType = await new Promise(async (res) => {
    const users = await getUsersFromStorage();

    const currentUser = users &&
    users.filter((user: SingleUserType) => user.username === userData.username);

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

    await saveUserToStorage(userForDB);

    const usersFromDB = await getUsersFromStorage();

    if (!usersFromDB) {
      const newUser = [];
      newUser.push(userForDB);
      await saveNewUserToUsersData(newUser);
    } else {
      usersFromDB.push(userForDB);
      await saveNewUserToUsersData(usersFromDB);
    }

    const users = await getUsersFromStorage();
    const currentUser = users &&
    users.filter((user: SingleUserType) => user.username === userData.username);

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
    const currentUser = await getSingleUserFromStorage();

    if (currentUser) {
      const userData = {
        id: currentUser.id,
        username: currentUser.username,
      };
      setTimeout(() => res({ user: userData, token: currentUser.token }), 500);
    }
  });

  return user;
};

export const userApi = {
  logIn,
  signUp,
  checkUser,
};
