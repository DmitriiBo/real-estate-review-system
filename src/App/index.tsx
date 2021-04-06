import React from 'react';

import '@fontsource/roboto';

import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Search from '../components/Search';
import StoryTelling from '../components/StoryTelling';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <StoryTelling isLogged />
      <Header title="Main" />
      <Search />
      <Reviews />
    </div>
  );
};
