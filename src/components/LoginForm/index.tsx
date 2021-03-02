import React, { FormEvent, ReactNode, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import { cnLogin } from './cn-login';

import './index.css';

const LoginForm: React.FC = () => {
  const [loginState, setLoginState] = useState({ login: '', password: '' });
  const [inputState, setInputState] = useState({ login: '', password: '' });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // const data = (event.target as HTMLInputElement).value;
    console.log(loginState);

    setInputState({ login: '', password: '' });
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): ReactNode => {
    const data = event.target.value;

    setInputState({ ...inputState, login: data });
    setLoginState({ ...loginState, login: data });

    return <h2>Вы успешно вошли</h2>;
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): ReactNode => {
    const data = event.target.value;

    setInputState({ ...inputState, password: data });
    setLoginState({ ...loginState, password: data });

    return <h2>Вы успешно вошли</h2>;
  };

  return (
    <Container maxWidth="md">
      <h1>Форма входа</h1>

      <form className={cnLogin()} onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Имя пользователя (логин)</InputLabel>
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
            <InputLabel htmlFor="my-input">Пароль</InputLabel>
            <Input
              id="password"
              onChange={handlePassword}
              value={inputState.password}
              type="text"
              required
              aria-describedby="my-helper-text"
            />
          </FormControl>

          <Button variant="outlined" size="medium" color="primary" type="submit">
            Войти
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default withRouter(LoginForm);
