import React, { useLayoutEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import { Account } from '../components/Account';
import { AddBuildingForm } from '../components/AddBuildingForm';
import EstateCard from '../components/EstateCard/EstateCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import MyProperties from '../components/MyProperties';
import MyReviews from '../components/MyReviews';
import { RegisterForm } from '../components/RegisterForm';
import ReviewForm from '../components/ReviewForm';
// import Reviews from '../components/Reviews';
import Search from '../components/Search';
import { ApiRefreshToken, refresh } from '../redux-store/AuthReducer';
import { useAppDispatch } from '../redux-store/hooks';
import { updateProperties } from '../redux-store/PropertiesReducer/actions';
import { updateReviews } from '../redux-store/ReviewsReducer/actions';
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
      link: '/reviews',
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
      dispatch(ApiRefreshToken(token));
      const login = localStorage.getItem('LoginName') as string;
      dispatch(refresh({ login }));
      dispatch(updateProperties());
      const profileType = localStorage.getItem('profileType') as string;
      dispatch(updateReviews({ profileType }));
    }
  });

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth={false} disableGutters>
          <Header />

          <main className={cnApp('MainContent')}>
            <Switch>
              <Route exact path="/" component={ReviewForm} />
            </Switch>

            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
            </Switch>

            <Switch>
              <PrivateRoute path="/account" component={Account} exact />
              <PrivateRoute path="/add-object" component={AddBuildingForm} exact />
              <PrivateRoute path="/my-reviews" component={MyReviews} exact />
              <PrivateRoute path="/my-objects" component={MyProperties} exact />
              <PrivateRoute path="/cards/:id" component={EstateCard} exact />
              {/* <PrivateRoute path="/reviews" component={Reviews} exact /> */}
            </Switch>
          </main>

          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
