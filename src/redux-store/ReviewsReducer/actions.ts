import realEstateApi from '../../utils/RealEstateApi';

export const UPDATE_REVIEWS = 'UPDATE_REVIEWS' as string;

type UpdateReviewsType = {
  ({ type, payload }: { type: string; payload: JSON }): void;
};

export function updateReviews({
  profileType,
}: {
  profileType: string;
}): (dispatch: UpdateReviewsType) => Promise<void> {
  return async (dispatch) => {
    const json = await realEstateApi.getRealEstateData(`api/v1/reviews/${profileType}`);
    dispatch({ type: UPDATE_REVIEWS, payload: json.results });
  };
}
