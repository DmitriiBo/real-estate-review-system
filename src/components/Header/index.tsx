import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import { cnHeader } from './cn-header';

import './index.css';

const TITLE = 'Real Estate Review System';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <div className={cnHeader()}>
        <img alt="react logo" src="./react.svg" />
        <h1>{TITLE}</h1>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="nav-link">
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link">
              Вход
            </NavLink>
          </li>
        </ul>
      </div>
    </AppBar>
  );
};

export default Header;
