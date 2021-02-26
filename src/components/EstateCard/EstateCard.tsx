import React from 'react';
import { Button, CardMedia, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import type { NilCard } from '../Card/Card';

import { cnEstateCard } from './cn-EstateCard';

import './index.css';

const useStyles = makeStyles((theme) => ({
  mainFeaturesPostContent: {
    marginBottom: theme.spacing(4),
  },
  CardMedia: {
    paddingTop: '56%',
  },
}));

interface EstateCardProps {
  handleCardClick(card: NilCard): void;
  title: string;
  place: string;
  pictures: NilCard[];
  showButton: boolean;
  handleShowButtonClick(): void;
  initialCardImage: NilCard[];
}

const EstateCard: React.FC<EstateCardProps> = ({
  title,
  place,
  pictures,
  handleCardClick,
  showButton,
  handleShowButtonClick,
  initialCardImage,
}) => {
  const classes = useStyles();
  return (
    <div className={cnEstateCard()}>
      <Paper>
        <Container maxWidth="md">
          <h2>{title}</h2>
          <p>{place}</p>
          <Grid container spacing={1}>
            {pictures.map((card: NilCard) => (
              <Grid item key={card?.image ?? ''} xs={6} sm={6} md={4}>
                <CardMedia
                  image={card?.image ?? ''}
                  className={classes.CardMedia}
                  onClick={() => {
                    handleCardClick(card);
                    console.log(initialCardImage.indexOf(card));
                  }}
                />
              </Grid>
            ))}
          </Grid>
          {showButton && <Button onClick={handleShowButtonClick}>Показать все фото</Button>}
          <Container maxWidth="md">
            <Grid container spacing={10}>
              <Grid item xs={6} sm={6} md={4}>
                <p>Тип дома: монолитный</p>
                <p>Отделка: без отделки</p>
                <p>Этаж: 13 из 13</p>
                <p>Общая площадь: 415.8 м²</p>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <p>Жилая площадь: 155 м²</p>
                <p>Площадь кухни: 35 м²</p>
                <p>Вид из окна: на улицу, во двор</p>
                <p>Балкон или лоджия: нет</p>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Paper>
    </div>
  );
};

export default EstateCard;
