import React from 'react';

import { cnHeader } from './cn-header';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <div className={cnHeader()}>{title}</div>;
};

export default Header;
