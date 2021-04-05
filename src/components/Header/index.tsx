import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';

import { selectIsLoggedIn, selectLoginName, setLogOut } from '../../redux-store/auth/index';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';

import Avatar from './avatar';
import { cnHeader } from './cn-header';
import Logo from './logo';

import './index.css';

const Header: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loginName = useAppSelector(selectLoginName);
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static">
      <section className={cnHeader()}>
        <div className={cnHeader('LogoBlock')}>
          <Link to="/">
            <Logo width={70} height={70} />
          </Link>
          <h1>Real Estate Review System</h1>
        </div>

        {isLoggedIn ? (
          <div style={{ display: 'flex', alignItems: 'center', margin: '0 -5px' }}>
            <Avatar width={25} height={25} />

            <h4 style={{ marginLeft: '5px' }}>{loginName}</h4>

            <Button
              style={{ marginLeft: '20px' }}
              variant="outlined"
              size="small"
              color="inherit"
              onClick={() => {
                dispatch(setLogOut());
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
