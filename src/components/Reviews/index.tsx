import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { mockReviews as cards } from '../../mocks/review-mock-data';
import getResultWord from '../../utils/getResultWord';
import Review from '../Review/index';

import { cnReviews } from './cn-reviews';
import useStyles from './use-styles';

const Reviews: React.FC = () => {
  const getResultRequestString = () => {
    if (cards.length) {
      return `${getResultWord(cards.length, ['отзыв', 'отзыва', 'отзывов'])} ${'найдено'}`;
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
        {cards.length && cards.map((card) => <Review key={card.id} {...card} />)}
      </Container>
    </div>
  );
};

export default Reviews;
