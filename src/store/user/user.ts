import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {IUserType} from '../../types';

const initialState: IUserType = {
  user: {
    id: '',
    fullname: '',
    username: '',
    avatar: '',
  },
  token: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserType | null>) {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
  },
});

export const {setUser} = user.actions;

export default user.reducer;
