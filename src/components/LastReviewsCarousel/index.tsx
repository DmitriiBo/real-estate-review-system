import React from 'react';
import Carousel from 'react-material-ui-carousel';

import { reviewData, ReviewsList } from '../../types';
import Review from '../Review/index';

import { cnLastReviewsCarousel } from './cn-auto-slider';

import './index.css';

const LastReviewsCarousel: React.FC<ReviewsList> = ({ reviews }) => {
  const getLastReviews = (list: reviewData[]) => {
    if (list.length) {
      // Здесь необходимо вставить логику сортировки массива по дате, когда вместо вместо моковых данных будут данные с сервера
      return list.slice(0, 5);
    }
    return null;
  };
  const lastReviews = getLastReviews(reviews);

  return (
    <Carousel autoPlay animation="slide" className={cnLastReviewsCarousel()}>
      {lastReviews &&
        lastReviews.map((card) => (
          <div key={card.pk} className={cnLastReviewsCarousel('item')}>
            <Review {...card} />
          </div>
        ))}
    </Carousel>
  );
};

export default LastReviewsCarousel;
