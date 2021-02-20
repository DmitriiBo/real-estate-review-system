import React from 'react';

import '@fontsource/roboto';

import EstateCard from '../components/EstateCard/EstateCard';
import Header from '../components/Header';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <EstateCard title="4-к. апартаменты, 415,8 м², 13/13 эт." place="Sankt-Peterburg, Россия" />
    </div>
  );
};
