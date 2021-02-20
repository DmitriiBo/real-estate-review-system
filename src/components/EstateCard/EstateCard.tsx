import React from 'react';
import { Button, Card, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { cnEstateCard } from './cn-EstateCard';

type EstateCardProps = {
  title: string;
  place: string;
};

const useStyles = makeStyles((theme) => ({
  mainFeaturesPostContent: {
    marginBottom: theme.spacing(4),
  },
  CardMedia: {
    paddingTop: '56%',
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

const EstateCard: React.FC<EstateCardProps> = ({ title, place }) => {
  const classes = useStyles();
  return (
    <div className={cnEstateCard()}>
      <Paper>
        {/* <h2>{title}</h2>
      <p>{place}</p>
      <Paper style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={6}>
              <div>
                <Typography component="h2" gutterBottom color="inherit">
                  Дом полностью в вашем распоряжении.
                </Typography>
                <Typography component="h2" gutterBottom color="inherit">
                  Дом полностью в вашем распоряжении.
                </Typography>
                <Button>Показать все фото</Button>
              </div>
            </Grid>
          </Grid>
        </Container> */}

        <Container maxWidth="md">
          <h2>{title}</h2>
          <p>{place}</p>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={6} sm={6} md={4}>
                <CardMedia
                  image="https://source.unsplash.com/random"
                  className={classes.CardMedia}
                />
              </Grid>
            ))}
            <Button>Показать все фото</Button>
          </Grid>
          <p>Тип дома: монолитный</p>
          <p>Отделка: без отделки</p>
          <p>Этаж: 13 из 13</p>
          <p>Общая площадь: 415.8 м²</p>
          <p>Жилая площадь: 155 м²</p>
          <p>Площадь кухни: 35 м²</p>
          <p>Вид из окна: на улицу, во двор</p>
          <p>Балкон или лоджия: нет</p>
          <p>Адрес: ул. Новый Арбат, д. 32</p>
        </Container>
      </Paper>
    </div>
  );
};

export default EstateCard;
