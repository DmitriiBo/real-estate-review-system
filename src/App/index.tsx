import React from 'react';

import '@fontsource/roboto';

import AutoSlider from '../components/AutoSlider';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Search from '../components/Search';
import { mockReviews } from '../mocks/review-mock-data';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <AutoSlider reviews={mockReviews} />
      <Search />
      <Reviews />
    </div>
  );
};
