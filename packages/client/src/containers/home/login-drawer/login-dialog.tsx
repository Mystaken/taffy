import { FunctionComponent, useState } from 'react';
import { DialogProps } from '@material-ui/core';
import { LoginDialog as LoginDialogView } from '../../../components/dialogs/login-dialog/';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';
import {
  googleLogin,
  facebookLogin,
  LoginDetails,
  login,
  signup,
  SignupDetails
} from '../../../services/auth/auth.service';
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse
} from 'react-facebook-login';

export interface LoginDialogProps
  extends Pick<DialogProps, 'open' | 'onBackdropClick'> {
  onLogin?: (user: User) => void;
  onSignup?: (user: User) => void;
  onClose?: () => void;
  tab?: 'login' | 'signup';
}

export const LoginDialog: FunctionComponent<LoginDialogProps> = ({
  onLogin,
  onSignup,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    setLoading(_ => true);
    if ((response as GoogleLoginResponseOffline).code) {
      console.log('Failed to login. Please try again later.');
      return;
    }
    try {
      const successResponse = response as GoogleLoginResponse;
      const user = await googleLogin(successResponse.tokenId);
      onLogin?.(user);
    } catch (e) {
      console.log('Failed to login. Please try again later');
    }
    setLoading(_ => false);
  };

  const handleFacebookLogin = async (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    setLoading(_ => true);

    const successResponse = response as ReactFacebookLoginInfo;
    if (!successResponse.accessToken) {
      console.log('Failed to login. Please try again later.');
      return;
    }
    try {
      const user = await facebookLogin(successResponse.accessToken);
      onLogin?.(user);
    } catch (e) {
      console.log('Failed to login. Please try again later');
    }
    setLoading(_ => false);
  };

  const handleLogin = async (details: LoginDetails) => {
    setLoading(_ => true);
    try {
      const user = await login(details);
      onLogin?.(user);
    } catch (e) {
      console.log('Invalid Login');
    }
    setLoading(_ => false);
  };

  const handleSignup = async (details: SignupDetails) => {
    setLoading(_ => true);
    try {
      const user = await signup(details);
      onSignup?.(user);
    } catch (e) {
      console.log('Failed to signup');
    }
    setLoading(_ => false);
  };

  return (
    <LoginDialogView
      onGoogleLogin={handleGoogleLogin}
      onFacebookLogin={handleFacebookLogin}
      onLogin={handleLogin}
      onSignup={handleSignup}
      {...props}
    />
  );
};
