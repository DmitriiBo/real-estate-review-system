import React, { FormEvent, useState } from 'react';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import Loader from '../../App/loader';
import {
  logIn,
  logOut,
  selectIsLoggedIn,
  selectLoginName,
  setLoginName,
} from '../../redux-store/auth';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import realEstateApi from '../../utils/RealEstateApi';

import { cnLogin } from './cn-login';

import './index.css';

export const LoginForm: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loginName = useAppSelector(selectLoginName);

  // const keyStore = jose.JWK.createKeyStore();
  // keyStore.generate('RSA', 2048, { alg: 'RS256', use: 'sig' }).then((result) => {
  //   localStorage.setItem('JWK', JSON.stringify(keyStore.toJSON(true)));
  // });

  const dispatch = useAppDispatch();
  const [inputState, setInputState] = useState({ email: '', login: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(false);

  // to do: memory leak
  // useEffect(() => {
  //   return () => {
  //     store.subscribe(isLoggedIn);
  //   };
  // }, [isLoggedIn]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // sent login Data
    await realEstateApi
      .postData('signin', {
        body: { email: inputState.email, password: inputState.password },
      })
      .then((res) => {
        setTimeout(() => {
          if (res.ok) {
            dispatch(logIn());
            dispatch(setLoginName(inputState.login));
            sessionStorage.setItem(`LoginName`, JSON.stringify(inputState.login));
            setIsLoading(false);
          }
          setIsLoading(false);
          setError(true);
        }, 1000);
      });

    setInputState({ email: '', login: '', password: '' });
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    setInputState({ ...inputState, email: data });
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
        {hasError ? <h4 style={{ color: '#DC143C' }}>Неверный email или пароль </h4> : null}
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              onChange={handleEmail}
              value={inputState.email}
              type="text"
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                  sessionStorage.removeItem('LoginName');
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
