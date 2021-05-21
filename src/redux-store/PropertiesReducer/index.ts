import { mockHomesData } from '../../mocks/mock-properties-data';
import { HouseData } from '../../types';

import { UPDATE_PROPERTIES } from './actions';

const initialState = {
  properties: mockHomesData,
};
type state = {
  properties: HouseData[];
};

type actionType = {
  type: string;
  payload?: HouseData[];
};
export function propertiesReducer(state = initialState, action: actionType): state {
  switch (action.type) {
    case UPDATE_PROPERTIES:
      if (action.payload?.length) {
        return { ...state, properties: action.payload };
      }
      return state;
    default:
      return state;
  }
}
