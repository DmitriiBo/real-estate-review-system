import React from 'react';
import { Button, CardMedia, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { mockCardData } from '../../mocks/mock-properties-data';
import type { NilCard } from '../Card/Card';

import { cnEstateCard } from './cn-EstateCard';

import './index.css';

const useStyles = makeStyles((theme) => ({
  mainFeaturesPostContent: {
    marginBottom: theme.spacing(4),
  },
  CardMedia: {
    paddingTop: '100%',
    cursor: 'pointer',
  },
}));

interface EstateCardProps {
  handleCardClick(card: NilCard): void;
  pictures: NilCard[];
  showButton: boolean;
  handleShowButtonClick(): void;
  cardImages: NilCard[];
}

const EstateCard: React.FC<EstateCardProps> = ({
  pictures,
  handleCardClick,
  showButton,
  handleShowButtonClick,
  cardImages,
}) => {
  const classes = useStyles();
  return (
    <div className={cnEstateCard()}>
      <Paper>
        {mockCardData.map((card: NilCard) => (
          <Container maxWidth="md" key={card?.title ?? ''}>
            <h2>{card?.title ?? ''}</h2>
            <p>{card?.place ?? ''}</p>
            <Grid container spacing={1}>
              {/* <div className={cnEstateCard('EstateCardGrid')}> */}
              {pictures.map((cardImg: NilCard) => (
                <Grid
                  item
                  // key={cardImg?.images ?? ''}
                  // key={cardImg ?? ''}
                  xs={6}
                  sm={6}
                  md={4}
                  spacing={1}
                  // classes={{ item: 'EstateCardGridImages' }}
                  // className={cnEstateCard('EstateCardGridImages')}
                >
                  <CardMedia
                    image={cardImg ?? ''}
                    // image={card?.images[0] ?? ''}
                    className={classes.CardMedia}
                    onClick={() => {
                      handleCardClick(cardImg);
                      console.log(cardImages.indexOf(card));
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            {showButton && <Button onClick={handleShowButtonClick}>Показать все фото</Button>}

            <Container maxWidth="md">
              <Grid container spacing={10}>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Тип дома: {card?.typeHouse ?? ''}</p>
                  <p>Отделка: {card?.houseRepairs ?? ''}</p>
                  <p>Этаж: {card?.floor ?? ''}</p>
                  <p>Общая площадь: {card?.totalArea ?? ''}</p>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Жилая площадь: {card?.livingSpace ?? ''}</p>
                  <p>Площадь кухни: {card?.kitchenArea ?? ''}</p>
                  <p>Вид из окна: {card?.view ?? ''}</p>
                  <p>Балкон или лоджия: {card?.balconyOrLoggia ?? ''}</p>
                </Grid>
              </Grid>
            </Container>
          </Container>
        ))}
      </Paper>
    </div>
  );
};

export default EstateCard;
