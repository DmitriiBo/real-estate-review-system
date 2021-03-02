import React, { FormEvent, ReactNode, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import { validateEmail } from '../../utils/validation';

import { cnRegister } from './cn-register';

import './index.css';

const RegisterForm: React.FC = () => {
  const [regState, setRegState] = useState({ login: '', password: '', email: '' });
  const [inputState, setInputState] = useState({
    login: '',
    password: '',
    password2: '',
    email: '',
  });
  const [validationError, setValidationError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // const data = (event.target as HTMLInputElement).value;
    if (validationError.email || validationError.password || validationError.passwordConfirm) {
      return console.error(`errorFound: ${JSON.stringify(validationError)}`);
    }

    console.log(regState);

    setInputState({ login: '', password: '', password2: '', email: '' });

    return <Redirect from="/register" to="/new-path" />;
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): ReactNode => {
    const data = event.target.value;

    setInputState({ ...inputState, login: data });
    setRegState({ ...regState, login: data });

    return <h2>Вы успешно вошли</h2>;
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): ReactNode => {
    const data = event.target.value;

    setInputState({ ...inputState, password: data });
    setRegState({ ...regState, password: data });
    setValidationError({ ...validationError, password: false });
    return <h2>Вы успешно вошли</h2>;
  };

  const handlePassword2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    if (data === inputState.password) {
      setInputState({ ...inputState, password2: data });
      setValidationError({ ...validationError, passwordConfirm: false });
    } else {
      setInputState({ ...inputState, password2: data });
      setValidationError({ ...validationError, passwordConfirm: true });
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, email: data });
    setRegState({ ...regState, email: data });

    const result = validateEmail(data);
    setValidationError({ ...validationError, email: !result });
  };

  return (
    <Container maxWidth="md">
      <h1>Форма регистрации</h1>
      <form className={cnRegister()} onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Имя пользователя (логин)</InputLabel>
            <Input
              id="login"
              type="text"
              onChange={handleLogin}
              value={inputState.login}
              required
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Пароль</InputLabel>
            <Input
              id="password"
              onChange={handlePassword}
              type="text"
              value={inputState.password}
              required
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Повторите пароль</InputLabel>
            <Input
              id="password2"
              type="text"
              required
              aria-describedby="my-helper-text"
              onChange={handlePassword2}
              value={inputState.password2}
              error={validationError.passwordConfirm}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email адрес</InputLabel>
            <Input
              id="my-input"
              onChange={handleEmail}
              value={inputState.email}
              error={validationError.email}
              type="text"
              required
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Button variant="outlined" size="medium" color="primary" type="submit">
            Зарегистрироваться
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default withRouter(RegisterForm);
