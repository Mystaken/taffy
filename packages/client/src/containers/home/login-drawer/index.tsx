import { FunctionComponent, useState } from 'react';
import {
  MainDrawer,
  MainDrawerProps
} from '../../../components/drawers/main-drawer';
import { LoginDialog } from './login-dialog';
import { getCurrentUser, logout } from '../../../services/auth/auth.service';

export interface LoginDrawerProps
  extends Pick<MainDrawerProps, 'open' | 'onClose' | 'onVIPPurchaseClicked'> {
  forceDialogOpen?: boolean;
  onLogin?: (user: User) => void;
}

export const LoginDrawer: FunctionComponent<LoginDrawerProps> = ({
  forceDialogOpen = false,
  onLogin,
  ...mainDrawerProps
}) => {
  const [loginDialog, setLoginDialog] = useState<
    undefined | 'login' | 'signup'
  >(undefined);
  const currUser = getCurrentUser();
  const [user, setUser] = useState(currUser ? currUser.user : undefined);

  const handleSignInOpen = () => {
    setLoginDialog(_ => 'login');
  };
  const handleSignUpOpen = () => {
    setLoginDialog(_ => 'signup');
  };
  const handleLoginClose = () => {
    setLoginDialog(_ => undefined);
  };
  const handleOnLogout = () => {
    logout();
    setUser(undefined);
  };

  const handleLogin = (user: User) => {
    setUser(user);
    setLoginDialog(undefined);
    onLogin?.(user);
  };

  return (
    <>
      <MainDrawer
        {...mainDrawerProps}
        user={user}
        onSignin={handleSignInOpen}
        onSignup={handleSignUpOpen}
        onLogout={handleOnLogout}
      />
      <LoginDialog
        open={loginDialog !== undefined || forceDialogOpen}
        tab={loginDialog}
        onClose={handleLoginClose}
        onBackdropClick={handleLoginClose}
        onLogin={handleLogin}
        onSignup={handleLogin}
      />
    </>
  );
};

export default LoginDrawer;
