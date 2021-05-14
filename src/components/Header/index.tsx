import React from 'react';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';

import { logOut, selectIsLoggedIn, selectLoginName } from '../../redux-store/AuthReducer';
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';

import Avatar from './avatar';
import { cnHeader } from './cn-header';
import Logo from './logo';

import './index.css';

const Header: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const loginName = useAppSelector(selectLoginName);
  const dispatch = useAppDispatch();

  const history = useHistory();
  const routeChange = () => {
    const path = `/account`;
    history.push(path);
  };

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

            <h5 style={{ marginLeft: '8px' }}>{loginName?.slice(0, 10)}</h5>

            <Button variant="outlined" size="small" color="inherit" onClick={routeChange}>
              кабинет
            </Button>

            <Button
              variant="outlined"
              size="small"
              color="inherit"
              onClick={() => {
                dispatch(logOut());
                localStorage.removeItem('LoginName');
                localStorage.removeItem('token');
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
