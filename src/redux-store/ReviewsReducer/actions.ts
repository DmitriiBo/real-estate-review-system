import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import realEstateApi from '../../utils/RealEstateApi';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

export const UPDATE_REVIEWS = 'UPDATE_REVIEWS' as string;

export function updateReviews({
  profileType,
}: {
  profileType: string;
}): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    const json = await realEstateApi.getRealEstateData(`api/v1/reviews/${profileType}`);
    dispatch({ type: UPDATE_REVIEWS, payload: json.results });
  };
}
