import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux-store/store';
import Reviews from '../Reviews/index';

import { cnMyReviews } from './cn-my-reviews';

import './index.css';

const MyReviews: React.FC = () => {
  const reviews = useSelector((state: RootState) => state.reviews.reviews);

  return (
    <div className={cnMyReviews()}>
      <h3 className={cnMyReviews('title')}>Мои отзывы</h3>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default MyReviews;
