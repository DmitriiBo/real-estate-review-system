import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ReviewsList } from '../../types';
// import { reviewData } from '../../types';
import getResultWord from '../../utils/getResultWord';
// import realEstateApi from '../../utils/RealEstateApi';
import Review from '../Review/index';

import { cnReviews } from './cn-reviews';
import useStyles from './use-styles';

// type reviewData = {
//   pk?: number;
//   author?: string;
//   authorAvatar?: string;
//   countReview?: number;
//   date?: string;
//   rating?: number;
//   title?: string;
//   description?: string;
//   property?: string;
//   photos?: string[];
// };

const Reviews: React.FC<ReviewsList> = ({ reviews }) => {
  // const Reviews: React.FC = () => {
  //   const [reviews, setReviews] = React.useState<reviewData>([]);

  // React.useEffect(() => {
  //   realEstateApi
  //     .getRealEstateData(`reviews/${'tenant' || 'landlord'}`)
  //     .then((data) => {
  //       setReviews(data);
  //     })
  //     .catch(() => {
  //       // eslint-disable-next-line no-console
  //       console.log('нет соединения с сервером');
  //     });
  // }, []);

  const getResultRequestString = () => {
    if (reviews.length) {
      return `${getResultWord(reviews.length, ['отзыв', 'отзыва', 'отзывов'])} ${'найдено'}`;
    }

    return 'Ничего не найдено';
  };

  const classes = useStyles();

  return (
    <div className={cnReviews()}>
      <Container className={classes.cardGrid}>
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h5">{getResultRequestString()}</Typography>
        </Grid>
        {/* {cards.length && cards.map((card) => <Review key={card.description} {...card} />)} */}
        {reviews.length ? reviews.map((review) => <Review key={review.pk} {...review} />) : ''}
      </Container>
    </div>
  );
};

export default Reviews;
