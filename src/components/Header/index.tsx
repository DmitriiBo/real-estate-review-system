import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';

import Avatar from './avatar';
import { cnHeader } from './cn-header';
import Logo from './logo';

import './index.css';

type States = {
  isloggedIn: boolean;
  Login: string | null;
  changeLoggedIn: (value: boolean) => void;
};

const Header: React.FC<States> = (props) => {
  const { isloggedIn, changeLoggedIn } = props;
  const showLogin = JSON.parse(localStorage.getItem('LoginName') || '{}');
  return (
    <AppBar position="static">
      <section className={cnHeader()}>
        <div className={cnHeader('LogoBlock')}>
          <Link to="/">
            <Logo width={70} height={70} />
          </Link>
          <h1>Real Estate Review System</h1>
        </div>

        {isloggedIn ? (
          <div style={{ display: 'flex', alignItems: 'center', margin: '0 -5px' }}>
            <Avatar width={25} height={25} />

            <h4 style={{ marginLeft: '5px' }}>{showLogin}</h4>

            <Button
              style={{ marginLeft: '20px' }}
              variant="outlined"
              size="small"
              color="inherit"
              onClick={() => {
                changeLoggedIn(false);
                localStorage.removeItem('LoginName');
              }}
            >
              Выйти
            </Button>
          </div>
        ) : (
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
        )}
      </section>
    </AppBar>
  );
};

export default Header;
