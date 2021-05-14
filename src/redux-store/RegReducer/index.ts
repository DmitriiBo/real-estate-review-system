import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import realEstateApi from '../../utils/RealEstateApi';
import type { RootState } from '../store';

type RegStateType = {
  isLoggedIn: boolean;
  name: string | null;
  email: string | null;
  password: string | null;
  loading: boolean;
  error: boolean;
  statusAuth: null | number;
};
export type postRegType = {
  email: string;
  password: string;
  name: string | null;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const postRegister: AsyncThunk<Response, postRegType, {}> = createAsyncThunk(
  'register',
  ({ email, password, name }: postRegType, { dispatch }) => {
    return realEstateApi.postData('register', {
      body: { email, password, name },
    });
  },
);

export const registerSlice = createSlice({
  name: 'registerState',
  initialState: {
    isLoggedIn: false,
    name: null,
    email: null,
    password: null,
    loading: false,
    error: false,
    statusAuth: null,
  } as RegStateType,

  reducers: {
    doRegister: (state, action: PayloadAction<string | null>) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.name = action.payload;
      localStorage.setItem(`LoginName`, JSON.stringify(action.payload));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(postRegister.pending, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.error = false;
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    });
    builder.addCase(postRegister.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.statusAuth = action.payload.status;

      if (action.payload.status !== 200) {
        // eslint-disable-next-line no-param-reassign
        state.error = true;
      }
    });
    builder.addCase(postRegister.rejected, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.error = true;
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    });
  },
});

export const { doRegister } = registerSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.registerState.isLoggedIn;
export const selectRegName = (state: RootState) => state.registerState.name;
export const selectRegLoading = (state: RootState) => state.registerState.loading;
export const selectRegStatus = (state: RootState) => state.registerState.statusAuth;
export const selectRegError = (state: RootState) => state.registerState.error;

export default registerSlice.reducer;
