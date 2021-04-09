import React, { FormEvent, useLayoutEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

import realEstateApi from '../../utils/RealEstateApi';
import { validateEmail, validatePassword, validatePhone } from '../../utils/validation';

import { cnRegister } from './cn-register';

import './index.css';

export const RegisterForm: React.FC = () => {
  const [inputState, setInputState] = useState({
    login: '',
    name: '',
    password: '',
    password2: '',
    email: '',
    phone: '',
  });
  const [validationError, setValidationError] = useState({
    login: false,
    email: false,
    password: false,
    passwordConfirm: false,
    phone: false,
  });

  const [formSubmit, setFormSubmit] = useState(false);

  useLayoutEffect(() => {
    const data = localStorage.getItem(`UserData`);
    if (data) {
      setFormSubmit(true);
    }
  }, []);

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
    // sent register Data
    realEstateApi
      .postData('register', {
        body: {
          email: inputState.email,
          password: inputState.password,
          name: inputState.name,
        },
      })
      .then((res) => {
        if (res.ok) {
          console.log(res);
        }
      });
    setInputState({ login: '', name: '', password: '', password2: '', email: '', phone: '' });
    setFormSubmit(true);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    if (data.length >= 3) {
      setValidationError({ ...validationError, login: false });
    } else {
      setValidationError({ ...validationError, login: true });
    }
    setInputState({ ...inputState, login: data });
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, name: data });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    const result = validatePassword(data);
    setValidationError({ ...validationError, password: !result });
    setInputState({ ...inputState, password: data });
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

    const isValidEmail = validateEmail(data);
    setValidationError({ ...validationError, email: !isValidEmail });
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;

    setInputState({ ...inputState, phone: data });

    const result = validatePhone(data);
    setValidationError({ ...validationError, phone: !result });
  };

  return (
    <Container maxWidth="md">
      {formSubmit ? (
        <div>
          <h2>Спасибо за регистрацию!</h2>
          <a href="/">
            <Button>ПЕРЕЙТИ НА ГЛАВНУЮ</Button>
          </a>
        </div>
      ) : (
        <div>
          <h1>Форма регистрации</h1>
          <form className={cnRegister()} onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel htmlFor="Login">Имя пользователя (логин)</InputLabel>
              <Input
                id="Login"
                type="text"
                onChange={handleLogin}
                value={inputState.login}
                error={validationError.login}
                required
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">Имя от 3 букв</FormHelperText>
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
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor="Password">Пароль</InputLabel>
              <Input
                id="Password"
                onChange={handlePassword}
                type="password"
                value={inputState.password}
                error={validationError.password}
                required
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                от 8 символов, латинские буквы и цифры, могут быть !#$%&
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="Password2">Повторите пароль</InputLabel>
              <Input
                id="Password2"
                type="password"
                required
                aria-describedby="my-helper-text"
                onChange={handlePassword2}
                value={inputState.password2}
                error={validationError.passwordConfirm}
              />
            </FormControl>
            <br />
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
            <br />
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
            <br />
            <Button variant="outlined" size="medium" color="primary" type="submit">
              Зарегистрироваться
            </Button>
          </form>
        </div>
      )}
    </Container>
  );
};
