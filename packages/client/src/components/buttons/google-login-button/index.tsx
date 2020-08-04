import React, { FunctionComponent } from 'react';
import GoogleLogin, { GoogleLoginProps } from 'react-google-login';
import { config } from '../../../../config';

export interface GoogleLoginButtonProps
  extends Omit<GoogleLoginProps, 'clientId' | 'buttonText'> {}

export const GoogleLoginButton: FunctionComponent<GoogleLoginButtonProps> = props => {
  return (
    <GoogleLogin
      clientId={config.GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      {...props}
    />
  );
};
