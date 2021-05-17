import React from 'react';

import EstateCardList from '../EstateCardList/EstateCardList';

import { cnMyProperties } from './cn-my-properties';

import './index.css';

const MyProperties: React.FC = () => {
  return (
    <div className={cnMyProperties()}>
      <h3 className={cnMyProperties('title')}>Мои объекты</h3>
      <EstateCardList />
    </div>
  );
};

export default MyProperties;
