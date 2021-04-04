import React, { useLayoutEffect, useState } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import EstateCard from '../components/EstateCard/EstateCard';
import EstateCardList from '../components/EstateCardList/EstateCardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';
import Search from '../components/Search';
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

  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>('');

  const changeLoggedIn = (loginState: boolean) => {
    setIsloggedIn(loginState);
  };

  const showLogin = (loginName: string) => {
    setUserName(loginName);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem('LoginName') != null) {
      setIsloggedIn(true);
      setUserName(JSON.parse(localStorage.getItem('LoginName') || '{}'));
    }
  }, []);

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth="lg" disableGutters>
          <Header isloggedIn={isloggedIn} userName={userName} changeLoggedIn={changeLoggedIn} />
          <main className={cnApp('MainContent')}>
            <Switch>
              <Route path="/" exact component={Search} />
              {!isloggedIn ? (
                <Route path="/register" component={RegisterForm} />
              ) : (
                <Redirect to="/" exact />
              )}
              {!isloggedIn ? (
                <Route path="/login">
                  <LoginForm
                    isloggedIn={isloggedIn}
                    changeLoggedIn={changeLoggedIn}
                    showLogin={showLogin}
                  />
                </Route>
              ) : (
                <Redirect to="/" exact />
              )}
              <Route exact path="/cards">
                <EstateCardList />
              </Route>
              <Route path="/cards/:id">
                <EstateCard />
              </Route>
            </Switch>
          </main>
          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
