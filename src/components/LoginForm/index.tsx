import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import { cnLogin } from './cn-login';

import './index.css';

const LoginForm: React.FC = () => {
  return (
    <Container maxWidth="md">
      <h1>Login Form</h1>
      <form className={cnLogin()}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Login (name)</InputLabel>
            <Input id="login" required aria-describedby="my-helper-text" />
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" aria-describedby="my-helper-text" />
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
