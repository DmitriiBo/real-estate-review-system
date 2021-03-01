import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';

import { cnRegister } from './cn-register';

import './index.css';

const RegisterForm: React.FC = () => {
  return (
    <Container maxWidth="md">
      <h1>Register Form</h1>
      <form className={cnRegister()}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Login (name)</InputLabel>
            <Input id="login" required aria-describedby="my-helper-text" />
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" aria-describedby="my-helper-text" />
            <InputLabel htmlFor="my-input">Password confirm</InputLabel>
            <Input id="password2" aria-describedby="my-helper-text" />
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
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
