import React from 'react';
import { useCtx } from './context';
import LoggedInNav from './navigators/loggedInNavigator/logged.in.nav';
import LoggedOutNav from './navigators/logged.out.nav';

const AuthNavigator = () => {
  const ctx = useCtx();

  if (ctx?.currentUser) {
    return <LoggedInNav />;
  } else {
    return <LoggedOutNav />;
  }
};

export default AuthNavigator;
