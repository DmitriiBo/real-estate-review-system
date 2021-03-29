import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducer';

export const store = configureStore({
  reducer: { loginState: loginReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
