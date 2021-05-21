import { configureStore } from '@reduxjs/toolkit';

import authReducer from './AuthReducer';
import { propertiesReducer } from './PropertiesReducer';
import regReducer from './RegReducer';
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
