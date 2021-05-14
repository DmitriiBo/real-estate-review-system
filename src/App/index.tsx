import React, { useLayoutEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import { Account } from '../components/Account';
import { AddBuildingForm } from '../components/AddBuildingForm';
import EstateCard from '../components/EstateCard/EstateCard';
import EstateCardList from '../components/EstateCardList/EstateCardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';
import Search from '../components/Search';
import { refresh, refreshToken } from '../redux-store/AuthReducer';
import { useAppDispatch } from '../redux-store/hooks';
import { SitemapItem } from '../types';
import PrivateRoute from '../utils/PrivateRoute';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  const sitemapItems: SitemapItem[] = [
    {
      id: 1,
      name: 'Главная',
      link: '/',
    },
    {
      id: 2,
      name: 'Отзывы',
      link: '/',
    },
    {
      id: 3,
      name: 'Объекты',
      link: '/cards',
    },
  ];

  const token = localStorage.getItem('token') as string;
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (token) {
      dispatch(refreshToken(token));
      const login = localStorage.getItem('LoginName') as string;
      dispatch(refresh({ login }));
    }
  }, [dispatch, token]);

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth={false} disableGutters>
          <Header />

          <main className={cnApp('MainContent')}>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route exact path="/cards">
                <EstateCardList />
              </Route>
              <Route path="/cards/:id">
                <EstateCard />
              </Route>
            </Switch>

            <Switch>
              <PrivateRoute path="/account" component={Account} exact />
              <PrivateRoute path="/add-object" component={AddBuildingForm} exact />
            </Switch>
          </main>

          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
