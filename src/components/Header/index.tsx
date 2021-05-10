import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';

import { logOut, selectIsLoggedIn, selectLoginName } from '../../redux-store/AuthReducer/index';
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
          <span className={cnHeader('LogoDescription')}>Real Estate Review System</span>
        </div>

        {isLoggedIn ? (
          <div className={cnHeader('UserBar')}>
            <Avatar width={25} height={25} />

            <h4 style={{ marginLeft: '5px' }}>{loginName}</h4>

            <Button
              style={{ marginLeft: '20px' }}
              variant="outlined"
              size="small"
              color="inherit"
              onClick={() => {
                dispatch(logOut());
                sessionStorage.removeItem('LoginName');
                sessionStorage.removeItem('token');
              }}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <nav className={cnHeader('TopMenu')}>
            <ul>
              <li>
                <NavLink activeClassName="selected" exact to="/" className="nav-link">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/login" className="nav-link">
                  Вход
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/register" className="nav-link">
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
