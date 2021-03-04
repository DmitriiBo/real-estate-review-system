import React, { FormEvent, useState } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

import { validateEmail, validatePhone } from '../../utils/validation';

import { cnRegister } from './cn-register';

import './index.css';

const RegisterForm: React.FC = () => {
  const [regState, setRegState] = useState({
    login: '',
    name: '',
    password: '',
    email: '',
    phone: '',
  });
  const [inputState, setInputState] = useState({
    login: '',
    name: '',
    password: '',
    password2: '',
    email: '',
    phone: '',
  });
  const [validationError, setValidationError] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    phone: false,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (
      validationError.email ||
      validationError.password ||
      validationError.passwordConfirm ||
      validationError.phone
    ) {
      console.error(`errorFound: ${JSON.stringify(validationError)}`);
      return;
    }

    if (inputState.password !== inputState.password2) {
      setValidationError({
        ...validationError,
        password: true,
      });
      console.error(`errorFound: ${JSON.stringify(validationError)}`);
      return;
    }
    console.log(regState);
    setInputState({ login: '', name: '', password: '', password2: '', email: '', phone: '' });
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, login: data });
    setRegState({ ...regState, login: data });
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, name: data });
    setRegState({ ...regState, name: data });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, password: data });
    setRegState({ ...regState, password: data });
  };

  const handlePassword2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    if (data === inputState.password) {
      setInputState({ ...inputState, password2: data });
      setValidationError({ ...validationError, password: false, passwordConfirm: false });
    } else {
      setInputState({ ...inputState, password2: data });
      setValidationError({ ...validationError, password: true, passwordConfirm: true });
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, email: data });
    setRegState({ ...regState, email: data });

    const result = validateEmail(data);
    setValidationError({ ...validationError, email: !result });
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, phone: data });
    setRegState({ ...regState, phone: data });

    const result = validatePhone(data);
    setValidationError({ ...validationError, phone: !result });
  };

  return (
    <Container maxWidth="md">
      <h1>Форма регистрации</h1>
      <form className={cnRegister()} onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="Login">Имя пользователя (логин)</InputLabel>
          <Input
            id="Login"
            type="text"
            onChange={handleLogin}
            value={inputState.login}
            required
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Имя пользователя от 8 символов, буквы только латиница
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Name">Фамилия Имя Отчество</InputLabel>
          <Input
            id="Name"
            type="text"
            onChange={handleName}
            value={inputState.name}
            required
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">Ваше ФИО</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Password">Пароль</InputLabel>
          <Input
            id="Password"
            onChange={handlePassword}
            type="text"
            value={inputState.password}
            error={validationError.password}
            required
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            От 8 символов, может содержать буквы и цифры символы !)(|
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Password2">Повторите пароль</InputLabel>
          <Input
            id="Password2"
            type="text"
            required
            aria-describedby="my-helper-text"
            onChange={handlePassword2}
            value={inputState.password2}
            error={validationError.passwordConfirm}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Email">Email адрес</InputLabel>
          <Input
            id="Email"
            onChange={handleEmail}
            value={inputState.email}
            error={validationError.email}
            type="text"
            required
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="Phone">Телефон</InputLabel>
          <Input
            id="Phone"
            type="text"
            onChange={handlePhone}
            value={inputState.phone}
            error={validationError.phone}
            required
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            Телефон начинается с 7 или 8, пример 89454560055
          </FormHelperText>
        </FormControl>
        <Button variant="outlined" size="medium" color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  );
};

export default withRouter(RegisterForm);
