import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/index';

export const store = configureStore({
  reducer: { loginState: authReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
