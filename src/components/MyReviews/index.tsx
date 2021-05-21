import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';

import { RootState } from '../../redux-store/store';
import { Pagination } from '../Padination/Pagination';
import Reviews from '../Reviews/index';

import { cnMyReviews } from './cn-my-reviews';

import './index.css';

const MyReviews: React.FC = () => {
  const reviews = useSelector((state: RootState) => state.reviews.reviews);

  return (
    <Container maxWidth="md">
      <div className={cnMyReviews()}>
        <h1 className={cnMyReviews('title')}>Мои отзывы</h1>
        <Pagination />
        <Reviews reviews={reviews} />
      </div>
    </Container>
  );
};

export default MyReviews;
