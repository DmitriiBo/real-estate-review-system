import React from 'react';

import { BackIcon } from '../../assets/icons/BackIcon';

export const Pagination = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BackIcon />
        <a href="#/account">обратно в кабинет</a>
      </div>
      <br />
    </>
  );
};
