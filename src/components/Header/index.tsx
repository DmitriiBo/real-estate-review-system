import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import { cnHeader } from './cn-header';
import Logo from './logo';

// import { Logo } from './logo';
import './index.css';

const TITLE = 'Real Estate Review System';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <section className={cnHeader()}>
        <div style={{ display: 'flex' }}>
          <a href="/" style={{ marginRight: '15px' }}>
            <Logo width={70} heigh={70} />
          </a>
          <h1>{TITLE}</h1>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink exact to="/" className="nav-link">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Вход
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="nav-link">
                Регистрация
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </AppBar>
  );
};

export default Header;
