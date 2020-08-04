/**
 * HOC for Buttons to change the ripple color.
 */
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core';

export interface ButtonRippleProps {
  /* The color of the ripple */
  rippleColor: string;
}

export const WithRipple: <T>(
  Component: React.ComponentType<T>
) => FunctionComponent<T & ButtonRippleProps> = (
  Component: React.ComponentType<any>
) => ({ rippleColor, ...props }) => {
  const classes = makeStyles(_ => ({
    child: {
      backgroundColor: rippleColor
    }
  }))();
  return <Component TouchRippleProps={{ classes }} {...props} />;
};
