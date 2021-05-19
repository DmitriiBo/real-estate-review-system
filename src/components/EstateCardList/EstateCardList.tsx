import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, CardMedia, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import type { HouseData, NilHouseData } from '../../types';

import { cnEstateCardList } from './cn-EstateCardList';

import './index.css';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    display: 'flex',
    margin: 'auto',
    padding: '10px 40px',
    marginTop: 40,
    marginBottom: 40,
  },
  CardMedia: {
    paddingTop: '120%',
    width: '200%',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },
});

const EstateCardList: React.FC<NilHouseData> = ({ properties }) => {
  const classes = useStyles();
  const [houseCards, setHouseCards] = React.useState<HouseData[]>([]);

  React.useEffect(() => {
    setHouseCards(properties.slice(0, 4));
  }, [properties]);

  function handleShowCardClick() {
    const newHouseCards =
      properties.length - houseCards.length < 3
        ? properties
        : (properties.slice(0, houseCards.length + 3) as HouseData[]);

    setHouseCards(newHouseCards);
  }

  return (
    <div>
      <Container maxWidth="lg" style={{ display: 'grid', gap: 15, gridTemplateColumns: '1fr 1fr' }}>
        {houseCards.map((home: HouseData) => (
          <Container maxWidth="xs" key={home.pk}>
            <Link to={`cards/${home.pk}`} style={{ textDecoration: 'none' }}>
              <Paper>
                <Container maxWidth="xs" style={{ padding: 15, justifyContent: 'center' }}>
                  <h2 style={{ fontSize: 18 }}>{home.name}</h2>
                  <p style={{ fontSize: 14 }}>{home.address}</p>

                  <div className={cnEstateCardList('GridContainer')}>
                    {home?.images.slice(0, 1).map((image: string) => (
                      <div key={image ?? ''} className={cnEstateCardList('GridItem')}>
                        <CardMedia image={image} className={classes.CardMedia} />
                      </div>
                    ))}
                  </div>
                </Container>
              </Paper>
            </Link>
          </Container>
        ))}
      </Container>

      {properties.length > houseCards.length && (
        <Button
          variant="contained"
          style={{ fontSize: 18 }}
          size="large"
          onClick={handleShowCardClick}
          className={classes.root}
        >
          Показать еще
        </Button>
      )}
    </div>
  );
};

export default EstateCardList;
