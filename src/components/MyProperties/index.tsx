import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';

import { RootState } from '../../redux-store/store';
import EstateCardList from '../EstateCardList/EstateCardList';
import { Pagination } from '../Padination/Pagination';

import { cnMyProperties } from './cn-my-properties';

import './index.css';

const MyProperties: React.FC = () => {
  const properties = useSelector((state: RootState) => state.properties.properties);

  return (
    <Container maxWidth="md">
      <div className={cnMyProperties()}>
        <h1 className={cnMyProperties('title')}>Мои объекты</h1>

        <Pagination />

        <EstateCardList properties={properties} />
      </div>
    </Container>
  );
};

export default MyProperties;
