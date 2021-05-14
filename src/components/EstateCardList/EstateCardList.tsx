import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Button, CardMedia, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { mockHomesData } from '../../mocks/mock-properties-data';
import type { NilHouseData } from '../HouseData/HouseData';

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

const EstateCardList: React.FC = () => {
  const { path } = useRouteMatch();
  const classes = useStyles();
  const [houseCards, setHouseCards] = React.useState<NilHouseData[]>([]);

  React.useEffect(() => {
    setHouseCards(mockHomesData.slice(0, 4));
  }, []);

  function handleShowCardClick() {
    const newHouseCards =
      mockHomesData.length - houseCards.length < 3
        ? mockHomesData
        : mockHomesData.slice(0, houseCards.length + 3);

    setHouseCards(newHouseCards);
  }

  return (
    <div>
      <h1 className={cnEstateCardList('Title')}>Результаты поиска</h1>
      <Container maxWidth="lg" style={{ display: 'grid', gap: 15, gridTemplateColumns: '1fr 1fr' }}>
        {houseCards.map((home: NilHouseData) => (
          <Container maxWidth="xs" key={home?.id}>
            <Link to={`${path}/${home?.id}`} style={{ textDecoration: 'none' }}>
              <Paper>
                <Container maxWidth="xs" style={{ padding: 15, justifyContent: 'center' }}>
                  <h2 style={{ fontSize: 18 }}>{home?.title}</h2>
                  <p style={{ fontSize: 14 }}>{home?.place}</p>

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

      {mockHomesData.length > houseCards.length && (
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
