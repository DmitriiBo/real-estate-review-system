import React, { FormEvent, useEffect, useState } from 'react';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import Loader from '../../App/loader';

import { cnLogin } from './cn-login';

import './index.css';

type LoginProps = {
  isloggedIn: boolean;
  changeLoggedIn: (value: boolean) => void;
  showLogin: (value: string) => void;
};

export const LoginForm: React.FC<LoginProps> = (props) => {
  const [inputState, setInputState] = useState({ login: '', password: '' });
  // const [toggleLogIn, setToggleLogIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isloggedIn, showLogin, changeLoggedIn } = props;

  const showLoginStorage = JSON.parse(localStorage.getItem('LoginName') || '{}');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isloggedIn]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    localStorage.setItem(`LoginName`, JSON.stringify(inputState.login));

    changeLoggedIn(true);
    showLogin(inputState.login);
    setInputState({ login: '', password: '' });
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
              aria-describedby="my-helper-text"
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
              aria-describedby="my-helper-text"
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
          {isloggedIn ? (
            <div className={cnLogin()}>
              <h3>Вы успешно вошли под именем {showLoginStorage}</h3>

              <Button
                type="button"
                variant="outlined"
                size="medium"
                color="primary"
                onClick={() => {
                  changeLoggedIn(false);
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
