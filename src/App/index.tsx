import React, { useLayoutEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import EstateCard from '../components/EstateCard/EstateCard';
import EstateCardList from '../components/EstateCardList/EstateCardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';
import Search from '../components/Search';
import { logIn, setLoginName } from '../redux-store/auth';
import { useAppDispatch } from '../redux-store/hooks';
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
      name: 'Объекты',
      link: '/cards',
    },
    {
      id: 4,
      name: 'Контакты',
      link: '/',
    },
  ];

  // const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const LoginNameFromStorage = JSON.parse(sessionStorage.getItem('LoginName') as string);

  useLayoutEffect(() => {
    if (LoginNameFromStorage != null) {
      dispatch(logIn());
      dispatch(setLoginName(LoginNameFromStorage));
    }
  }, [dispatch, LoginNameFromStorage]);

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth={false} disableGutters>
          <Header />
          <main className={cnApp('MainContent')}>
            <Switch>
              <Route path="/" exact component={Search} />

              <Route exact path="/cards">
                <EstateCardList />
              </Route>

              <Route path="/cards/:id">
                <EstateCard />
              </Route>
            </Switch>
            {/* {!isLoggedIn ? ( */}
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
            </Switch>
            {/* ) : ( */}
            {/*  <Redirect to="/" exact /> */}
            {/* )} */}
          </main>

          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
