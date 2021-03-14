import React, { useLayoutEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

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
  const [login, setLogin] = useState<string | null>('');

  const changeLoggedIn = (toggleState: boolean) => {
    setIsloggedIn(toggleState);
  };
  const showLogin = (loginName: string) => {
    setLogin(loginName);
  };

  useLayoutEffect(() => {
    if (localStorage.getItem('LoggedIn')) {
      setIsloggedIn(true);
      setLogin(localStorage.getItem('LoggedIn'));
    }
  }, []);

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth="lg" disableGutters>
          <Header isloggedIn={isloggedIn} Login={login} changeLoggedIn={changeLoggedIn} />
          <main className={cnApp('MainContent')}>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/login">
                <LoginForm
                  isloggedIn={isloggedIn}
                  changeLoggedIn={changeLoggedIn}
                  showLogin={showLogin}
                />
              </Route>
            </Switch>
          </main>
          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
