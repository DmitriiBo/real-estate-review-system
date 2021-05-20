import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux-store/store';
import EstateCardList from '../EstateCardList/EstateCardList';

import { cnMyProperties } from './cn-my-properties';

import './index.css';

const MyProperties: React.FC = () => {
  const properties = useSelector((state: RootState) => state.properties.properties);

  return (
    <div className={cnMyProperties()}>
      <h3 className={cnMyProperties('title')}>Мои объекты</h3>
      <EstateCardList properties={properties} />
    </div>
  );
};

export default MyProperties;
