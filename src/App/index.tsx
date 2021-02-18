import React from 'react';

import '@fontsource/roboto';

import Header from '../components/Header';
import InputMain from '../components/inputMain';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <InputMain />
    </div>
  );
};
