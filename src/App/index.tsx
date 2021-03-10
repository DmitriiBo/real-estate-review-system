import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '@fontsource/roboto';

import EstateCard from '../components/EstateCard/EstateCard';
import EstateCardList from '../components/EstateCardList/EstateCardList';
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Search from '../components/Search';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <Search />
      <Switch>
        <Route exact path="/cards">
          <EstateCardList />
        </Route>
        <Route path="/cards/:id">
          <EstateCard />
        </Route>
      </Switch>

      <Reviews />
    </div>
  );
};
