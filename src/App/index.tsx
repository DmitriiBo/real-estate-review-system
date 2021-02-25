import React from 'react';

import '@fontsource/roboto';

import Header from '../components/Header';
import Review from '../components/Review';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <Review adress="ул.Стахановская, 54 лит 3" />
    </div>
  );
};
