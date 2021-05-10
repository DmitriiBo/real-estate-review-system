import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import realEstateApi from '../../utils/RealEstateApi';
import type { RootState } from '../store';

export type PayloadType = {
  login: string;
  password: string;
};

type LoginStateType = {
  isLoggedIn: boolean;
  loginName: string | null;
  email: string | null;
  password: string | null;
  loading: boolean;
  error: boolean;
  networkError: boolean;
  statusAuth: boolean | null;
};
const initialState: LoginStateType = {
  isLoggedIn: false,
  loginName: null,
  email: null,
  password: null,
  loading: false,
  error: false,
  networkError: false,
  statusAuth: false,
};
export type PromisePayloadType = {
  payload?: Promise<{ token?: string }>;
  ok?: boolean;
  token?: string;
};
// eslint-disable-next-line @typescript-eslint/ban-types
export const postLogIn: AsyncThunk<PromisePayloadType, PayloadType, {}> = createAsyncThunk(
  'login',
  async ({ login, password }): Promise<PromisePayloadType> => {
    const response = await realEstateApi
      .postData('login/', {
        body: { username: login, password },
      })
      .then(async (res) => {
        return res.json();
      });

    return response;
  },
);

export const loginSlice = createSlice({
  name: 'loginState',
  initialState,

  reducers: {
    logIn: (state, { payload }: PayloadAction<{ login: string }>) => {
      // eslint-disable-next-line no-param-reassign
      state.loginName = payload.login;
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      sessionStorage.setItem(`LoginName`, state.loginName);
    },

    logOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postLogIn.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.error = false;
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    });

    builder.addCase(postLogIn.fulfilled, (state: LoginStateType, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;

      if (payload.token) {
        // eslint-disable-next-line no-param-reassign
        state.error = false;
      }
      // eslint-disable-next-line no-param-reassign
      state.error = true;
    });

    builder.addCase(postLogIn.rejected, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.networkError = true;
    });

    builder.addDefaultCase((state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    });
  },
});

export const { logIn, logOut } = loginSlice.actions;

export const selectIsLoggedIn = (state: RootState): boolean => state.loginState.isLoggedIn;
export const selectLoginName = (state: RootState): string | null => state.loginState.loginName;
export const selectLoading = (state: RootState): boolean => state.loginState.loading;
export const selectStatus = (state: RootState): boolean | null => state.loginState.statusAuth;
export const selectError = (state: RootState): boolean => state.loginState.error;
export const selectNetworkError = (state: RootState): boolean => state.loginState.networkError;

export default loginSlice.reducer;
