import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';

interface LoginState {
  isLoggedIn: boolean;
  loginName: string | null;
}
const initialState: LoginState = {
  isLoggedIn: false,
  loginName: null,
};

export const loginSlice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setLogIn: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
    },
    setLogOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
    },
    setLoginName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loginName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogIn, setLogOut, setLoginName } = loginSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.loginState.isLoggedIn;
export const selectLoginName = (state: RootState) => state.loginState.loginName;
export default loginSlice.reducer;
