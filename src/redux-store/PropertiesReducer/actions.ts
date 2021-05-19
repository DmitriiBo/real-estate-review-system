import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import realEstateApi from '../../utils/RealEstateApi';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

export const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES' as string;

export function updateProperties(): ThunkAction<RootState, void, unknown, AnyAction> {
  return async (dispatch) => {
    const json = await realEstateApi.getRealEstateData('api/v1/properties');
    dispatch({ type: UPDATE_PROPERTIES, payload: json.results });
  };
}
