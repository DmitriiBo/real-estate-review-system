import React, { FormEvent, useLayoutEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';

import Loader from '../../App/loader';
import { logIn, selectIsLoggedIn } from '../../redux-store/AuthReducer';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import realEstateApi from '../../utils/RealEstateApi';
import { validateEmail, validatePassword, validatePhone } from '../../utils/validation';
import useInput from '../hooks/useInput';

import { cnRegister } from './cn-register';

import './index.css';

export const RegisterForm: React.FC = () => {
  const [inputState, setInputState] = useState({
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    password: '',
    birthDate: '1990-11-11',
    isTenant: false,
    isLandlord: false,
    passwordConfirm: '',
    email: '',
    phone: '',
  });
  const [validationError, setValidationError] = useState({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
    phone: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const dispatch = useAppDispatch();
  const isloggedIn = useAppSelector(selectIsLoggedIn);

  const firstName = useInput('');
  const lastName = useInput('');
  const middleName = useInput('');

  useLayoutEffect(() => {
    const isReg = sessionStorage.getItem(`Registered`);
    if (isReg) {
      setFormSubmit(true);
    }
  }, [formSubmit]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

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
      .postData('api/v1/register', {
        body: {
          email: inputState.email,
          password: inputState.password,
          password2: inputState.passwordConfirm,
          is_tenant: inputState.isTenant,
          is_landlord: inputState.isLandlord,
          username: inputState.username,
          birth_date: inputState.birthDate,
          firstname: firstName.value,
          middlename: middleName.value,
          lastname: lastName.value,
        },
      })
      .then((response) => {
        if (response.ok) {
          dispatch(logIn({ login: inputState.username }));
          sessionStorage.setItem('LoginName', JSON.stringify(inputState.username));
          setFormSubmit(true);
        }
        setError(true);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));

    setInputState({
      username: '',
      firstName: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: '',
      birthDate: '1990-11-11',
      isTenant: false,
      isLandlord: false,
      lastName: '',
      middleName: '',
    });
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    if (data.length >= 3) {
      setValidationError({ ...validationError, username: false });
    } else {
      setValidationError({ ...validationError, username: true });
    }
    setInputState({ ...inputState, username: data });
  };

  const handleOwner = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const data = event.target.value;
    if (data === 'isTenant') {
      setInputState({ ...inputState, isTenant: true });
    } else {
      setInputState({ ...inputState, isLandlord: true });
    }
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

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputState({ ...inputState, birthDate: value.substring(0, 11) });
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
          {error && <h4 style={{ color: '#DC143C' }}>{error} Ошибка при отправке запроса</h4>}
          {loading ? (
            <Loader />
          ) : (
            <form className={cnRegister()} onSubmit={handleSubmit}>
              <FormControl>
                <InputLabel htmlFor="Login">Имя пользователя (логин)</InputLabel>
                <Input
                  id="Login"
                  type="text"
                  onChange={handleLogin}
                  value={inputState.username}
                  error={validationError.username}
                  autoComplete="username"
                  required
                  aria-describedby="my-helper-text"
                />
                <FormHelperText id="my-helper-text">Имя от 3 букв</FormHelperText>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="Name">Имя</InputLabel>
                <Input
                  id="Name"
                  type="text"
                  {...firstName}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="middlename">Отчество</InputLabel>
                <Input
                  id="middlename"
                  type="text"
                  {...middleName}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="lastname">Фамилия</InputLabel>
                <Input
                  id="lastname"
                  type="text"
                  {...lastName}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />
              <FormControl>
                <TextField
                  id="date"
                  label=""
                  type="date"
                  value={inputState.birthDate}
                  onChange={handleDateChange}
                />
              </FormControl>
              <br />
              <FormControl component="fieldset">
                <RadioGroup onChange={handleOwner}>
                  <FormControlLabel value="isLandlord" control={<Radio />} label="Собственник" />
                  <FormControlLabel value="isTenant" control={<Radio />} label="Арендатор" />
                </RadioGroup>
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
          )}
        </div>
      )}
    </Container>
  );
};
