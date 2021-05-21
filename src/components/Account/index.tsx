import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container } from '@material-ui/core';

import { logOut } from '../../redux-store/AuthReducer';
import { useAppDispatch } from '../../redux-store/hooks';

import { cnAccount } from './cn-account';

import './index.css';

export const Account: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const LoginName = localStorage.getItem('LoginName');
  const userId = localStorage.getItem('user_id') as string;
  const email = localStorage.getItem('email') as string;

  const routeChangeAddObject = () => {
    const path = `/add-object`;
    history.push(path);
  };

  const routeChangeMyReviews = () => {
    const path = '/my-reviews';
    history.push(path);
  };

  const routeChangeMyObjects = () => {
    const path = '/my-objects';
    history.push(path);
  };

  return (
    <Container maxWidth="md">
      <h1>Личный кабинет</h1>
      <div className={cnAccount()}>
        <h3>Имя профиля: {LoginName}</h3>
        <h4>id: {userId}</h4>
        <h4>email: {email}</h4>
        <br />

        <Button
          classes={{
            root: cnAccount(),
          }}
          variant="outlined"
          size="small"
          color="inherit"
          onClick={routeChangeAddObject}
        >
          Добавить недвижимость
        </Button>

        <Button
          classes={{
            root: cnAccount(),
          }}
          variant="outlined"
          size="small"
          color="inherit"
          onClick={routeChangeMyReviews}
        >
          Мои отзывы
        </Button>

        <Button
          classes={{
            root: cnAccount(),
          }}
          variant="outlined"
          size="small"
          color="inherit"
          onClick={routeChangeMyObjects}
        >
          Мои объекты
        </Button>

        <Button
          classes={{
            root: cnAccount(),
          }}
          variant="outlined"
          size="small"
          color="inherit"
          onClick={() => {
            dispatch(logOut());
            localStorage.removeItem('LoginName');
            localStorage.removeItem('token');
          }}
        >
          Выйти
        </Button>
      </div>
    </Container>
  );
};
