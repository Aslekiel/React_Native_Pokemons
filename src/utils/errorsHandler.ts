import AsyncStorage from '@react-native-async-storage/async-storage';

import type { SingleUserType } from 'src/types';

import { notifierError, notifierSuccess } from './notifier';

type UserDataType = {
    username: string;
    password: string;
    repeatedPassword?: string;
  };

const errorsHandler = async (props: UserDataType) => {
  const usersFromDB = await AsyncStorage.getItem('users');
  const users = usersFromDB && JSON.parse(usersFromDB);

  const propsLength = Object.keys(props).length;

  const currentUser = users.find(
    (user: SingleUserType) => user.username === props.username,
  );

  if (propsLength === 2) {
    if (!currentUser) {
      notifierError({
        title: 'Login problem',
        description: 'This user is not registered',
      });
      return;
    }

    if (currentUser.password !== props.password) {
      notifierError({
        title: 'Login problem',
        description: 'Invalid password',
      });
      return;
    }

    return notifierSuccess({
      title: 'Success',
      description: 'Login completed!',
    });
  }

  if (propsLength === 3) {
    if (currentUser) {
      notifierError({
        title: 'Registration problems',
        description: 'User with this username is already registered',
      });
      return;
    }

    if (props.password !== props.repeatedPassword) {
      notifierError({
        title: 'Registration problems',
        description: 'Passwords do not match!',
      });
      return;
    }

    return notifierSuccess({
      title: 'Success',
      description: 'Registration completed!',
    });
  }

  if (
    !props.username.trim() ||
    !props.password.trim() ||
    !props.repeatedPassword?.trim()
  ) {
    notifierError({
      title: 'Woops',
      description: 'Not all registration fields are filled!',
    });
    return;
  }

  return notifierSuccess({
    title: 'Success',
    description: 'Registration completed!',
  });
};

export default errorsHandler;
