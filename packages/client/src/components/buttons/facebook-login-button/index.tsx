import FacebookLogin, { ReactFacebookLoginProps } from 'react-facebook-login';
import React, { FunctionComponent } from 'react';
import { config } from '../../../../config';

export type FacebookLoginButtonProps = Omit<ReactFacebookLoginProps, 'appId'>;

export const FacebookLoginButton: FunctionComponent<FacebookLoginButtonProps> = props => {
  return (
    <FacebookLogin appId={config.FACEBOOK_APP_ID} size="small" {...props} />
  );
};
