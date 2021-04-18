import React, { FormEvent, useState } from 'react';
import { Redirect } from 'react-router';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import Loader from '../../App/loader';
import { logIn, selectIsLoggedIn, setLoginName } from '../../redux-store/auth';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import realEstateApi from '../../utils/RealEstateApi';

import { cnLogin } from './cn-login';

import './index.css';

export const LoginForm: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  const [inputState, setInputState] = useState({ email: '', login: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await realEstateApi
      .postData('signin', {
        body: { email: inputState.email, password: inputState.password },
      })
      .then((res) => {
        if (res.ok) {
          dispatch(setLoginName(inputState.login));
          dispatch(logIn());
          sessionStorage.setItem(`LoginName`, JSON.stringify(inputState.login));
          setInputState({ email: '', login: '', password: '' });
        }
        setError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: email } = event.target;
    setInputState({ ...inputState, email });
  };
  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: login } = event.target;
    setInputState({ ...inputState, login });
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: password } = event.target;
    setInputState({ ...inputState, password });
  };

  function renderForm() {
    return (
      <form className={cnLogin()} onSubmit={handleSubmit}>
        {hasError && <h4 style={{ color: '#DC143C' }}>Неверный email или пароль </h4>}
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              onChange={handleEmail}
              value={inputState.email}
              type="email"
              autoComplete="email"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="login">Имя пользователя (логин)</InputLabel>
            <Input
              id="login"
              onChange={handleLogin}
              value={inputState.login}
              type="text"
              autoComplete="username"
              required
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              id="password"
              onChange={handlePassword}
              value={inputState.password}
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
