import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import '@fontsource/roboto';

import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Search from '../components/Search';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  return (
    <div className={cnApp()}>
      <HashRouter>
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </Container>
      </HashRouter>
    </div>
  );
};
