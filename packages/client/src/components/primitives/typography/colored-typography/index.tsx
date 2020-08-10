import { withStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';

export interface ColorTypographyProps {
  color: string;
}

export const ColorTypography: FunctionComponent<
  ColorTypographyProps & Omit<TypographyProps, 'color'>
> = ({ color, ...props }) => {
  const Component = withStyles(_ => ({
    root: {
      color: color
    }
  }))(Typography);
  return <Component {...props} />;
};
