import React, { FunctionComponent } from 'react';
import {
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { validateEmail } from '../../../utils/validators';
import { SignupDialogContentProps, FullSignupDetails } from './types';

export const SignupDialogContent: FunctionComponent<SignupDialogContentProps> = ({
  onSignup,
  disabled = false
}) => {
  const { register, errors, handleSubmit, watch } = useForm();

  const handleOnSubmit = (data: Record<string, any>) => {
    const formData = data as FullSignupDetails;
    onSignup?.({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    });
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <DialogContent>
        <Grid container direction="column">
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            inputRef={register({ required: true, minLength: 1 })}
            error={!!errors.firstName}
            helperText={errors.firstName ? 'Required' : ''}
            disabled={disabled}
            autoFocus
          />
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            inputRef={register({ required: true, minLength: 1 })}
            error={!!errors.lastName}
            helperText={errors.lastName ? 'Required' : ''}
            disabled={disabled}
          />
          <TextField
            label="Email"
            type="text"
            name="email"
            inputRef={register({
              required: true,
              minLength: 3,
              validate: validateEmail
            })}
            error={!!errors.email}
            helperText={errors.email ? 'Invalid Email' : ''}
            disabled={disabled}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            inputRef={register({ required: true, minLength: 8 })}
            error={!!errors.password}
            helperText={
              errors.password ? 'Password must have at least 8 characters' : ''
            }
            disabled={disabled}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            inputRef={register({
              required: true,
              validate: value => value === watch('password')
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword ? 'Password must match' : ''}
            disabled={disabled}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" type="submit" disabled={disabled}>
          Sign Up
        </Button>
      </DialogActions>
    </form>
  );
};
