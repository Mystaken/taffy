import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import {
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button
} from '@material-ui/core';

import { GoogleLoginButton } from '../../buttons/google-login-button';
import { FacebookLoginButton } from '../../buttons/facebook-login-button';
import { LoginDialogContentProps } from './types';
import { LoginDetails } from '../../../services/auth/login';

export const LoginDialogContent: FunctionComponent<LoginDialogContentProps> = ({
  onLogin,
  onGoogleLogin,
  onFacebookLogin,
  disabled = false
}) => {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data: Record<string, any>) => {
    const formData = data as LoginDetails;
    onLogin?.(formData);
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <DialogContent>
        <Grid container direction="column">
          <TextField
            label="Email"
            type="text"
            name="email"
            inputRef={register({
              required: true
            })}
            autoFocus
            disabled={disabled}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            inputRef={register({ required: true })}
            disabled={disabled}
          />
        </Grid>

        <Grid container direction="column">
          <Grid item>
            <GoogleLoginButton
              onSuccess={res => onGoogleLogin?.(res)}
              onFailure={() => 'TODO'}
              disabled={disabled}
              cookiePolicy={'single_host_origin'}
            />
          </Grid>
          <Grid item>
            <FacebookLoginButton callback={info => onFacebookLogin?.(info)} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" type="submit" disabled={disabled}>
          Login
        </Button>
      </DialogActions>
    </form>
  );
};
