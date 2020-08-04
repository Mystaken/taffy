import React, { FunctionComponent } from 'react';
import { TypographyProps, Typography } from '@material-ui/core';

export const FooterText: FunctionComponent<TypographyProps> = props => (
  <Typography {...props} color="textSecondary"></Typography>
);
