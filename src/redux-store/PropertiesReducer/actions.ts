import realEstateApi from '../../utils/RealEstateApi';

type UpdateType = {
  ({ type, payload }: { type: string; payload: JSON }): void;
};
export const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES' as string;

export function updateProperties(): (dispatch: UpdateType) => Promise<void> {
  return async (dispatch) => {
    const json = await realEstateApi.getRealEstateData('api/v1/properties');
    dispatch({ type: UPDATE_PROPERTIES, payload: json.results });
  };
}
