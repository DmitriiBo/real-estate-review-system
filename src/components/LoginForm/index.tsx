import React, { FormEvent, useState } from 'react';
import { Redirect } from 'react-router';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import Loader from '../../App/loader';
import {
  ApiLogIn,
  logIn,
  selectIsLoggedIn,
  selectLoading,
  selectNetworkError,
} from '../../redux-store/AuthReducer';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import useInput from '../hooks/useInput';

import { cnLogin } from './cn-login';

import './index.css';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isLoading = useAppSelector(selectLoading);
  const [isError, setIsError] = useState(false);
  const isNetworkError = useAppSelector(selectNetworkError);
  const login = useInput('');
  const password = useInput('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { payload } = await dispatch(
      ApiLogIn({
        login: login.value,
        password: password.value,
      }),
    );

    if (payload) {
      dispatch(logIn({ login: login.value as string })); // pass LogIn
    } else setIsError(true);
  };

  function renderForm() {
    return (
      <form className={cnLogin()} onSubmit={handleSubmit}>
        {isNetworkError && (
          <h4 style={{ color: '#DC143C' }}>{isNetworkError} Ошибка при отправке запроса</h4>
        )}
        {isError && <h4 style={{ color: '#DC143C' }}>Неверный email или пароль </h4>}
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="login">Имя пользователя (логин)</InputLabel>
            <Input id="login" {...login} type="text" autoComplete="username" required />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              id="password"
              {...password}
              type="password"
              autoComplete="current-password"
              required
            />
          </FormControl>
          <br />
          <Button variant="outlined" size="medium" color="primary" type="submit">
            Войти
          </Button>
        </FormGroup>
      </form>
    );
  }

  return (
    <Container maxWidth="md">
      <h1>Форма входа</h1>
      {isLoading ? <Loader /> : <>{isLoggedIn ? <Redirect to="/account" /> : renderForm()}</>}
    </Container>
  );
};
