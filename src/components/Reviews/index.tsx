import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import getResultWord from '../../utils/getResultWord';
import realEstateApi from '../../utils/RealEstateApi';
import Review from '../Review/index';

import { cnReviews } from './cn-reviews';
import useStyles from './use-styles';

type Card = {
  id?: number;
  author?: string;
  authorAvatar?: string;
  countReview?: number;
  date?: string;
  rating?: number;
  title?: string;
  description?: string;
  property?: string;
  photos?: string[];
};

const Reviews: React.FC = () => {
  const [cards, setCards] = React.useState<Card[]>([]);
  // запрос списка отзывов, надо через редакс их ловить?  в views.py есть методы, которые определяются сериалайзерами, в которых есть вся информация/ отзывы лежат территориально на бэке в папке reviews/views.py, а их гет-запрос из ридми выдаёт пустой массив.
  React.useEffect(() => {
    realEstateApi
      .getRealEstateData(`reviews/${'tenant' || 'landlord'}`)
      .then(() => {
        setCards([
          {
            id: 15645646541,
            rating: 5,
            description:
              'Отличная площадка для проведения воркшопов. Арендовал 250м2 с марта 2020 по декабрь. Современные планировки, надежные инженерные системы, профессиональная    управляющая компания. Всё устроило.',
            title: 'ул.Стахановская, 54 лит 3',
            photos: [
              'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              'https://images.unsplash.com/photo-1554435493-93422e8220c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            ],
          },
          {
            id: 15645646542,
            author: 'Den Malfoy',
            title: 'ул.Стахановская, 54 лит 4',
            countReview: 2,
            date: '25 марта 2020',
            rating: 4,
            description: 'Замечательный офис, жаль что мы съехали',
          },
          {
            id: 15645646543,
            author: 'Tashy Oakly',
            authorAvatar:
              'https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'ул.Стахановская, 54 лит 4',
            countReview: 11,
            date: '01 мая 2018',
            rating: 2,
            description:
              'Про инженерные системы из предыдущего отзыва - не согласен, лично у нас были скачки напряжения и приходилось часто перезапускать кассу, теряя клиентов. То энергии не хватало и свет в помещении был неяркий, даже после замены ламп.',
          },
        ]);
        // eslint-disable-next-line no-console
        console.log('cм ответ');
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('нет соединения с сервером');
      });
  }, []);

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
