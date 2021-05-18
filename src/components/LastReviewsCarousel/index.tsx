import React from 'react';
import Carousel from 'react-material-ui-carousel';

import Review, { ReviewCardProps } from '../Review/index';

import { cnLastReviewsCarousel } from './cn-auto-slider';

import './index.css';

interface ReviewsList {
  reviews: ReviewCardProps[];
}

const LastReviewsCarousel: React.FC<ReviewsList> = ({ reviews }) => {
  const getLastReviews = (list: ReviewCardProps[]) => {
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
          <div className={cnLastReviewsCarousel('item')}>
            <Review key={card.description} {...card} />
          </div>
        ))}
    </Carousel>
  );
};

export default LastReviewsCarousel;
