import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid, List } from '@material-ui/core';

import { SitemapItem } from '../../types';
import Logo from '../Header/logo';

import { cnFooter } from './cn-footer';

import './index.css';

type FooterProps = {
  sitemapItems: SitemapItem[];
};

const Footer: React.FC<FooterProps> = (props) => {
  const { sitemapItems } = props;

  return (
    <footer className={cnFooter()}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <div>
          <Link to="/">
            <Logo width={70} height={70} />
          </Link>
          <p>RealEstate system</p>
        </div>

        <h4>RealEstate system 2021</h4>

        <List subheader={<h4>Карта сайта</h4>}>
          <ul className={cnFooter('Sitemap')}>
            {sitemapItems.map((item) => {
              return (
                <li key={Math.random()} className={cnFooter('SitemapItem')}>
                  <NavLink exact to={item.link} className="nav-link">
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </List>
      </Grid>
    </footer>
  );
};

export default Footer;
