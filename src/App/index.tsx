import React from 'react';

import '@fontsource/roboto';

import ClientStepper from '../components/ClientStepper';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Search from '../components/Search';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <ClientStepper isLogged />
      <Header title="Main" />
      <Search />
      <Reviews />
    </div>
  );
};
