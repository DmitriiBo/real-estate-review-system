import { configureStore } from '@reduxjs/toolkit';

import authReducer from './AuthReducer';
import regReducer from './RegReducer';

export const store = configureStore({
  reducer: { loginState: authReducer, registerState: regReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
