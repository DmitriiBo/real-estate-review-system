import React, { FormEvent, useLayoutEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

import { logIn, selectIsLoggedIn, setLoginName } from '../../redux-store/auth';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import realEstateApi from '../../utils/RealEstateApi';
import { validateEmail, validatePassword, validatePhone } from '../../utils/validation';

import { cnRegister } from './cn-register';

import './index.css';

export const RegisterForm: React.FC = () => {
  const [inputState, setInputState] = useState({
    login: '',
    name: '',
    password: '',
    passwordConfirm: '',
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

  const dispatch = useAppDispatch();
  const isloggedIn = useAppSelector(selectIsLoggedIn);

  useLayoutEffect(() => {
    const isReg = sessionStorage.getItem(`Registered`);
    if (isReg) {
      setFormSubmit(true);
    }
  }, [formSubmit]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (
      validationError.email ||
      validationError.password ||
      validationError.passwordConfirm ||
      validationError.phone
    ) {
      return;
    }
    if (inputState.password !== inputState.passwordConfirm) {
      setValidationError({
        ...validationError,
        password: true,
      });
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
      .then(() => {
        dispatch(logIn());
        sessionStorage.setItem('LoginName', JSON.stringify(inputState.login));
        dispatch(setLoginName(inputState.login));
        setFormSubmit(true);
      });

    setInputState({ login: '', name: '', password: '', passwordConfirm: '', email: '', phone: '' });
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
      setInputState({ ...inputState, passwordConfirm: data });
      setValidationError({ ...validationError, password: false, passwordConfirm: false });
    } else {
      setInputState({ ...inputState, passwordConfirm: data });
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
      {formSubmit || isloggedIn ? (
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
                autoComplete="username"
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
                autoComplete="new-password"
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
                autoComplete="new-password"
                required
                aria-describedby="my-helper-text"
                onChange={handlePassword2}
                value={inputState.passwordConfirm}
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
                autoComplete="email"
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
