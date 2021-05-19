import { PayloadAction } from '@reduxjs/toolkit';

import { mockReviews } from '../../mocks/review-mock-data';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

// eslint-disable-next-line import/no-cycle
import { UPDATE_REVIEWS } from './actions';

const initialState = {
  reviews: mockReviews,
};

export function reviewsReducer(state = initialState, action: PayloadAction): RootState {
  switch (action.type) {
    case UPDATE_REVIEWS:
      if (action.payload.length) {
        return { ...state, reviews: action.payload };
      }
      return state;
    default:
      return state;
  }
}
