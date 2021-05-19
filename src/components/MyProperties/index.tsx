import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../redux-store/store';
import { NilHouseData } from '../../types';
import EstateCardList from '../EstateCardList/EstateCardList';

import { cnMyProperties } from './cn-my-properties';

import './index.css';

const MyProperties: React.FC<NilHouseData> = ({ properties }) => {
  return (
    <div className={cnMyProperties()}>
      <h3 className={cnMyProperties('title')}>Мои объекты</h3>
      <EstateCardList properties={properties} />
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    properties: state.properties.properties,
  };
};

export default connect(mapStateToProps, null)(MyProperties);
