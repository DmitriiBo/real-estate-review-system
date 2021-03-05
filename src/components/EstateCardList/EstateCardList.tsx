import React from 'react';
// import { Route } from 'react-router-dom';
// import { Link, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { mockHomesData } from '../../mocks/mock-properties-data';
import EstateCard from '../EstateCard/EstateCard';
import type { NilHouseData } from '../HouseData/HouseData';

const EstateCardList: React.FC = () => {
  const [houseCards, setHouseCards] = React.useState<NilHouseData[]>([]);
  const [house, setHouse] = React.useState<NilHouseData[]>([]);
  const [showCardButton, setShowCardButton] = React.useState(false);

  React.useEffect(() => {
    setHouse(mockHomesData);
  }, []);

  React.useEffect(() => {
    if (house === null) {
      return;
    }
    setHouseCards(house.slice(0, 3));
    if (house.length <= 3) {
      setShowCardButton(false);
    } else {
      setShowCardButton(true);
    }
  }, [house]);

  function handleShowCardClick() {
    if (house === null) {
      return;
    }
    setHouseCards(house.slice(0, houseCards.length + 3));
    if (houseCards.length >= house.length - 3) {
      setShowCardButton(false);
    }
  }

  return (
    <div>
      <h1>Результаты поиска</h1>
      {houseCards.map((home: NilHouseData) => (
        <EstateCard
          key={home?.title ?? ''}
          title={home?.title}
          place={home?.place}
          typeHouse={home?.typeHouse}
          houseRepairs={home?.houseRepairs}
          floor={home?.floor}
          totalArea={home?.totalArea}
          livingSpace={home?.livingSpace}
          kitchenArea={home?.kitchenArea}
          view={home?.view}
          balconyOrLoggia={home?.balconyOrLoggia}
          images={home?.images ?? []}
        />
      ))}
      {showCardButton && (
        <Button type="button" onClick={handleShowCardClick}>
          Показать еще
        </Button>
      )}
    </div>
  );
};

export default EstateCardList;
