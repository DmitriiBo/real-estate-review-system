import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ReviewsList } from '../../types';
import getResultWord from '../../utils/getResultWord';
import Review from '../Review/index';

import { cnReviews } from './cn-reviews';
import useStyles from './use-styles';

const Reviews: React.FC<ReviewsList> = ({ reviews }) => {
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
        {reviews.length ? reviews.map((review) => <Review key={review.pk} {...review} />) : ''}
      </Container>
    </div>
  );
};

export default Reviews;
