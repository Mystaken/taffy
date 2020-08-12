import React, { FunctionComponent, useState } from 'react';
import { getCurrentUser } from '../../../services/auth/user-cookie';
import { LoginDialog } from '../../home/login-drawer/login-dialog';

export interface WithAuthProps {
  user?: User;
}

export interface WithAuthOptions {
  isAdmin?: boolean;
}

export const withAuth: <T extends WithAuthProps>(
  Component: React.ComponentType<T>,
  opt?: WithAuthOptions
) => FunctionComponent<T> = (Component: React.ComponentType<any>) => props => {
  const [currUser, setCurrUser] = useState(getCurrentUser());
  if (currUser) {
    return <Component {...props} />;
  }
  return (
    <LoginDialog
      open
      tab="login"
      onLogin={user => setCurrUser(user)}
      onSignup={user => setCurrUser(user)}
    />
  );
};
