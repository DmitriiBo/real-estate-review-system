import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import getResultWord from '../../utils/getResultWord';
import realEstateApi from '../../utils/RealEstateApi';
import Review from '../Review/index';

import { cnReviews } from './cn-reviews';
import useStyles from './use-styles';

type Card = { description: string };

const Reviews: React.FC = () => {
  const [cards, setCards] = React.useState<Card[]>([]);
  // запрос списка отзывов, надо через редакс их ловить?  в views.py есть методы, которые определяются сериалайзерами, в которых есть вся информация/ отзывы лежат территориально на бэке в папке reviews/views.py, а их гет-запрос из ридми выдаёт пустой массив.
  realEstateApi
    .getRealEstateData(`reviews/${'tenant' || 'landlord'}`)
    .then(() => {
      setCards(cards);
      // eslint-disable-next-line no-console
      console.log('cм ответ');
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log('нет соединения с сервером');
    });

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
        {cards.length && cards.map((card) => <Review key={card.description} {...card} />)}
      </Container>
    </div>
  );
};

export default Reviews;
