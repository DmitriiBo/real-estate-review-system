import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../redux-store/store';
import { ReviewsList } from '../../types';
import Reviews from '../Reviews/index';

import { cnMyReviews } from './cn-my-reviews';

import './index.css';

const MyReviews: React.FC<ReviewsList> = ({ reviews }) => {
  return (
    <div className={cnMyReviews()}>
      <h3 className={cnMyReviews('title')}>Мои отзывы</h3>
      <Reviews reviews={reviews} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    reviews: state.reviews.reviews,
  };
};

export default connect(mapStateToProps, null)(MyReviews);
