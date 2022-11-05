import { userApi } from 'src/api/userApi';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { setUser } from 'src/store/user';
import { getSingleUserFromStorage } from 'src/utils/storage';

type UserDataType = {
    username: string;
    password: string;
};

const useCurrentUser = (userData: UserDataType | null) => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  const logIn = async () => {
    if (userData) {
      const res = await userApi.logIn(userData);
      return dispatch(setUser(res));
    }
  };

  const signUp = async () => {
    if (userData) {
      const res = await userApi.signUp(userData);
      return dispatch(setUser(res));
    }
  };

  const checkUser = async () => {
    const res = await userApi.checkUser();

    return dispatch(setUser(res));
  };

  const clearUserData = async () => {
    return dispatch(setUser({ user: null, token: null }));
  };

  const getTokenFromStorage = async () => {
    const res = await getSingleUserFromStorage();
    return res.token;
  };

  return { user, logIn, signUp, checkUser, clearUserData, getTokenFromStorage };
};

export default useCurrentUser;
