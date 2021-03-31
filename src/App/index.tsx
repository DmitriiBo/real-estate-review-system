import React, { useLayoutEffect } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';
import Search from '../components/Search';
import { useAppDispatch, useAppSelector } from '../redux-store/hooks';
import { selectIsLoggedIn, setLogIn, setLoginName } from '../redux-store/reducer';
import { SitemapItem } from '../types';

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
      name: 'Карта объектов',
      link: '/',
    },
    {
      id: 4,
      name: 'Контакты',
      link: '/',
    },
  ];

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const getStorageLogin = JSON.parse(localStorage.getItem('LoginName') as string);

  useLayoutEffect(() => {
    if (getStorageLogin != null) {
      dispatch(setLogIn());
      dispatch(setLoginName(getStorageLogin));
    }
  }, [dispatch, getStorageLogin]);

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth="lg" disableGutters>
          <Header />
          <main className={cnApp('MainContent')}>
            <Switch>
              <Route path="/" exact component={Search} />
              {!isLoggedIn ? (
                <Route path="/register" component={RegisterForm} />
              ) : (
                <Redirect to="/" exact />
              )}
              {!isLoggedIn ? (
                <Route path="/login">
                  <LoginForm />
                </Route>
              ) : (
                <Redirect to="/" exact />
              )}
            </Switch>
          </main>
          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
