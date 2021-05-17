import React, { useLayoutEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import EstateCard from '../components/EstateCard/EstateCard';
import EstateCardList from '../components/EstateCardList/EstateCardList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LastReviewsCarousel from '../components/LastReviewsCarousel';
import { LoginForm } from '../components/LoginForm';
import MyProperties from '../components/MyProperties';
import MyReviews from '../components/MyReviews';
import { RegisterForm } from '../components/RegisterForm';
import Search from '../components/Search';
import { mockReviews } from '../mocks/review-mock-data';
import { logIn, setLoginName } from '../redux-store/auth';
import { useAppDispatch } from '../redux-store/hooks';
import { reviewsGetData, SitemapItem } from '../types';
import realEstateApi from '../utils/RealEstateApi';

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

  const [myReviews, setMyReviews] = React.useState([{}]);

  const dispatch = useAppDispatch();
  const LoginNameFromStorage = JSON.parse(sessionStorage.getItem('LoginName') as string);

  useLayoutEffect(() => {
    if (LoginNameFromStorage != null) {
      dispatch(logIn());
      dispatch(setLoginName(LoginNameFromStorage));
    }
  }, [dispatch, LoginNameFromStorage]);

  React.useEffect(() => {
    realEstateApi
      .getRealEstateData('/api/v1/reviews/tenant')
      // вставить логику подрузки данных с сервера в зависимости от типа пользователя is_tenant или is_landlord
      .then((data: reviewsGetData) => {
        return setMyReviews(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth={false} disableGutters>
          <Header />
          <main className={cnApp('MainContent')}>
            <Switch>
              <Route exact path="/">
                <Search />
                <LastReviewsCarousel reviews={mockReviews} />
              </Route>

              <Route exact path="/my-objects">
                <MyProperties />
              </Route>

              <Route exact path="/my-reviews">
                <MyReviews reviews={myReviews} />
              </Route>

              <Route exact path="/cards">
                <EstateCardList />
              </Route>

              <Route path="/cards/:id">
                <EstateCard />
              </Route>
            </Switch>

            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
            </Switch>
          </main>

          <Footer sitemapItems={sitemapItems} />
        </Container>
      </HashRouter>
    </div>
  );
};
