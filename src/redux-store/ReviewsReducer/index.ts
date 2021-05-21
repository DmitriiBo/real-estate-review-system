import { mockReviews } from '../../mocks/review-mock-data';
import { reviewData } from '../../types';

import { UPDATE_REVIEWS } from './actions';

type state = {
  reviews: reviewData[];
};

type actionType = {
  type: string;
  payload?: reviewData[];
};
const initialState = {
  reviews: mockReviews,
};

export function reviewsReducer(state = initialState, action: actionType): state {
  switch (action.type) {
    case UPDATE_REVIEWS:
      if (action.payload?.length) {
        return { ...state, reviews: action.payload };
      }
      return state;
    default:
      return state;
  }
}
