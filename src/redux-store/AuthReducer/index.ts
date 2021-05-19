import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import realEstateApi from '../../utils/RealEstateApi';
import type { RootState } from '../store';

export type PayloadType = {
  login: string;
  password: string;
};
type JWTtokenType = {
  // eslint-disable-next-line camelcase
  user_id: string;
  email: string;
  exp: number;
};
type LoginStateType = {
  isLoggedIn: boolean;
  profileType: string | null;
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
  profileType: null,
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
export const ApiLogIn: AsyncThunk<PromisePayloadType, PayloadType, {}> = createAsyncThunk(
  'login',
  async ({ login, password }): Promise<PromisePayloadType> => {
    const response = await realEstateApi
      .postData('api/v1/login/', {
        body: { username: login, password },
      })
      .then((result) => {
        return result.json();
      });
    // eslint-disable-next-line camelcase
    const { token, profile_type } = response;
    // eslint-disable-next-line camelcase
    const { user_id, email, exp }: JWTtokenType = await jwtDecode(token);

    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
    localStorage.setItem('email', email);
    localStorage.setItem('exp', exp.toString());
    localStorage.setItem('profileType', profile_type);

    return token;
  },
);

// eslint-disable-next-line @typescript-eslint/ban-types
export const ApiRefreshToken: AsyncThunk<PromisePayloadType, string, {}> = createAsyncThunk(
  'refresh',
  async (token) => {
    const response = await realEstateApi
      .postData('api/v1/refresh', {
        body: { token },
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
      localStorage.setItem(`LoginName`, state.loginName);
    },

    logOut: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
    },
    refresh: (state, { payload }: PayloadAction<{ login: string }>) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.loginName = payload.login;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(ApiLogIn.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.error = false;
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    });

    builder.addCase(ApiLogIn.fulfilled, (state: LoginStateType, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;

      // eslint-disable-next-line no-param-reassign
      state.error = !payload.token;
    });

    builder.addCase(ApiLogIn.rejected, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.networkError = true;
    });

    builder.addCase(ApiRefreshToken.pending, (state: LoginStateType) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    });
    builder.addCase(ApiRefreshToken.fulfilled, (state: LoginStateType) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.error = false;
    });
    builder.addCase(ApiRefreshToken.rejected, (state: LoginStateType) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
      // eslint-disable-next-line no-param-reassign
    });

    builder.addDefaultCase((state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    });
  },
});

export const { logIn, logOut, refresh } = loginSlice.actions;

export const selectIsLoggedIn = (state: RootState): boolean => state.loginState.isLoggedIn;
export const selectLoginName = (state: RootState): string | null => state.loginState.loginName;
export const selectLoading = (state: RootState): boolean => state.loginState.loading;
export const selectStatus = (state: RootState): boolean | null => state.loginState.statusAuth;
export const selectNetworkError = (state: RootState): boolean => state.loginState.networkError;

export default loginSlice.reducer;
