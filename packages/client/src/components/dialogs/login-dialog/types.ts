import { DialogProps } from '@material-ui/core';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse
} from 'react-facebook-login';
import { LoginDetails } from '../../../services/auth/login';
import { SignupDetails } from '../../../services/auth/signup';

export interface LoginDialogContentProps {
  onLogin?: (details: LoginDetails) => void;
  onGoogleLogin?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFacebookLogin?: (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => void;
  disabled?: boolean;
}

export interface FullSignupDetails extends SignupDetails {
  confirmPassword: string;
}

export interface SignupDialogContentProps {
  onSignup?: (loginDetails: SignupDetails) => void;
  disabled?: boolean;
}

export interface LoginDialogTitleProps {
  selectedTab: number;
  onSwitchTabs: (event: React.ChangeEvent<{}>, tab: number) => void;
}

export interface LoginDialogProps
  extends Pick<DialogProps, 'open' | 'onBackdropClick'> {
  tab?: 'login' | 'signup';
  disabled?: boolean;
  onLogin?: (details: LoginDetails) => void;
  onGoogleLogin?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFacebookLogin?: (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => void;
  onSignup?: (loginDetails: SignupDetails) => void;
}
