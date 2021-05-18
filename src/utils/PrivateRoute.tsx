import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux-store/AuthReducer';
import { useAppSelector } from '../redux-store/hooks';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const isLogin = useAppSelector(selectIsLoggedIn);

  return isLogin ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" exact />
  );
};
export default PrivateRoute;
