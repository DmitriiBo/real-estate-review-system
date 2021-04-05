import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type LoginState = {
  isLoggedIn: boolean;
  loginName: string | null;
};

export const loginSlice = createSlice({
  initialState: { isLoggedIn: false, loginName: null } as LoginState,
  name: 'loginState',
  reducers: {
    setIsLoggedIn: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
    },
    setLoginName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loginName = action.payload;
    },
  },
});

export const { setIsLoggedIn, logOut, setLoginName } = loginSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.loginState.isLoggedIn;
export const selectLoginName = (state: RootState) => state.loginState.loginName;

export default loginSlice.reducer;
