import React from 'react';
import { Button, CardMedia, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { mockHomesData } from '../../mocks/mock-properties-data';
import type { NilHouseData } from '../HouseData/HouseData';

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

interface EstatehouseProps {
  handleImageClick(image: string): void;
  // pictures: NilHouseData[];
  showButton: boolean;
  handleShowButtonClick(): void;
  // houseImages: NilHouseData[];
}

const Estatehouse: React.FC<EstatehouseProps> = ({
  // pictures,
  handleImageClick,
  showButton,
  handleShowButtonClick,
  // houseImages,
}) => {
  const classes = useStyles();
  return (
    <div className={cnEstateCard()}>
      <Paper>
        {mockHomesData.map((house: NilHouseData) => (
          <Container maxWidth="md" key={house?.title ?? ''}>
            <h2>{house?.title ?? ''}</h2>
            <p>{house?.place ?? ''}</p>

            <Grid container spacing={1}>
              {house?.images.map((image: string) => (
                <Grid item xs={6} sm={6} md={4} spacing={1}>
                  <CardMedia
                    image={image}
                    className={classes.CardMedia}
                    onClick={() => {
                      handleImageClick(image);
                      // console.log(houseImages.indexOf(house));
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            {showButton && <Button onClick={handleShowButtonClick}>Показать все фото</Button>}

            <Container maxWidth="md">
              <Grid container spacing={10}>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Тип дома: {house?.typeHouse ?? ''}</p>
                  <p>Отделка: {house?.houseRepairs ?? ''}</p>
                  <p>Этаж: {house?.floor ?? ''}</p>
                  <p>Общая площадь: {house?.totalArea ?? ''}</p>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Жилая площадь: {house?.livingSpace ?? ''}</p>
                  <p>Площадь кухни: {house?.kitchenArea ?? ''}</p>
                  <p>Вид из окна: {house?.view ?? ''}</p>
                  <p>Балкон или лоджия: {house?.balconyOrLoggia ?? ''}</p>
                </Grid>
              </Grid>
            </Container>
          </Container>
        ))}
      </Paper>
    </div>
  );
};

export default Estatehouse;
