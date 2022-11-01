import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '../../types';

const getInitialState = (): UserType => ({
  user: null,
  token: '',
});

const user = createSlice({
  name: 'user',
  initialState: getInitialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType | null>) {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
