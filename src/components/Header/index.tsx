import React from 'react';
import { Button } from '@material-ui/core';

import { cnHeader } from './cn-header';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={cnHeader()}>
      <p>{title}</p>
      <Button variant="outlined" color="primary" onClick={() => alert('Test')}>
        Click me
      </Button>
    </div>
  );
};

export default Header;
