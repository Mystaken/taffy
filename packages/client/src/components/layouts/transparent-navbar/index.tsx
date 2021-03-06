import React, { FunctionComponent } from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const transparentNavbarStyles = makeStyles(_ => ({
  navbar: {
    position: 'absolute',
    height: '56px',
    paddingLeft: 12,
    paddingRight: 12,
    zIndex: 1
  }
}));

export const TransparentNavbar: FunctionComponent = props => {
  const classes = transparentNavbarStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.navbar}
      {...props}
    />
  );
};
