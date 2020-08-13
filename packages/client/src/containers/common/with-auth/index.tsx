import React, { FunctionComponent, useState } from 'react';
import { getCurrentUser } from '../../../services/auth/user-cookie';
import { LoginDialog } from '../../home/login-drawer/login-dialog';
import { ErrorPage } from '../../../components/pages/error-page';

export interface WithAuthProps {
  user?: User;
}

export interface WithAuthOptions {
  isAdmin?: boolean;
}

export const withAuth: <T extends WithAuthProps>(
  Component: React.ComponentType<T>,
  opt?: WithAuthOptions
) => FunctionComponent<T> = (
  Component: React.ComponentType<any>,
  { isAdmin = false }: WithAuthOptions = {}
) => props => {
  const [currUser, setCurrUser] = useState(getCurrentUser());
  if (currUser && !currUser.isAdmin && isAdmin) {
    return <ErrorPage message="Unauthorized" />;
  }
  if (currUser) {
    return <Component {...props} user={currUser} />;
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
