import React, { FormEvent } from 'react';
import { Redirect } from 'react-router';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import Loader from '../../App/loader';
import {
  logIn,
  postLogIn,
  selectError,
  selectIsLoggedIn,
  selectLoading,
  selectNetworkError,
} from '../../redux-store/AuthReducer';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import useInput from '../hooks/useInput';

import { cnLogin } from './cn-login';

import './index.css';

export type AccessTokenType = {
  action: { payload: { token?: string | undefined } };
};

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isLoading = useAppSelector(selectLoading);
  const isError = useAppSelector(selectError);
  const isNetworkError = useAppSelector(selectNetworkError);
  const login = useInput('');
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const result = await dispatch(
      postLogIn({
        login: login.value,
        password: password.value,
      }),
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { token } = result.payload;
    if (token) {
      await dispatch(logIn({ login: login.value })); // pass LogIn
      sessionStorage.setItem('token', token);
    }
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
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" {...email} type="email" autoComplete="email" required />
          </FormControl>
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
      {isLoading ? <Loader /> : <>{isLoggedIn ? <Redirect to="/" /> : renderForm()}</>}
    </Container>
  );
};
