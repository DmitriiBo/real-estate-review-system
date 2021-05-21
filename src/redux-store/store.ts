import { configureStore } from '@reduxjs/toolkit';

import authReducer from './AuthReducer';
// eslint-disable-next-line import/no-cycle
import { propertiesReducer } from './PropertiesReducer';
import regReducer from './RegReducer';
// eslint-disable-next-line import/no-cycle
import { reviewsReducer } from './ReviewsReducer';

export const store = configureStore({
  reducer: {
    loginState: authReducer,
    registerState: regReducer,
    reviews: reviewsReducer,
    properties: propertiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
