import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container } from '@material-ui/core';

import { cnAccount } from './cn-account';

import './index.css';

export const Account: React.FC = () => {
  const history = useHistory();
  const LoginName = sessionStorage.getItem('LoginName');

  const routeChange = () => {
    const path = `/add-object`;
    history.push(path);
  };
  return (
    <Container maxWidth="md">
      <h1>Личный кабинет</h1>
      <div className={cnAccount()}>
        <h3>Имя профиля: {LoginName}</h3>
        <br />

        <Button
          className={cnAccount('Buttons')}
          variant="outlined"
          size="small"
          color="inherit"
          onClick={routeChange}
        >
          Добавить недвижимость
        </Button>

        <Button className={cnAccount('Buttons')} variant="outlined" size="small" color="inherit">
          Выйти
        </Button>
      </div>
    </Container>
  );
};
