import React, { FunctionComponent } from 'react';
import { withStyles, Grid } from '@material-ui/core';

const PageContainer = withStyles(_ => ({
  root: {
    height: '100vh'
  }
}))(Grid);

export const CenteredContainer: FunctionComponent = ({ children }) => (
  <PageContainer
    container
    direction="column"
    justify="center"
    alignItems="center">
    <Grid item>{children}</Grid>
  </PageContainer>
);
