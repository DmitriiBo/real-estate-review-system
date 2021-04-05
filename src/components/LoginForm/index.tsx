import React, { FormEvent, useState } from 'react';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import Loader from '../../App/loader';
import {
  logOut,
  selectIsLoggedIn,
  selectLoginName,
  setIsLoggedIn,
  setLoginName,
} from '../../redux-store/auth/index';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';

import { cnLogin } from './cn-login';

import './index.css';

export const LoginForm: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loginName = useAppSelector(selectLoginName);
  const dispatch = useAppDispatch();

  const [inputState, setInputState] = useState({ login: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    localStorage.setItem(`LoginName`, JSON.stringify(inputState.login));

    dispatch(setLoginName(inputState.login));

    setInputState({ login: '', password: '' });

    setTimeout(() => {
      dispatch(setIsLoggedIn());

      setIsLoading(false);
    }, 1000);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    setInputState({ ...inputState, login: data });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    setInputState({ ...inputState, password: data });
  };

  function renderForm() {
    return (
      <form className={cnLogin()} onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="login">Имя пользователя (логин)</InputLabel>
            <Input
              id="login"
              onChange={handleLogin}
              value={inputState.login}
              type="text"
              required
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              id="password"
              onChange={handlePassword}
              value={inputState.password}
              type="text"
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Форма входа</h1>
          {isLoggedIn ? (
            <div className={cnLogin()}>
              <h3>Вы успешно вошли под именем {loginName}</h3>

              <Button
                type="button"
                variant="outlined"
                size="medium"
                color="primary"
                onClick={() => {
                  dispatch(logOut());
                  localStorage.removeItem('LoginName');
                }}
              >
                Выйти
              </Button>
            </div>
          ) : (
            renderForm()
          )}
        </>
      )}
    </Container>
  );
};
