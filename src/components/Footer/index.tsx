import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid, List } from '@material-ui/core';

import { cnFooter } from './cn-footer';
import Logo from './logo';

import './index.css';

const Footer: React.FC = () => {
  const FooterCenterHeader = <h4>RealEstate system 2021</h4>;
  const SitemapHeader = <h4>Карта сайта</h4>;

  return (
    <footer className={cnFooter()}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <div>
          <Link to="/">
            <Logo width={70} heigh={70} />
          </Link>
          <p>RealEstate system</p>
        </div>

        {FooterCenterHeader}

        <List subheader={SitemapHeader}>
          <ul className={cnFooter('ul')}>
            <li className={cnFooter('li')}>
              <NavLink exact to="/" className="nav-link">
                Главная
              </NavLink>
            </li>
            <li className={cnFooter('li')}>
              <NavLink to="/login" className="nav-link">
                Вход
              </NavLink>
            </li>
            <li className={cnFooter('li')}>
              <NavLink to="/register" className="nav-link">
                Регистрация
              </NavLink>
            </li>
          </ul>
        </List>
      </Grid>
    </footer>
  );
};

export default Footer;
