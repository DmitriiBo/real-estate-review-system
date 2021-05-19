import { PayloadAction } from '@reduxjs/toolkit';

import { mockHomesData } from '../../mocks/mock-properties-data';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

// eslint-disable-next-line import/no-cycle
import { UPDATE_PROPERTIES } from './actions';

const initialState = {
  properties: mockHomesData,
};

export function propertiesReducer(state = initialState, action: PayloadAction): unknown {
  switch (action.type) {
    case UPDATE_PROPERTIES:
      if (action.payload.length) {
        return { ...state, properties: action.payload };
      }
      return state;
    default:
      return state;
  }
}
